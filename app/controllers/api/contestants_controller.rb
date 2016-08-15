module Api
  class ContestantsController < ApplicationController
    def index
      render json: Contestant.all
    end
  end
end