class UsersController < Devise::RegistrationController
  after_save :set_stripe_customer_id

  private
  def set_stripe_customer_id
    
  end
end
