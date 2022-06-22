class CastlesController < ApplicationController
  # resources :castles, only: %i[index show update]

  rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity

  # GET /castles
  def index
    render json: Castle.all, status: :ok
  end

  # GET /castles/:id
  def show
    castle = Castle.find(params[:id])
    render json: castle, status: :ok
  end

  # PATCH /castles/:id
  def update
    castle = Castle.find(params[:id])
    castle.update!(castle_params)
    render json: castle, status: :accepted
  end

  private

  def castle_params
    params.permit(:is_sold)
  end

  def error_not_found
    render json: { error: 'Castle not found' }, status: :not_found
  end

  def error_unproc_entity(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
