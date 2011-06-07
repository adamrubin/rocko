Rocko::Application.routes.draw do
  get "home/index"
  resources :posts
  root :to => "home#index"
end
