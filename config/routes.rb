Rails.application.routes.draw do
  root to: 'games#index', as: :root
  post '/update', to: 'games#update'
end
