module Api
  class DraftsController < ApplicationController
    def index
      render json: Draft.all, status: :ok
    end

    def update
      draft = Draft.find(params[:id])
      if draft.update(params[:state])
        render json: draft
      else
        render json: draft.errors
      end
    end
  end
end