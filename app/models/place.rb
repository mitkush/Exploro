class Place < ApplicationRecord
  belongs_to :destination
  belongs_to :category
  has_and_belongs_to_many :sub_categories, join_table: :place_sub_categories

  validates :name, :city, :country, presence: true
end
