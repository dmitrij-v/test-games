class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def update
    params[:_json].each do |line|
      game = Game.find_by(id: line[:id])
      game.update(minutes_booked: line[:minutes]) if game
    end
  end
end
