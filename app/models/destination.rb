class Destination < ApplicationRecord
  has_many :places, dependent: :destroy

  def latitude
    coordinates.y
  end

  def longitude
    coordinates.x
  end
end
