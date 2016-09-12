Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations', sessions: 'sessions' }

  root 'hello_world#index'

  get 'draft', to: 'hello_world#draft', as: 'draft'

  namespace :api do
    resources :contestants, only: [:index]
    resources :drafts, only: [:index, :update]
  end
end
