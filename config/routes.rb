Rails.application.routes.draw do

  # mount action cable server
  mount ActionCable.server => '/cable'

  devise_for :users, :controllers => { registrations: 'registrations', sessions: 'sessions' }

  root 'hello_world#index'

  get 'draft', to: 'hello_world#draft', as: 'draft'

  namespace :api do
    resources :contestants, only: [:index]
    resources :drafts, only: [:index, :update]
  end
end
