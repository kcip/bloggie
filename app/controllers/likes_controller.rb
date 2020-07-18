class LikesController < ApplicationController
 before_action :find_post
 before_action :find_like, only: [:destroy]
 before_action :authorize_request, only: [:create,  :update,  :destroy]

 def index
  @likes = Like.all
  render json: @likes, include: :post
 end

 def show
  render json: @like
 end



def create
 @like = Like.new(like_params)
 @like.post_id = params[:post_id]
 @like.user_id = @current_user.id

 if @like.save
  render jspn: @like,  status: :created
 else
  render jspn: @like.error, status: :unprocessable_entity
 end
end


 def destroy
  if !(already_liked?)
   render json: @like.error, status: :unprocessable_entity
  else
    @like.destroy
  end
   redirect_to post_path(@post)
 end


 private
 def find_post
  @post = Post.find(params[:post_id])
 end

 def like_params
  params.require(:like).permit(:user_id, :post_id)
 end

end
