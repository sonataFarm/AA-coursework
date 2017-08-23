class Visit < ApplicationRecord
  validates :user_id, :url_id, presence: true

  def self.record_visit!(user, shortened_url)
    options = {
      user_id: user.id,
      url_id: shortened_url.id
    }

    User.create(options)
  end
end
