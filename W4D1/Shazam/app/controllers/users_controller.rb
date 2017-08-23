class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(params[:user].permit(:name, :email))

    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity

    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render json: @user
    else
      render plain: 'user not found :(', status: :not_found
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user
      @user.update_attributes(user_params)
      render json: @user
    else
      render plain: 'user not found :('
    end

  rescue
    render plain: 'an error occurred', status: :bad_request
  end

  def destroy
    @user = User.find_by(id: params[:id])

    if @user
      if @user.destroy
        render plain: 'you killed him'
      else
        render plain: 'cannot destroy this user'
      end
    else
      render plain: "user doesn't exist"
    end
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
