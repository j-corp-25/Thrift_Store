class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if ["phone", "both"].include?(@user.notification_preference) && @user.phone_number.blank?
      render json: { error: "Phone number is required when choosing phone notification." }, status: :unprocessable_entity
      return
    end
    if @user.save
      render json: { message: "User successfully registered!" }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render json: @users
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :phone_number, :notification_preference)
  end

end
