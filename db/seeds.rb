# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
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
      password: 'password'
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

    Album.create!(name: "Nights Like This", artist_id: 1, year: 2019)
    Album.create!(name: "Stay Home Tapes", artist_id: 1, year: 2018)
    Album.create!(name: "Don't Leave", artist_id: 1, year: 2017)
    Album.create!(name: "All My Friends", artist_id: 1, year: 2016)
    Album.create!(name: "Forever (Pt. II) - EP", artist_id: 1, year: 2015)
    # Album.create!(name: "", artist_id: , year: )


    # Song.create!(title: "", album_id: )

    # Playlist.create!(title: "", author_id: , song_id: )
  
    puts "Done!"
end