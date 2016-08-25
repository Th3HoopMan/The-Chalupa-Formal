class HomeController < ApplicationController
  def index
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save

        # Sends email to user when user is created.

        MessageMailer.message_me(@user).deliver

        format.html { redirect_to action: "index", notice: 'Thank you for your message.' }

      else
        render "home/index"
      end
    end
  end

  private
  private

  def user_params
    params.require(:user).permit(:email)
  end


end
