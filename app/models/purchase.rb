class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :castle

  # makes sure we can only have a unique user_id and castle_id combo
  validates :user_id, uniqueness: { scope: %i[castle_id] }
end
