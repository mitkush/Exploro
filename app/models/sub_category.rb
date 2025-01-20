class SubCategory < ApplicationRecord
  belongs_to :category
  has_and_belongs_to_many :places, join_table: :place_sub_categories
end
