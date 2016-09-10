Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  root 'hello_world#index'

  get 'draft', to: 'hello_world#draft', as: 'draft'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/sockjs-node/info', to: 'shared#empty'

  namespace :api do
    resources :contestants, only: [:index]
    resources :drafts, only: [:index, :update]
  end
end
