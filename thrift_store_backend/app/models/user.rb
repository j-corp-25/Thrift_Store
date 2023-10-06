class User < ApplicationRecord
  validates :email,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }

    # ensures phone number is present if the notification preference is both or phone
    validates :phone_number, presence: true, if: -> { notification_preference_phone_or_both? }

    # ensures the value is either email, phone or both
    validates :notification_preference, inclusion: { in: ['email', 'phone', 'both'] }

    #ensures
    def notification_preference_phone_or_both?
      ['phone', 'both'].include?(notification_preference)
    end
end
