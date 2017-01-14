class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.valid?
      @photo.save!
      if params[:album_id]
        Album.find(params[:album_id]).photos << @photo
      end
      render :show
    else
      render json: ['Invalid parameters'], status: 422
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
      :img_url,
      :title,
      :description,
      :thumb_url,
      :user_id,
      :album_id
    )
  end
end
