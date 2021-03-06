Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resource :session, only: [:create, :show, :destroy]
    resources :messages, only: [:create, :show, :destroy]
    resources :channels, only: [:create, :show, :index]
    post "/dm_channels", to: "channels#create_dm"
  end
end
