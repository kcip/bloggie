class CommentsController < ApplicationController
 before_action :find_post
 # skip_before_action :verify_authenticity_token
 before_action :authorize_request, only: [:create,  :update,  :destroy]

 def index
  @comments = Comment.all
  render json: @comments, include: :post
 end

 def create
  @comment = Comment.new(comment_params)
  @comment.post_id = params[:post_id]
  @comment.user_id = @current_user.id
  
  if @comment.save
      render json: @comment, status: :created
  else
       render json: @comment.errors, status: :unprocessable_entity
  end
 end


def destroy
 @comments.destroy
end




 private

 def find_post
   @post = Post.find(params[:post_id])
 end

 def comment_params
   params.require(:comment).permit(:body, :name)
 end
end