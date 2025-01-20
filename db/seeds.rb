# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

categories = [ 'accommodation_and_hotels', 'places_and_Activities', 'restaurants', 'hidden_gems']
categories.each {|category| Category.create!(name: category)}

sub_categories_for_accommodation_and_hotels = ["hotels_resorts", "hostels", "vacation_rentals", "homestays", "boutique_hotels", "luxury_stays", "budget_stays", "campsites_glamping", "lodges_cabins", "onsen_resorts"]
sub_categories_for_accommodation_and_hotels.each {|sub_category| SubCategory.create!(name: sub_category, category_id: 1)}

sub_categories_for_places_and_activities = ["beaches", "parks_gardens", "mountains_valleys", "national_parks", "waterfalls", "forests_wildlife_areas", "reefs_islands", "hiking_camping_trails", "4wd", "atv_off_road_tours", "skydiving", "parasailing_paragliding", "zipline_aerial_adventure_parks", "canyoning_rappelling_tours", "scuba_diving_snorkeling", "river_rafting_tubing", "ski_snowboard_areas", "ancient_ruins", "churches_cathedrals", "castles", "monuments_statues", "museums_art_history_science", "historic_walking_areas", "sacred_religious_sites", "amusement_theme_parks", "zoos_aquariums", "game_entertainment_centres", "observation_decks_towers", "shopping_malls_markets"]
 =>
sub_categories_for_places_and_activities.each {|sub_category| SubCategory.create!(name: sub_category, category_id: 2)}

sub_categories_for_restaurants = ["local_cuisine_restaurants", "fine_dining", "casual_dining", "street_food_stalls", "cafés_&_coffee_shops", "bars_&_pubs", "breweries_&_beer_gardens", "wine_bars_&_vineyards", "food_markets_&_farmers_markets" ]

states_data = CS.states(:IN)
cities_data = states_data.flat_map { |state| CS.cities(state[0]) }.sort
cities_data.each { |city| coords = Geocoder.search(city).first&.coordinates; Destination.create(name: city, coordinates: coords) if coords }
