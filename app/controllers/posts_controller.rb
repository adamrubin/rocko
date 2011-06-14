class PostsController < ApplicationController
  def index
    @post = Post.new

    respond_to do |format|
      format.js
      format.html
    end
  end

  def new
    @post = Post.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def create
    @post = Post.new(params[:post])

    respond_to do |format|
      if @post.save!
      	message = {:channel => "/foo", :data => @post.message }
      	uri = URI.parse("#{ApplicationHelper::NODE_SERVER}/faye")
      	Net::HTTP.post_form(uri, :message => message.to_json)

        format.js
        format.html { redirect_to new_post_path }
      else
        format.html { render action: "new" }
      end
    end
  end
end
