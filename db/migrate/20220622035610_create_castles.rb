class CreateCastles < ActiveRecord::Migration[6.1]
  def change
    create_table :castles do |t|
      t.string :image
      t.string :title
      t.string :description
      t.string :location
      t.integer :price
      t.integer :likes
      t.boolean :is_sold

      t.timestamps
    end
  end
end
