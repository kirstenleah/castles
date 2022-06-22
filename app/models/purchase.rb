class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :castle

  validates :purchase, uniqueness: { scope: %i[user_id castle_id] }
end
