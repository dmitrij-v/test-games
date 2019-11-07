class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def update_all_games
    params[:_json].each do |line|
      game = Game.find_by(id: line[:id])
      game.update(minutes_booked: line[:minutes]) if game
    end
    return head 200
  end

  def update_game
    game = Game.find_by(id: params[:id])
    return head 404 unless game

    game.update(minutes_booked: params[:minutes])
    return head 200
  end
end
