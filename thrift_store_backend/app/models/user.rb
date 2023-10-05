class User < ApplicationRecord
  validates :email,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
end
