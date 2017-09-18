Rails.application.routes.draw do
  get 'static_pages/root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:show, :index, :create, :update, :destroy]
  end
end
