class RegistrationsController < Devise::RegistrationsController
  private
  def sign_up_params
    params.require(:user).permit(:username, :email)
  end

  def after_sign_up_path_for(resource)
    draft_path
  end

  def account_update_params
    params.require(:user).permit(:username, :email)
  end
end
