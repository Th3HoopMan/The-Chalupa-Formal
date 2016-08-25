class MessageMailer < ApplicationMailer
  # use your own email address here
  default :to => "TheChalupaFormal@gmail.com"
  default :from => "TheChalupaFormal@gmail.com"
  def message_me(user)
    @user = user

    mail( subject: "I want to be invited to the Chalupa Semi Formal!")
  end
end
