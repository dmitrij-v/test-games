(() => {
    stimulus.register("game", class extends Stimulus.Controller {

        static get targets() {
            return [ "minute", "sum", "output", "count" ]
        }
        connect() {
            this.outputTarget.innerHTML = 'Add minutes to your campaign'
            this.data.games = []
            this.countTargets.forEach ( count => {
                let id = +count.getAttribute('data-id')
                let minutes = +count.getAttribute('data-start')
                let price_per_minute =  +count.getAttribute('data-sum')
                this.data.games.push({
                    id,
                    minutes,
                    price_per_minute,
                    sum: minutes * price_per_minute
                })
            })
            this.changeOutput()
        }

        increase(event) {
            let id = +event.target.getAttribute('data-id')
            this.data.games.forEach(game => {
                if (game.id === id) {
                    game.minutes++
                    game.sum += game.price_per_minute
                    this.updateOneGame(game)
                    this.countTargets.filter(target => target.dataset.id == id)[0].innerHTML = game.minutes
                }
            })
            this.changeOutput()
        }

        decrease(event) {
            let id = +event.target.getAttribute('data-id')
            this.data.games.forEach(game => {
                if (game.id === id) {
                    game.minutes--
                    if (game.minutes < 0) { 
                        game.minutes = 0
                    } else {
                        game.sum -= game.price_per_minute
                    }
                    this.updateOneGame(game)
                    this.countTargets.filter(target => target.dataset.id == id)[0].innerHTML = game.minutes
                }
            })
            this.changeOutput()
        }

        changeOutput() {
            let total = this.data.games.reduce((total, game) => {
                total.sum += game.sum
                total.minutes += game.minutes
                return total
            }, { minutes: 0, sum: 0 })

            if (total.sum === 0) {
                this.outputTarget.innerHTML = 'Add minutes to your campaign'
            }
            else {
                this.outputTarget.innerHTML = total.minutes + 'min added - total $' + total.sum
            }
        }

        updateOrder() {
            fetch('/update', {
                method: 'POST',
                body: JSON.stringify(this.data.games),
                headers: { 'Content-Type': 'application/json' },
            })
        }

        updateOneGame(game) {
            fetch(`/update-game/${game.id}`, {
                method: 'POST',
                body: JSON.stringify(game),
                headers: { 'Content-Type': 'application/json' },
            })
        }
    })
})()