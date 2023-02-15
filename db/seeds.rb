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
    PlaylistSong.destroy_all
  
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

    Artist.create!(name: "Snakehips", description: "Snakehips is a British electronic music duo consisting of Oliver Lee and James Carter. They are best known for their blend of hip-hop, R&B and electronic music and have gained widespread popularity with hit songs such as \"All My Friends\" and \"Don\'t Leave\". Their music has been praised for its smooth and innovative sound and has garnered them a dedicated fan base.")
    Artist.create!(name: "Louis The Child", description: "Louis The Child is an American DJ and production duo consisting of Robby Hauldren and Freddy Kennett. They are known for their pop-influenced electronic dance music and remixes of popular songs. Their hits include \"It\'s Strange,\" \"Weekend,\" and \"Better Not.\" They have collaborated with various artists including Wrabel, Halsey, and Wafia, and have performed at several major music festivals.")
    Artist.create!(name: "Emotional Oranges", description: "Emotional Oranges is an American R&B and alternative pop musical duo consisting of members A1 and Juwan. Their music blends elements of traditional R&B with modern electronic beats and their lyrics often explore themes of love, relationships, and heartbreak. The duo rose to prominence with their self-titled debut EP in 2018, which garnered widespread critical acclaim. Their music has been praised for its smooth, soulful sound and emotive lyrics.")
    Artist.create!(name: "Sam Smith", description: "Sam Smith is an English singer and songwriter known for their soulful, emotive voice and Grammy-winning pop ballads. They rose to fame in the early 2010s with the hit single \"Stay with Me\" and went on to release multiple chart-topping albums, including \"In the Lonely Hour\" and \"The Thrill of It All.\" Smith's music often explores themes of love, heartbreak, and personal growth, and they have received critical acclaim for their powerful vocal performances and introspective songwriting.")
    Artist.create!(name: "Honne", description: "Honne is a British electronic music duo composed of James Hatcher and Andy Clutterbuck. They are known for their soulful and romantic electronic pop music that combines elements of R&B, hip-hop, and funk. They have released several successful albums and have toured extensively, winning fans around the world with their unique sound and heartfelt lyrics.")

    # Album.create!(title: "Nights Like This", artist_id: 1, year: 2019)
    # Album.create!(title: "Stay Home Tapes", artist_id: 1, year: 2018)
    # Album.create!(title: "Don't Leave", artist_id: 1, year: 2017)
    # Album.create!(title: "All My Friends", artist_id: 1, year: 2016)
    # Album.create!(title: "Forever (Pt. II) - EP", artist_id: 1, year: 2015)
    # Album.create!(title: "Here For Now", artist_id: 2, year: 2020)
    # Album.create!(title: "Kids At Play - EP", artist_id: 2, year: 2018)
    # Album.create!(title: "The Juice: Vol.II", artist_id: 3, year: 2019)
    # Album.create!(title: "Gloria", artist_id: 4, year: 2023)
    # Album.create!(title: "LoveMe/Love Me Not", artist_id: 5, year: 2018)

    # Song.create!(title: "Nights Like This (ft. Ty Dolla $ign)", album_id: 1, artist_id: 1)
    # Song.create!(title: "For the F^_^k Of It (ft. Jeremih & Amine)", album_id: 2, artist_id: 1)
    # Song.create!(title: "Don't Leave", album_id: 3, artist_id: 1)
    # Song.create!(title: "All My Friends (ft. Tinashe & Chance the Rapper)", album_id: 4, artist_id: 1)
    # Song.create!(title: "Dimelo", album_id: 4, artist_id: 1)
    # Song.create!(title: "Forever (Pt. II) (ft. Kaleem Taylor)", album_id: 5, artist_id: 1)
    # Song.create!(title: "Overtime (ft. Sasha Keable)", album_id: 5, artist_id: 1)
    # Song.create!(title: "Little Things (with Quinn XCII & Chelsea Cutler", album_id: 6, artist_id: 2)
    # Song.create!(title: "Free (with Drew Love)", album_id: 6, artist_id: 2)
    # Song.create!(title: "Breaking News (with RAYE)", album_id: 7, artist_id: 2)
    # Song.create!(title: "Better Not (with Wafia)", album_id: 7, artist_id: 2)
    # Song.create!(title: "Save Me From Myself (with NoMBe & Big Gigantic)", album_id: 7, artist_id: 2)
    # Song.create!(title: "Just Like You", album_id: 8, artist_id: 3)
    # Song.create!(title: "West Coast Love", album_id: 8, artist_id: 3)
    # Song.create!(title: "Love Me More", album_id: 9, artist_id: 4)
    # Song.create!(title: "Unholy (ft. Kim Petras", album_id: 9, artist_id: 4)
    # Song.create!(title: "I Might", album_id: 10, artist_id: 5)
    # Song.create!(title: "Me & You", album_id: 10, artist_id: 5)
    # Song.create!(title: "Location Unknown", album_id: 10, artist_id: 5)
    # Song.create!(title: "I Just Wanna Go Back", album_id: 10, artist_id: 5)

    # Playlist.create!(title: "", author_id: , song_id: )
  
    puts "Done!"
end