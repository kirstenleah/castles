class CastleSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :description, :location, :price, :likes, :is_sold
end
