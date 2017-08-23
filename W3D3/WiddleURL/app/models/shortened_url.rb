# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  long_url   :string
#  short_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShortenedUrl < ApplicationRecord

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  def self.random_code

    shortened = nil

    loop do
      shortened = SecureRandom::urlsafe_base64
      break unless ShortenedUrl.exists?(short_url: shortened)
    end

    shortened

  end


  def self.from_long_url(user, long_url)
    options = {
      user_id: user.id,
      long_url: long_url,
      short_url: random_code
    }

    ShortenedUrl.create!(options)
  end

end
