console.log("main.js has loaded")
let game = {}
game.money = 0
game.jobCategories = {
    standWorkers:[],
}
function update () {
    let jobBar = document.getElementById("div_job_progress")
    requestAnimationFrame(update)
}
function getPercent(current, max) {
    return (current/max)*100
}
window.onload = update()