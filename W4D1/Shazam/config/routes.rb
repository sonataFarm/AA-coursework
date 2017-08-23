Rails.application.routes.draw do
  # resources :users
  get 'users/new', to: 'users#new', as: 'new_user'
  post 'users', to: 'users#create'
  patch 'users/:id', to: 'users#update'
  put 'users/:id', to: 'users#update'
  get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  delete 'users/:id', to: 'users#destroy'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show', as: 'user'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
