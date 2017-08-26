Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show]

  resource :session, only: [:create, :destroy]

  resources :bands do
    resources :albums, only: [:new]
  end

  resources :albums, only: [:create, :edit, :show, :update, :destroy]

  get '/session/new', to: 'sessions#new', as: 'login'
  root 'sessions#new'
end
