class De {
    constructor (time) {
        this.timer = null
        this.delay = time
    	this.flag = true
    }
    log() {
    	console.log(this.delay)
    }
    // 防抖 规定时间内多次触发，只有最后一次生效
    debounce() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
        	this.log()
        }, this.delay)
    }
    // 节流 规定时间内只会触发一次
    throttle() {
        if(!this.flag) return
    	this.flag = false
    	setTimeout(() => {
    		this.log()
    		this.flag = true
    	}, this.delay)
    }
}
