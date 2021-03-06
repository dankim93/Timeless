class Api::CommentsController < ApplicationController
  def index
    # @comments = Comment.all
    if (params[:data])
      comments = Comment.where(comment_id: params[:data][:id])
      @comments = comments
    else
      @comments = Comment.all
    end
    render :index
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end
end
