class UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user = User.new(user_params)

    if user.save
      token = encode_token(user_id: user.id)
      render json: { user: user, token: token }, status: :created
    else
      error_messages = user.errors.messages.transform_values do |messages|
        messages.map(&:to_s)
      end

      render json: { errors: error_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end
end

