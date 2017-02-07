class Api::PhotosController < ApplicationController
  def index
    if (params[:data])
      photos = Photo.where(user_id: params[:data][:id])
      @photos = photos.includes(:user)
    else
      @photos = Photo.all.includes(:user)
    end
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save!
      # if params[:album_id]
      #   Album.find(params[:album_id]).photos << @photo
      # end
      render :show
    else
      p @photo.errors
      render json: @photo.errors.full_messages, status: 422

    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    return unless @photo
    @photo.destroy!
    render :show
  end

  private
  def photo_params
    params.require(:photo).permit(
      :image_url,
      :title,
      :description,
      :user_id,
      :album_id
    )
  end
end
