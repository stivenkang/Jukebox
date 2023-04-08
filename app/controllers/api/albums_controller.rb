class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all
        render :index
    end
    
    def show
        @album = Album.find_by(id: params[:id])
        @songs = @album.songs
        @artist = Artist.find(@album.artist_id)
        render :show

        # @album = Album.where(songs: current_)
    end
end
