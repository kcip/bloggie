Rails.application.routes.draw do
  resources :posts do
   resources :comments
   resources :likes
  end
  

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create
end
