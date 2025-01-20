class CreatePlaces < ActiveRecord::Migration[7.2]
  def change
    create_table :places do |t|
      t.string :name
      t.text :about
      t.string :address_line_1
      t.string :address_line_2
      t.string :city
      t.string :state
      t.string :country, default: "India"

      # Foreign key for destination association
      t.references :destination, foreign_key: true

      # Foreign key for category association
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
