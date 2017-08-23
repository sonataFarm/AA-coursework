require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def omit_punctuation(str)
  str.chars.reduce('') do |alpha_only, char|
    alpha_only << char if alpha?(char)
    alpha_only
  end
end

def alpha?(char)
  char.downcase >= 'a' && char.downcase <= 'z'
end

types = [:god, :primordial, :titan, :hero]

100.times do

  username = omit_punctuation(Faker::Ancient.send(types.sample).downcase + Faker::Ancient.send(types.sample).capitalize)
  User.create(username: username)
end
