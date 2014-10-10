class UsersController < Devise::RegistrationsController
  #after_create :set_stripe_customer_id

  def new
    super
  end

  private
  def set_stripe_customer_id
    
  end
end
