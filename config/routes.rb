Rails.application.routes.draw do
  root 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :contestants, only: [:index]
    resources :drafts, only: [:index, :update]
  end
end
