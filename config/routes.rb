Rails.application.routes.draw do
  root to: 'games#index', as: :root
  post '/update', to: 'games#update_all_games'
  post '/update-game/:id', to: 'games#update_game'
end
