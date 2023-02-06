class Api::SessionsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]  # before action for require logged in includes create? Need to log in in order to log in?
    # before_action :require_logged_in, only: [:destroy]

    def show
        # @user = current_user
        if current_user
            @user = current_user
            render 'api/users/show'
        else
            render json: { user: nil }
        end
    end

    def create
        @user = User.find_by_credentials(params[:credential], params[:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: { errors: ['Invalid Credentials'] }, status: :unauthorized
        end
    end

    def destroy
        logout!
        render json: { message: 'success' }
    end
end
