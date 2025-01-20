class CreateDestinations < ActiveRecord::Migration[7.2]
  def change
    create_table :destinations do |t|
      t.string :name
      t.point :coordinates

      t.timestamps
    end
  end
end
