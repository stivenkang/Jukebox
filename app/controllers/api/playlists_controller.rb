class Api::PlaylistsController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :show, :update, :destroy]
    # skip_before_action :verify_authenticity_token

    def index
        @playlists = Playlist.all
        render :index
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
        # @songs = @playlist.songs
        render :show
    end

    def create
        @playlist = Playlist.new(playlist_params)
        # @playlist.author_id = current_user.id
        if @playlist.save
            render :show
        else
            render json: { errors: @playlist.errors.full_messages }, status: 422
        end
    end

    def update
        @playlist = Playlist.find_by(id: params[:id])

        if @playlist.update(playlist_params)
            render :show
            # render json: @playlist
        else
            render json: { error: 'Failed to update the playlist' }, status: :unprocessable_entity
        end
    end

    def destroy
        @playlist = Playlist.find_by(id: params[:id])

        if @playlist.destroy
            render :show
        else
            render json: { errors: @playlist.errors.full_messages }, status: 422
        end

    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :author_id)
    end
end
