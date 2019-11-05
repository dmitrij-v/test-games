(() => {
    stimulus.register("game", class extends Stimulus.Controller {

        static get targets() {
            return [ "minute", "sum", "output", "count" ]
        }
        connect() {
            this.countTargets.forEach ( count => count.innerHTML = 0 )
            this.outputTarget.innerHTML = 'Add minutes to your campaign'
            this.data.sum = 0
            this.data.min = 0
        }

        increase(event) {
            let id = +event.target.getAttribute('data-id')
            this.data.sum = this.data.sum + +event.target.getAttribute('data-sum')
            this.data.min++
            this.countTargets[id].innerHTML = +this.countTargets[id].innerHTML + 1
            this.changeOutput()
        }

        decrease(event) {
            let id = +event.target.getAttribute('data-id')
            if (this.countTargets[id].innerHTML !== '0') {
                this.data.sum = this.data.sum - +event.target.getAttribute('data-sum')
                this.data.min--
                this.countTargets[id].innerHTML = +this.countTargets[id].innerHTML - 1
            }
            this.changeOutput()
        }

        changeOutput() {
            if (this.data.sum === 0) {
                this.outputTarget.innerHTML = 'Add minutes to your campaign'
            }
            else {
                this.outputTarget.innerHTML = this.data.min + 'min added - total $' + this.data.sum
            }
        }
    })
})()