# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Album.destroy_all
    Song.destroy_all
    Artist.destroy_all
    Playlist.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      username: 'demo', 
      email: 'demo@demo.com', 
      password: 'demodemo'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    # Artist.create!(name: "Snakehips")
    # Artist.create!(name: "Louis The Child")
    # Artist.create!(name: "Emotional Oranges")
    # Artist.create!(name: "Sam Smith")
    # Artist.create!(name: "Honne")
    # Artist.create!(name: "J.Cole")

    Album.create!(title: "Nights Like This", artist_id: 1, year: 2019)
    Album.create!(title: "Stay Home Tapes", artist_id: 1, year: 2018)
    Album.create!(title: "Don't Leave", artist_id: 1, year: 2017)
    Album.create!(title: "All My Friends", artist_id: 1, year: 2016)
    Album.create!(title: "Forever (Pt. II) - EP", artist_id: 1, year: 2015)
    # Album.create!(name: "", artist_id: , year: )


    Song.create!(title: "Nights Like This (ft. Ty Dolla $ign)", album_id: 1)
    Song.create!(title: "For the F^_^k Of It (ft. Jeremih & Amine)", album_id: 2)
    Song.create!(title: "Don't Leave", album_id: 3)
    Song.create!(title: "All My Friends (ft. Tinashe & Chance the Rapper)", album_id: 4)
    Song.create!(title: "Dimelo", album_id: 4)
    Song.create!(title: "Forever (Pt. II) (ft. Kaleem Taylor)", album_id: 5)
    Song.create!(title: "Overtime (ft. Sasha Keable)", album_id: 5)

    # Playlist.create!(title: "", author_id: , song_id: )
  
    puts "Done!"
end