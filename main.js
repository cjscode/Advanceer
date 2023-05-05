console.log("main.js has loaded")
let version = "v0.11"
document.getElementById("version_text").innerHTML = version

//game
let game = {}

//money
game.money = 0

//categores
game.jobCategories = {
    categories: ["standWorker", "gasStationWorker", "groceryStoreWorker", "fastFood", "carDealership", "hospital", "softwareCompany", "spaceIndustry"],
    standWorker:{
        display: "Stand Worker",
        jobs: ["lemonadeStand","cookieStand","waterStand","sodaStand"],
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
        jobs: ["smallGasStation","gasStation","twentyFourSevenGasStation","bigCityGasStation"],
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
        twentyFourSevenGasStation:{
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
        jobs: ["shelfRestocker","checkout","manager","ceo"],
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
        jobs: ["cashier","cook","shiftManager","manager"],
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
        jobs: ["showroomWorker","mechanic","financeManager","ceo"],
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
        jobs: ["nursesAssistant","ambulanceDriver","nurse","cardiologist"],
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
    softwareCompany:{
        display: "Software Company",
        jobs: ["assistantDeveloper","developer","headDeveloper","ceo"],
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
        jobs: ["rocketBuilder","rocketDesigner","rocketLauncher","astronout"],
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
    let tabs = document.querySelectorAll(".tab")
    for (let i = 0; i < tabs.length; i++) {
        if (selectedTab == i+1) {
            tabs[i].classList.add("selected")
        } else {
            tabs[i].classList.remove("selected")
        }
    }
    if (selectedTab == 1) {
        document.getElementById("jobs").style.opacity = 1
        document.getElementById("jobs").style.display = "block"
    } else {
        document.getElementById("jobs").style.opacity = 0
        document.getElementById("jobs").style.display = "none"
    }
    //setupJobs()
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

//tabs
let selectedTab = 1
document.getElementById("tab1").addEventListener("click", function () {
    selectedTab = 1
})
document.getElementById("tab2").addEventListener("click", function () {
    selectedTab = 2
})
document.getElementById("tab3").addEventListener("click", function () {
    selectedTab = 3
})

//setup job things
function setupJobs () {
    document.getElementById("content").style.height = (document.getElementById("content").clientHeight-document.getElementById("tabs").clientHeight)+"px"
    document.getElementById("content").style.top = document.getElementById("tabs").clientHeight+"px"
    let headers = []
    let divClones = []
    for (let i = 0; i < Object.keys(game.jobCategories).length-1; i++) {
        headers[i] = document.createElement("h1")
        headers[i].innerHTML = game.jobCategories[game.jobCategories.categories[i]].display
        document.getElementById("jobs").appendChild(headers[i])
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            divClones[((ii*10)+(i))] = document.getElementById("template_div").cloneNode(true)
            divClones[((ii*10)+(i))].id = "div_"+((ii*10)+(i))
            divClones[((ii*10)+(i))].innerHTML = "<h1>"+((ii*10)+(i))+"</h1><p id='mpt_"+((ii*10)+(i))+"'>mpt here</p><div class='progress_bar'><div id='div_template_progress' class='inner_progress_bar'><p class='p_template_text'>ERR/ERR</p></div></div>"
            document.getElementById("jobs").appendChild(divClones[((ii*10)+(i))])
        }
    }
    document.getElementById("template_div").style.display = "none"
}
setupJobs()

//start updates
update()