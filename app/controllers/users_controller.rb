class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity

  # GET /users
  def index
    render json: User.all, status: :ok
  end

  # POST /users
  def create
    new_user = User.create!(user_params)
    render json: new_user, status: :created
  end

  #DELETE /users/:id
  def destroy
    bye_user = User.find(params[:id])
    bye_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  def error_not_found
    render json: { error: 'User not found' }, status: :not_found
  end

  def error_unproc_entity(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
