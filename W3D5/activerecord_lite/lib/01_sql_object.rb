require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.table_name
    @table_name || self.new.class.to_s.tableize
  end

  def self.table_name=(value)
    @table_name = value
  end

  def self.columns
    if @columns
      @columns
    else
      @columns = fetch_column_names
    end
  end

  def self.fetch_column_names
    data = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{table_name}
    SQL

    data.first.map(&:to_sym)
  end

  def self.finalize!
    columns.each do |column_name|
      define_method(column_name) do
        attributes[column_name]
      end

      define_method("#{column_name}=") do |value|
        attributes[column_name] = value
      end
    end
  end

  def self.all
    data = DBConnection.execute(<<-SQL)
      SELECT *
      FROM #{table_name}
    SQL
    parse_all(data)
  end

  def self.parse_all(data)
    data.map { |datum| self.new(datum) }
  end

  def self.find(id)
    data = DBConnection.execute(<<-SQL, id)
      SELECT *
      FROM #{table_name}
      WHERE id = ?
    SQL

    data.any? ? self.new(data.first) : nil
  end

  def initialize(params = {})
    params.each do |param, value|
      if !self.class.columns.include?(param.to_sym)
        raise "unknown attribute '#{param}'"
      else
        self.send("#{param}=", value)
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_names
    @attributes.map { |name, _| name }
  end

  def attribute_values
    attributes.map { |_, value| value }
  end

  def insert
    cols = attribute_names.join(', ')
    q_marks = (['?'] * attribute_names.length).join(', ')

    DBConnection.execute(<<-SQL, *attribute_values)
      INSERT INTO #{self.class.table_name} (#{cols})
      VALUES (#{q_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    column_names = attribute_names.join(' = ?, ') + '= ?'

    DBConnection.execute(<<-SQL, *attribute_values, id)
      UPDATE
        #{self.class.table_name}
      SET
        #{column_names}
      WHERE
        id = ?
    SQL
  end

  def save
    if id.nil?
      insert
    else
      update
    end
  end
end
