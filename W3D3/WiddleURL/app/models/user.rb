# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base

  validates :email, presence: true, uniqueness: true

  has_many :submissions,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ShortenedUrl

end
