require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    data = DBConnection.execute(<<-SQL, *args(params))
      SELECT *
      FROM #{self.table_name}
      WHERE #{where_line(params)}
    SQL

    data.map { |datum| self.new(datum) }
  end

  def args(params)
    params.values
  end

  def where_line(params)
    params.keys.join(' = ? AND ') + ' = ?'
  end
end

class SQLObject
  extend Searchable
end
