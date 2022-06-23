class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create

    #WARNING: This isn't going to work with current seed data since the password is plain text and not hashed. The .authenticate method requires a hashed and salted password in order to verify it's the correct password.
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end
end