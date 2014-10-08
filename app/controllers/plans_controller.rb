class PlansController < ApplicationController
  def index
    @plan = Stripe::Plan.retrieve("basic")
  end

  def show
  end
end
