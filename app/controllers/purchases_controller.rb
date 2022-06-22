class PurchasesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity

  # GET /purchases
  def index
    render json: Purchase.all, status: :ok
  end

  # GET /purchases/:id
  def show
    buy = Purchase.find(params[:id])
    render json: buy, status: :ok
  end

  # POST /purchases
  def create
    castle_buying = Castle.find(params[:castle_id])

    if (castle_buying.is_sold == true)
      render json: {
               error: 'This castle has already been sold.',
             },
             status: :unprocessable_entity
    else
      new_buy = Purchase.create!(purchase_params)
      castle_buying.toggle!(:is_sold)
      render json: new_buy, status: :created
    end
  end

  private

  def purchase_params
    params.permit(:user_id, :castle_id)
  end

  def error_not_found
    render json: { error: 'Purchase not found' }, status: :not_found
  end

  def error_unproc_entity(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
