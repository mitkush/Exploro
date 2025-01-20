class PlaceSubCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :place_sub_categories do |t|
      t.references :place, foreign_key: true
      t.references :sub_category, foreign_key: true

      t.timestamps
    end
  end
end
