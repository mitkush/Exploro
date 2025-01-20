class Category < ApplicationRecord
  has_many :sub_categories, dependent: :destroy
  has_many :places, dependent: :destroy

  def sub_categories
    name == "hidden_gems" ? SubCategory.all : super
  end
end
