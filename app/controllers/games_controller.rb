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
    game = Game.find_by(id: params[:game][:id])
    game.update(minutes_booked: params[:game][:minutes]) if game
    return head 200
  end
end
