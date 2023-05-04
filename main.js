console.log("main.js has loaded")
let version = "v0.08"
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
            money_tick: 1e+16,
            price: 2.5e+17
        },
        manager:{
            display: "Manager",
            money_tick: 2.5e+17,
            price: 7.5e+18
        }
    },
    carDealership:{
        display: "Car Dealership",
        showroomWorker:{
            display: "Showroom Worker",
            money_tick: 7.5e+18,
            price: 1e+20
        },
        mechanic:{
            display: "Mechanic",
            money_tick: 1e+20,
            price: 2.5e+21
        },
        financeManager:{
            display: "Finance Manager",
            money_tick: 2.5e+21,
            price: 1e+23
        },
        ceo:{
            display: "CEO",
            money_tick: 1e+23,
            price: 2.5e+24
        }
    },
    hospital:{
        display: "Hospital",
        nursesAssistant:{
            display: "Nurse's Assistant",
            money_tick: 2.5e+24,
            price: 5e+25
        },
        ambulanceDriver:{
            display: "Ambulance Driver",
            money_tick: 5e+25,
            price: 2.5e+26
        },
        nurse:{
            display: "Nurse",
            money_tick: 2.5e+26,
            price: 1e+28
        },
        cardiologist:{
            display: "Cardiologist",
            money_tick: 1e+28,
            price: 7.5e+29
        }
    },
    techCompany:{
        display: "Tech Company",
        assistantDeveloper:{
            display: "Assistant Developer",
            money_tick: 7.5e+29,
            price: 1e+31
        },
        developer:{
            display: "Developer",
            money_tick: 1e+31,
            price: 2.5e+32
        },
        headDeveloper:{
            display: "Head Developer",
            money_tick: 2.5e+32,
            price: 7.5e+33
        },
        ceo:{
            display: "CEO",
            money_tick: 7.5e+33,
            price: 1e+35
        }
    },
    spaceIndustry:{
        display: "Space Industry",
        rocketBuilder:{
            display: "Rocket Builder",
            money_tick: 1e+35,
            price: 2.5e+36
        },
        rocketDesigner:{
            display: "Rocket Designer",
            money_tick: 2.5e+36,
            price: 5e+37
        },
        rocketLauncher:{
            display: "Rocket Launcher",
            money_tick: 5e+37,
            price: 2.5e+38
        },
        astronout:{
            display: "Astronout",
            money_tick: 2.5e+38,
            price: 1e+40
        }
    }
}

//update
function update () {
    let jobBar = document.getElementById("div_job_progress")
    let advancementBar = document.getElementById("div_advancement_progress")
    let moneyText = document.getElementById("p_money_text")
    moneyText.innerHTML = "$"+getShort(game.money)
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