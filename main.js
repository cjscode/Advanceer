console.log("main.js has loaded")

//game
let game = {}

//money
game.money = 0

//categores
game.jobCategories = {
    standWorker:{
        display: "Stand Worker",
        lemonadeStand:{
            display:"Lemonade Stand",
            money_tick: 5,
            price: 0
        },
        cookieStand: {
            display:"Cookie Stand",
            money_tick: 25,
            price: 150
        },
        waterStand: {
            display:"Water Stand",
            money_tick: 150,
            price: 1000
        },
        sodaStand: {
            display:"Cookie Stand",
            money_tick: 1250,
            price: 75000
        }
    },
    gasStationWorker:{
        display: "Gas Station Worker",
        smallGasStation:{
            display: "Small Gas Station",
            money_tick: 10000,
            price: 250000
        },
        gasStation:{
            display: "Gas Station",
            money_tick: 250000,
            price: 7500000
        },
        TwentyFourSevenGasStation:{
            display: "24/7 Gas Station",
            money_tick: 750000,
            price: 25000000
        },
        bigCityGasStation:{
            display: "Big City Gas Station",
            money_tick: 2500000,
            price: 750000000
        }
    },
    groceryStoreWorker:{
        display: "Grocery Store Worker",
        shelfRestocker:{
            display: "Shelf Restocker",
            money_tick: 100000000,
            price: 2500000000
        },
        checkout:{
            display: "Checkout",
            money_tick: 2500000000,
            price: 75000000000
        },
        manager:{
            display: "Manager",
            money_tick: 10000000000,
            price: 250000000000
        },
        ceo:{
            display: "CEO",
            money_tick: 250000000000,
            price: 1000000000000
        }
    }
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

//get shorter num
function getShort (n) {
    const abbr = ["k","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Ocd","Nod","Vg","Uvg","Dvg","Tvg","Qavg","Qivg","Sxvg","Spvg","Ocvg"]
    if (n < 1000) {
        return Math.floor(n)
    }
    if (n == Infinity) {
        return n
    }
    let i = 1
    while (n >= Math.pow(10,(i+1)*3)) {
        i++
    }
    i -= 1
    return ""+(Math.floor(n/Math.pow(10,(i+1)*3-2))/100)+" "+abbr[i]
}

//start updates
update()