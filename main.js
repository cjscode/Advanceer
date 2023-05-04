console.log("main.js has loaded")

//game
let game = {}

//money
game.money = 0

//categores
game.jobCategories = {
    standWorkers:{},
}

//update
function update () {
    let jobBar = document.getElementById("div_job_progress")
    requestAnimationFrame(update)
}

//get percent
function getPercent(current, max) {
    return (current/max)*100
}

//start updates
update()