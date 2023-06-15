class Api::PlaylistSongsController < ApplicationController
    def index
        @playlist_songs = PlaylistSong.all
        render :index
    end

    def show
        @playlist_song = PlaylistSong.find_by(id: params[:id])
        render :show
    end

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        @song = Song.find_by(id: playlist_song_params[:song_id])
        if @playlist_song.save
            render :show
        else
            render json: {errors: @playlist_song.errors.full_messages}, status: 422
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find_by(id: params[:id])
        # @song = Song.find_by(id: playlist_song_params[:song_id])

        if @playlist_song.destroy
            render :show
        else
            render json: {errors: @playlist_song.errors.full_messages}, status: 422
        end
    end

    private

    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
