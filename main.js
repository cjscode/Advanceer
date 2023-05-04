console.log("main.js has loaded")
let version = "v0.06"
document.getElementById("version_text").innerHTML = version

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
            money_tick: 5e+0,
            price: 0e+0
        },
        cookieStand: {
            display:"Cookie Stand",
            money_tick: 2.5e+1,
            price: 1.5e+2
        },
        waterStand: {
            display:"Water Stand",
            money_tick: 1.5e+2,
            price: 1e+3
        },
        sodaStand: {
            display:"Cookie Stand",
            money_tick: 1e+3,
            price: 2.5e+4
        }
    },
    gasStationWorker:{
        display: "Gas Station Worker",
        smallGasStation:{
            display: "Small Gas Station",
            money_tick: 2.5e+4,
            price: 5e+5
        },
        gasStation:{
            display: "Gas Station",
            money_tick: 5e+5,
            price: 7.5e+6
        },
        TwentyFourSevenGasStation:{
            display: "24/7 Gas Station",
            money_tick: 7.5e+6,
            price: 2.5e+7
        },
        bigCityGasStation:{
            display: "Big City Gas Station",
            money_tick: 2.5e+7,
            price: 1e+9
        }
    },
    groceryStoreWorker:{
        display: "Grocery Store Worker",
        shelfRestocker:{
            display: "Shelf Restocker",
            money_tick: 1e+9,
            price: 2.5e+10
        },
        checkout:{
            display: "Checkout",
            money_tick: 2.5e+10,
            price: 5e+11
        },
        manager:{
            display: "Manager",
            money_tick: 5e+11,
            price: 2.5e+12
        },
        ceo:{
            display: "CEO",
            money_tick: 2.5e+12,
            price: 1e+14
        }
    },
    fastFood:{
        display:"Fast Food",
        cashier:{
            display: "Cashier",
            money_tick: 1e+14,
            price: 2.5e+15
        },
        cook:{
            display: "Cook",
            money_tick: 2.5e+15,
            price: 1e+16
        },
        shiftManager:{
            display: "Shift Manager",

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