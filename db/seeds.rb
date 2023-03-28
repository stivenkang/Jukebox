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

    Song.destroy_all
    Album.destroy_all
    Artist.destroy_all
    # Playlist.destroy_all
    # PlaylistSong.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('artists')
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('songs')
    ApplicationRecord.connection.reset_pk_sequence!('playlists')
    ApplicationRecord.connection.reset_pk_sequence!('playlist_songs')
  
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

    artist1 = Artist.create!(name: "Snakehips", description: "Snakehips is a British electronic music duo consisting of Oliver Lee and James Carter. They are best known for their blend of hip-hop, R&B and electronic music and have gained widespread popularity with hit songs such as \"All My Friends\" and \"Don\'t Leave\". Their music has been praised for its smooth and innovative sound and has garnered them a dedicated fan base.")
    artist2 = Artist.create!(name: "Louis The Child", description: "Louis The Child is an American DJ and production duo consisting of Robby Hauldren and Freddy Kennett. They are known for their pop-influenced electronic dance music and remixes of popular songs. Their hits include \"It\'s Strange,\" \"Weekend,\" and \"Better Not.\" They have collaborated with various artists including Wrabel, Halsey, and Wafia, and have performed at several major music festivals.")
    artist3 = Artist.create!(name: "Emotional Oranges", description: "Emotional Oranges is an American R&B and alternative pop musical duo consisting of members A1 and Juwan. Their music blends elements of traditional R&B with modern electronic beats and their lyrics often explore themes of love, relationships, and heartbreak. The duo rose to prominence with their self-titled debut EP in 2018, which garnered widespread critical acclaim. Their music has been praised for its smooth, soulful sound and emotive lyrics.")
    artist4 = Artist.create!(name: "Sam Smith", description: "Sam Smith is an English singer and songwriter known for their soulful, emotive voice and Grammy-winning pop ballads. They rose to fame in the early 2010s with the hit single \"Stay with Me\" and went on to release multiple chart-topping albums, including \"In the Lonely Hour\" and \"The Thrill of It All.\" Smith's music often explores themes of love, heartbreak, and personal growth, and they have received critical acclaim for their powerful vocal performances and introspective songwriting.")
    artist5 = Artist.create!(name: "Honne", description: "Honne is a British electronic music duo composed of James Hatcher and Andy Clutterbuck. They are known for their soulful and romantic electronic pop music that combines elements of R&B, hip-hop, and funk. They have released several successful albums and have toured extensively, winning fans around the world with their unique sound and heartfelt lyrics.")
    artist6 = Artist.create!(name: "J. Cole", description: "J. Cole is an American rapper, singer, and record producer known for his introspective and socially conscious lyrics, often addressing themes of racism, poverty, and personal struggles. He first gained widespread recognition with his mixtapes, and later released his debut album \"Cole World: The Sideline Story\" in 2011, which went on to become a commercial success. Since then, he has released several critically acclaimed albums, including \"2014 Forest Hills Drive,\" \"4 Your Eyez Only,\" and \"KOD\". ")
    artist7 = Artist.create!(name: "Epik High", description: "Epik High is a South Korean alternative hip hop group consisting of three members: Tablo, Mithra Jin, and DJ Tukutz. They are known for their unique sound, blending hip hop with a variety of different genres including rock, electronic, and classical music. Their socially conscious lyrics have earned them a large following in South Korea and around the world.")
    artist8 = Artist.create!(name: "88rising", description: "88rising is a media company and music label known for their popular collaborations with artists across Asia and the Western world. The label has been instrumental in popularizing Asian music to a global audience and has worked with artists such as Rich Brian, Joji, NIKI, and Higher Brothers. 88rising has been praised for its innovative approach to music and its ability to bridge cultural gaps through music.")
    artist9 = Artist.create(name: "Linkin Park", description: "Linkin Park is an American rock band that was formed in 1996 in Agoura Hills, California. The band's music is a blend of heavy metal, rock, and hip-hop, and is characterized by its unique sound, which often features a combination of aggressive rapping and melodic singing. Linkin Park achieved significant commercial success in the early 2000s with their debut album \"Hybrid Theory,\" which has sold over 30 million copies worldwide. The band has won two Grammy Awards and has sold over 100 million records globally. However, in 2017, the band's lead vocalist, Chester Bennington, passed away, and the group has since been on hiatus.")
    artist10 = Artist.create(name: "Bruno Mars", description: "Bruno Mars is an American singer, songwriter, multi-instrumentalist, record producer, and choreographer. He was born on October 8, 1985, in Honolulu, Hawaii. Bruno Mars rose to fame in the early 2010s with his hit songs \"Just the Way You Are\", \"Grenade\", \"Locked Out of Heaven\", and \"Uptown Funk\" (with Mark Ronson). He is known for his soulful voice, impressive vocal range, and his ability to blend various genres of music, including pop, R&B, funk, and reggae.")
    artist11 = Artist.create(name: "IU", description: "IU is a South Korean singer-songwriter and actress. She debuted in 2008 with her single \"Lost Child\" and has since released multiple successful albums and singles. IU is known for her versatile music style, which ranges from pop to ballads and R&B. She has won numerous awards for her music, including multiple Song of the Year awards at the Melon Music Awards, and has been named one of the most influential people in the South Korean music industry. Outside of music, IU is also recognized for her philanthropic work and has been appointed as an honorary ambassador for various charitable organizations.")
    artist12 = Artist.create!(name: "Khalid", description: "Khalid is an American singer and songwriter. He first gained popularity in 2016 with his debut single \"Location\". His music is known for its mix of R&B, pop, and hip-hop influences, and his soulful voice and relatable lyrics have earned him a large and dedicated fan base.")
    # Artist.create!(name: "Post Malone", description: "Post Malone is an American rapper, singer, and songwriter known for his melodic blend of hip-hop, pop, and rock.")
    # Artist.create!(name: "6LACK", description: "6lack is an American singer, rapper and songwriter who gained popularity with his debut single \"Prblms\" in 2016. Known for his introspective and melancholic style, 6lack's music often explores themes of heartbreak, self-reflection and personal growth.")

    artist1.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Snakehips-ArtistImg.jpeg"),
      filename: "snakehips.jpg"
    )
    
    artist2.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Louis_The_Child-ArtistImg.jpeg"),
      filename: "ltc.jpg"
    )

    artist3.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Emotional_Oranges-ArtistImg.jpeg"),
      filename: "eo.jpg"
    )

    artist4.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Sam_Smith-ArtistImg.jpeg"),
      filename: "sam.jpg"
    )

    artist5.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Honne-ArtistImg.jpeg"),
      filename: "honne.jpg"
    )

    artist6.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/J.Cole-ArtistImg.jpeg"),
      filename: "j.jpg"
    )

    artist7.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Epik_High-ArtistImg.jpeg"),
      filename: "eh.jpg"
    )

    artist8.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/88rising-ArtistImg.jpeg"),
      filename: "rising.jpg"
    )

    artist9.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Linkin-ParkImg.jpeg"),
      filename: "linkin.jpg"
    )

    artist10.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Bruno-MarsImg.jpeg"),
      filename: "bruno.jpg"
    )

    artist11.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/IuImg.jpeg"),
      filename: "iu.jpg"
    )

    artist12.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/KhalidImg.jpeg"),
      filename: "khalid.jpg"
    )

    # Bench.first(3).each_with_index do |bench, index|
    #   bench.photo.attach(
    #     # The string passed to URI.open should be the URL of the image in its bucket.
    #     # This sample assumes the bucket name is `benchbnb-seeds`.
    #     io: URI.open("https://benchbnb-seeds.s3.amazonaws.com/bench_#{index + 1}.jpg"), 
    #     filename: "bench_#{index + 1}.jpg"
    #   )
    # end

    album1 = Album.create!(title: "Nights Like This", year: 2019, artist_id: 1)
    album1.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/nights-like-this.jpg"),
      filename: "nlt.jpg"
    )

    album2 = Album.create!(title: "Stay Home Tapes", year: 2018, artist_id: 1)
    album2.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/stay-home-tapes.jpeg"),
      filename: "sht.jpeg"
    )

    album3 = Album.create!(title: "Don't Leave", year: 2017, artist_id: 1)
    album3.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/don't-leave.jpeg"),
      filename: "dontleave.jpeg"
    )

    album4 = Album.create!(title: "All My Friends", year: 2016, artist_id: 1)
    album4.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/SnakeHips-AllMyFriends.jpeg"),
      filename: "amf.jpeg"
    )

    album5 = Album.create!(title: "Forever (Pt. II) - EP", year: 2015, artist_id: 1)
    album5.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/forever.jpeg"),
      filename: "forever.jpeg"
    )

    album6 = Album.create!(title: "Here For Now", year: 2020, artist_id: 2)
    album6.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/here-for-now.jpeg"),
      filename: "hfn.jpeg"
    )

    album7 = Album.create!(title: "Kids At Play - EP", year: 2018, artist_id: 2)
    album7.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/kids-at-play.jpeg"),
      filename: "kap.jpeg"
    )

    album8 = Album.create!(title: "The Juice: Vol.II", year: 2019, artist_id: 3)
    album8.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/the-juice.jpeg"),
      filename: "thejuice.jpeg"
    )

    album9 = Album.create!(title: "Gloria", year: 2023, artist_id: 4)
    album9.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Sam_Smith-ArtistImg.jpeg"),
      filename: "gloria.jpeg"
    )

    album10 = Album.create!(title: "LoveMe/Love Me Not", year: 2018, artist_id: 5)
    album10.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/loveme-love-me-not.jpeg"),
      filename: "loveme.jpeg"
    )

    album11 = Album.create!(title: "KOD", year: 2018, artist_id: 6)
    album11.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/kod.jpeg"),
      filename: "kod.jpeg"
    )

    album12 = Album.create!(title: "4 Your Eyez Only", year: 2016, artist_id: 6)
    album12.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/4your-eyes-only.jpg"),
      filename: "youreyez.jpg"
    )

    album13 = Album.create!(title: "2014 Forest Hills Drive", year: 2014, artist_id: 6)
    album13.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/2014forest-hills.jpeg"),
      filename: "foresthills.jpeg"
    )

    album14 = Album.create!(title: "Epik High Is Here (Part 1)", year: 2021, artist_id: 7)
    album14.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/Epik-High-is-here.jpeg"),
      filename: "ehishere.jpeg"
    )

    album15 = Album.create!(title: "Map the Soul", year: 2009, artist_id: 7)
    album15.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/map-the-soul.jpeg"),
      filename: "mapthesoul.jpeg"
    )

    album16 = Album.create!(title: "Head In The Clouds II", year: 2019, artist_id: 8)
    album16.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/head-in-the-clouds.jpeg"),
      filename: "hitc.jpeg"
    )

    album17 = Album.create!(title: "Hybrid Theory", year: 2000, artist_id: 9)
    album17.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/hybrid-theory.webp"),
      filename: "hybrid.webp"
    )

    album18 = Album.create!(title: "24K Magic", year: 2016, artist_id: 10)
    album18.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/24k-magic.jpeg"),
      filename: "kmagic.jpeg"
    )

    album19 = Album.create!(title: "Unorthodox Jukebox", year: 2012, artist_id: 10)
    album19.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/unorthodox-jukebox.jpeg"),
      filename: "unjuke.jpeg"
    )

    album20 = Album.create!(title: "LILAC", year: 2021, artist_id: 11)
    album20.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/lilac.png"),
      filename: "lilac.png"
    )

    album21 = Album.create!(title: "eight", year: 2020, artist_id: 11)
    album21.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/eight.jpeg"),
      filename: "eight.jpeg"
    )

    album22 = Album.create!(title: "Free Spirit", year: 2019, artist_id: 12)
    album22.photo.attach(
      io: URI.open("https://jukebox-sk-seeds.s3.amazonaws.com/free-spirit.png"),
      filename: "freespirit.png"
    )
\
    # Album.create!(title: "", year: 20, artist_id: 1)

    

    # Song.create!(title: "Nights Like This (ft. Ty Dolla $ign)", album_id: 1, artist_id: 1)
    song1 = Song.create!(title: "For the F^_^k Of It (ft. Jeremih & Amine)", album_id: 2, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song2 = Song.create!(title: "Don't Leave", album_id: 3, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song3 = Song.create!(title: "All My Friends (ft. Tinashe & Chance the Rapper)", album_id: 4, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song4 = Song.create!(title: "Dimelo", album_id: 4, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song5 = Song.create!(title: "Forever (Pt. II) (ft. Kaleem Taylor)", album_id: 5, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song6 = Song.create!(title: "Overtime (ft. Sasha Keable)", album_id: 5, artist_id: 1, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song7 = Song.create!(title: "Little Things (with Quinn XCII & Chelsea Cutler", album_id: 6, artist_id: 2, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song8 = Song.create!(title: "Free (with Drew Love)", album_id: 6, artist_id: 2, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song9 = Song.create!(title: "Breaking News (with RAYE)", album_id: 7, artist_id: 2, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song10 = Song.create!(title: "Better Not (with Wafia)", album_id: 7, artist_id: 2, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song11 = Song.create!(title: "Save Me From Myself (with NoMBe & Big Gigantic)", album_id: 7, artist_id: 2, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song12 = Song.create!(title: "Just Like You", album_id: 8, artist_id: 3, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song13 = Song.create!(title: "West Coast Love", album_id: 8, artist_id: 3, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song14 = Song.create!(title: "Love Me More", album_id: 9, artist_id: 4, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song15 = Song.create!(title: "Unholy (ft. Kim Petras", album_id: 9, artist_id: 4, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song16 = Song.create!(title: "I Might", album_id: 10, artist_id: 5, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song17 = Song.create!(title: "Me & You", album_id: 10, artist_id: 5, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song18 = Song.create!(title: "Location Unknown", album_id: 10, artist_id: 5, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song19 = Song.create!(title: "I Just Wanna Go Back", album_id: 10, artist_id: 5, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song20 = Song.create!(title: "Photograph", album_id: 11, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song21 = Song.create!(title: "Kevin\'s Heart", album_id: 11, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song22 = Song.create!(title: "FRIENDS (ft. kiLL edward)", album_id: 11, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song23 = Song.create!(title: "4 Your Eyez Only", album_id: 12, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song24 = Song.create!(title: "Deja Vu", album_id: 12, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song25 = Song.create!(title: "Neighbors", album_id: 12, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song26 = Song.create!(title: "Wet Dreamz", album_id: 13, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song27 = Song.create!(title: "No Role Modelz", album_id: 13, artist_id: 6, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song28 = Song.create!(title: "Rosario (ft. CL, ZICO)", album_id: 14, artist_id: 7, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song29 = Song.create!(title: "Map The Soul (ft. Tablo, MYK, Kero One)", album_id: 15, artist_id: 7, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song30 = Song.create!(title: "These Nights", album_id: 16, artist_id: 8, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song31 = Song.create!(title: "Strange Land", album_id: 16, artist_id: 8, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song32 = Song.create!(title: "La La Lost You", album_id: 16, artist_id: 8, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song33 = Song.create!(title: "Papercut", album_id: 17, artist_id: 9, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song34 = Song.create!(title: "One Step Closer", album_id: 17, artist_id: 9, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song35 = Song.create!(title: "Runaway", album_id: 17, artist_id: 9, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song36 = Song.create!(title: "In The End", album_id: 17, artist_id: 9, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song37 = Song.create!(title: "24K Magic", album_id: 18, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song38 = Song.create!(title: "Thats What I Like", album_id: 18, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song39 = Song.create!(title: "Versace on the Floor", album_id: 18, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song40 = Song.create!(title: "Finesse", album_id: 18, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song41 = Song.create!(title: "Locked out of Heaven", album_id: 19, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song42 = Song.create!(title: "When I Was Your Man", album_id: 19, artist_id: 10, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song43 = Song.create!(title: "LILAC", album_id: 20, artist_id: 11, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song44 = Song.create!(title: "Coin", album_id: 20, artist_id: 11, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song45 = Song.create!(title: "eight (ft. SUGA of BTS)", album_id: 21, artist_id: 11, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song46 = Song.create!(title: "Right Back", album_id: 22, artist_id: 12, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song47 = Song.create!(title: "Don't Pretend (ft. SAFE)", album_id: 22, artist_id: 12, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song48 = Song.create!(title: "Paradise", album_id: 22, artist_id: 12, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song49 = Song.create!(title: "Hundred", album_id: 22, artist_id: 12, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")
    song50 = Song.create!(title: "Saturday Nights", album_id: 22, artist_id: 12, song_url: "https://jukebox-sk-seeds.s3.amazonaws.com/For+the+Fk+Of+It.mp3")



    # Playlist.create!(title: "", author_id: , song_id: )
  
    puts "Done!"
end