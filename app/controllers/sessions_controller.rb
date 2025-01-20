class SessionsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: { user: user, token: token }, status: :ok
    else
      render json: { errors: {login: ["Invalid Email or Password"]} }, status: :unauthorized
    end
  end

  private

  def encode_token(payload)
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end
end
