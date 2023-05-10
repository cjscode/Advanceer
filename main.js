console.log("main.js has loaded")
let version = "v0.16"
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
            money_sec: 5e+0,
            price: 0,
            bought: false
        },
        cookieStand: {
            display:"Cookie Stand",
            money_sec: 2.5e+1,
            price: 1.5e+2,
            bought: false
        },
        waterStand: {
            display:"Water Stand",
            money_sec: 1.5e+2,
            price: 1e+3,
            bought: false
        },
        sodaStand: {
            display:"Cookie Stand",
            money_sec: 1e+3,
            price: 2.5e+4,
            bought: false
        }
    },
    gasStationWorker:{
        display: "Gas Station Worker",
        jobs: ["smallGasStation","gasStation","twentyFourSevenGasStation","bigCityGasStation"],
        smallGasStation:{
            display: "Small Gas Station",
            money_sec: 2.5e+4,
            price: 5e+5,
            bought: false
        },
        gasStation:{
            display: "Gas Station",
            money_sec: 5e+5,
            price: 7.5e+6,
            bought: false
        },
        twentyFourSevenGasStation:{
            display: "24/7 Gas Station",
            money_sec: 7.5e+6,
            price: 2.5e+7,
            bought: false
        },
        bigCityGasStation:{
            display: "Big City Gas Station",
            money_sec: 2.5e+7,
            price: 1e+9,
            bought: false
        }
    },
    groceryStoreWorker:{
        display: "Grocery Store Worker",
        jobs: ["shelfRestocker","checkout","manager","ceo"],
        shelfRestocker:{
            display: "Shelf Restocker",
            money_sec: 1e+9,
            price: 2.5e+10,
            bought: false
        },
        checkout:{
            display: "Checkout",
            money_sec: 2.5e+10,
            price: 5e+11,
            bought: false
        },
        manager:{
            display: "Manager",
            money_sec: 5e+11,
            price: 2.5e+12,
            bought: false
        },
        ceo:{
            display: "CEO",
            money_sec: 2.5e+12,
            price: 1e+14,
            bought: false
        }
    },
    fastFood:{
        display:"Fast Food",
        jobs: ["cashier","cook","shiftManager","manager"],
        cashier:{
            display: "Cashier",
            money_sec: 1e+14,
            price: 2.5e+15,
            bought: false
        },
        cook:{
            display: "Cook",
            money_sec: 2.5e+15,
            price: 1e+16,
            bought: false
        },
        shiftManager:{
            display: "Shift Manager",
            money_sec: 1e+16,
            price: 2.5e+17,
            bought: false
        },
        manager:{
            display: "Manager",
            money_sec: 2.5e+17,
            price: 7.5e+18,
            bought: false
        }
    },
    carDealership:{
        display: "Car Dealership",
        jobs: ["showroomWorker","mechanic","financeManager","ceo"],
        showroomWorker:{
            display: "Showroom Worker",
            money_sec: 7.5e+18,
            price: 1e+20,
            bought: false
        },
        mechanic:{
            display: "Mechanic",
            money_sec: 1e+20,
            price: 2.5e+21,
            bought: false
        },
        financeManager:{
            display: "Finance Manager",
            money_sec: 2.5e+21,
            price: 1e+23,
            bought: false
        },
        ceo:{
            display: "CEO",
            money_sec: 1e+23,
            price: 2.5e+24,
            bought: false
        }
    },
    hospital:{
        display: "Hospital",
        jobs: ["nursesAssistant","ambulanceDriver","nurse","cardiologist"],
        nursesAssistant:{
            display: "Nurse's Assistant",
            money_sec: 2.5e+24,
            price: 5e+25,
            bought: false
        },
        ambulanceDriver:{
            display: "Ambulance Driver",
            money_sec: 5e+25,
            price: 2.5e+26,
            bought: false
        },
        nurse:{
            display: "Nurse",
            money_sec: 2.5e+26,
            price: 1e+28,
            bought: false
        },
        cardiologist:{
            display: "Cardiologist",
            money_sec: 1e+28,
            price: 7.5e+29,
            bought: false
        }
    },
    softwareCompany:{
        display: "Software Company",
        jobs: ["assistantDeveloper","developer","headDeveloper","ceo"],
        assistantDeveloper:{
            display: "Assistant Developer",
            money_sec: 7.5e+29,
            price: 1e+31,
            bought: false
        },
        developer:{
            display: "Developer",
            money_sec: 1e+31,
            price: 2.5e+32,
            bought: false
        },
        headDeveloper:{
            display: "Head Developer",
            money_sec: 2.5e+32,
            price: 7.5e+33,
            bought: false
        },
        ceo:{
            display: "CEO",
            money_sec: 7.5e+33,
            price: 1e+35,
            bought: false
        }
    },
    spaceIndustry:{
        display: "Space Industry",
        jobs: ["rocketBuilder","rocketDesigner","rocketLauncher","astronout"],
        rocketBuilder:{
            display: "Rocket Builder",
            money_sec: 1e+35,
            price: 2.5e+36,
            bought: false
        },
        rocketDesigner:{
            display: "Rocket Designer",
            money_sec: 2.5e+36,
            price: 5e+37,
            bought: false
        },
        rocketLauncher:{
            display: "Rocket Launcher",
            money_sec: 5e+37,
            price: 2.5e+38,
            bought: false
        },
        astronout:{
            display: "Astronout",
            money_sec: 2.5e+38,
            price: 1e+40,
            bought: false
        }
    }
}

//selections
game.selectedJob = "none"
game.selectedAdvancement = "none"

//update
function update () {
    //setup
    let jobBar = document.getElementById("div_job_progress")
    let advancementBar = document.getElementById("div_advancement_progress")
    let moneyText = document.getElementById("p_money_text")
    moneyText.innerHTML = "$"+getShort(game.money)

    //tabs
    let tabs = document.querySelectorAll(".tab")
    for (let i = 0; i < tabs.length; i++) {
        if (selectedTab == i+1) {
            tabs[i].classList.add("selected")
        } else {
            tabs[i].classList.remove("selected")
        }
    }

    //show selection 
    if (selectedTab == 1) {
        document.getElementById("jobs").style.opacity = 1
        document.getElementById("jobs").style.display = "block"
    } else {
        document.getElementById("jobs").style.opacity = 0
        document.getElementById("jobs").style.display = "none"
    }

    //refresh job panels
    refreshJobs()

    //run again
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
    //setup
    document.getElementById("template_div").style.display = "block"
    document.getElementById("content").style.height = (document.getElementById("content").clientHeight-document.getElementById("tabs").clientHeight)+"px"
    document.getElementById("content").style.top = document.getElementById("tabs").clientHeight+"px"
    let headers = []
    let divClones = []
    let tempName = document.getElementById("name")
    let tempMps = document.getElementById("mps")
    let tempPrice = document.getElementById("price") 

    //create jobs
    for (let i = 0; i < Object.keys(game.jobCategories).length-1; i++) {
        headers[i] = document.createElement("h1")
        headers[i].innerHTML = game.jobCategories[game.jobCategories.categories[i]].display
        headers[i].classList.add("section")
        headers[i].id = "header_"+i
        document.getElementById("jobs").appendChild(headers[i])
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            tempName.innerHTML = game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].display
            tempPrice.innerHTML = "$"+getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].price)
            tempMps.innerHTML = "$"+getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec)+"/s"
            divClones[((ii*10)+(i))] = document.getElementById("template_div").cloneNode(true)
            divClones[((ii*10)+(i))].id = "div_"+((ii*10)+(i))
            divClones[((ii*10)+(i))].addEventListener("click", function () {
                select(((i*4)+ii), "job")
            })
            document.getElementById("jobs").appendChild(divClones[((ii*10)+(i))])
        }
    }

    //hide template
    document.getElementById("template_div").style.display = "none"
}

//refresh the jobs
function refreshJobs () {
    //setup
    let boughtList = []

    //update job panels and labels
    for (let i = 0; i < Object.keys(game.jobCategories).length-1; i++) {
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            let job = document.getElementById("div_"+((ii*10)+(i)))
            boughtList.push(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].bought)

            //indicate if bought
            if (boughtList[(i*4)+ii]) {
                job.querySelector(".center").style.display = "none"
                job.style.opacity = 1
            } else {
                job.querySelector(".center").style.display = "block"
                job.style.opacity = 0.5
            }

            //hide panels
            if (!(ii == 0 && i == 0)) {
                job = document.getElementById("div_"+((ii*10)+(i)))
                if (ii == 1 && !(i == 0) && !boughtList[(i*4)+ii-1] && !(boughtList[(i*4)+ii-1] == undefined)) {
                    job.style.display = "none"
                } else {
                    if (boughtList[(i*4)+ii-1]) {
                        job.style.display = "block"
                    } else {
                        job.style.display = "none"
                    }
                }
            }
        }

        //hide corresponding label
        if (!(i == 0)) {
            if (!boughtList[(i*4)-1]) {
                document.getElementById("header_"+i).style.display = "none"
            } else {
                document.getElementById("header_"+i).style.display = "block"
            }
        }
    }
}

//job selected
function select(id, type) {
    let ii = id % 4
    let i = Math.floor(id/4)
    let job = game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]]
    if (type == "job") {
        if (!(job.bought)) {
            //if (game.money >= job.price) {
                game.selectedJob = id
                /*game.money -= job.price
            }*/
            job.bought = true
            //alert(job.price)
        } else {
            game.selectedJob = id
        }
    } else {
        game.selectedAdvancement = id
    }
}

//create and setup jobs
setupJobs()

//start updates
update()