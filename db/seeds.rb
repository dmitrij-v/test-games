Game.delete_all

Game.create(
  [
    {
      id: 1, title: 'Napoli - Bologna', game_time: Time.now + 15.days,
      home_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      away_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      reach: 4, league: 'Serie A', channel: 'Rai1', price_per_minute: 3200, minutes_booked: 0,
      created_at: Time.now - 10.days, updated_at: Time.now - 10.days },
    {
      id: 2, title: 'Udinese - Spal', game_time: Time.now + 12.days,
      home_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      away_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      reach: 3, league: 'Serie A', channel: 'Rai1', price_per_minute: 3600, minutes_booked: 0,
      created_at: Time.now - 10.days, updated_at: Time.now - 10.days },
    {
      id: 3, title: 'Juventus - Genoa', game_time: Time.now + 9.days,
      home_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      away_team_logo: 'https://pngimage.net/wp-content/uploads/2018/06/napoli-logo-png-1.png',
      reach: 6, league: 'Serie A', channel: 'Rai1', price_per_minute: 4500, minutes_booked: 0,
      created_at: Time.now - 10.days, updated_at: Time.now - 10.days }
  ]
)



