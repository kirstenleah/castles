class User < ApplicationRecord
  has_many :purchases
  has_many :castles, through: :purchases

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
end
