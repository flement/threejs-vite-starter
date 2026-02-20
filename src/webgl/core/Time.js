import EventEmitter from 'core/EventEmitter.js'

export default class Time extends EventEmitter {
	constructor() {
		super()

		// Setup
		this.start = performance.now()
		this.current = this.start
		this.elapsed = 0
		this.delta = 16

		this.tick = this.tick.bind(this)
		requestAnimationFrame(this.tick)
	}

	tick(currentTime) {
		this.delta = currentTime - this.current
		this.current = currentTime
		this.elapsed = this.current - this.start

		this.trigger('tick')

		requestAnimationFrame(this.tick)
	}
}
