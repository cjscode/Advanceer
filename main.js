console.log("main.js has loaded")
let version = "v1.27 BETA"
let hashText = location.hash.substring(1)

//game
let game = {}
if (!(localStorage.getItem("game") == null)) {
    game = JSON.parse(localStorage.getItem("game"))
} else {
    resetGame(true)
}
if (game.isInfinity == true) {
    game.money = Infinity
}
function resetGame(resetRebirths) {
    //money
    game.money = 0

    //version
    game.version = version

    //categores
    game.jobCategories = {
        categories: ["standWorker", "gasStationWorker", "groceryStoreWorker", "fastFood", "carDealership", "hospital", "softwareCompany", "spaceIndustry"],
        standWorker: {
            display: "Stand Worker",
            jobs: ["lemonadeStand", "cookieStand", "waterStand", "sodaStand"],
            multiplier: 1,
            lemonadeStand: {
                display: "Lemonade Stand",
                money_sec: 5e+0,
                price: 0,
                bought: false,
                max: 1.5e+2,
                current: 0
            },
            cookieStand: {
                display: "Cookie Stand",
                money_sec: 2.5e+1,
                price: 1.5e+2,
                bought: false,
                max: 1e+3,
                current: 0
            },
            waterStand: {
                display: "Water Stand",
                money_sec: 1.5e+2,
                price: 1e+3,
                bought: false,
                max: 2.5e+4,
                current: 0
            },
            sodaStand: {
                display: "Soda Stand",
                money_sec: 1e+3,
                price: 2.5e+4,
                bought: false,
                max: 5e+5,
                current: 0
            }
        },
        gasStationWorker: {
            display: "Gas Station Worker",
            jobs: ["smallGasStation", "gasStation", "twentyFourSevenGasStation", "bigCityGasStation"],
            multiplier: 100,
            smallGasStation: {
                display: "Small Gas Station",
                money_sec: 2.5e+4,
                price: 5e+5,
                bought: false,
                max: 7.5e+6,
                current: 0
            },
            gasStation: {
                display: "Gas Station",
                money_sec: 5e+5,
                price: 7.5e+6,
                bought: false,
                max: 2.5e+7,
                current: 0
            },
            twentyFourSevenGasStation: {
                display: "24/7 Gas Station",
                money_sec: 7.5e+6,
                price: 2.5e+7,
                bought: false,
                max: 1e+9,
                current: 0
            },
            bigCityGasStation: {
                display: "Big City Gas Station",
                money_sec: 2.5e+7,
                price: 1e+9,
                bought: false,
                max: 2.5e+10,
                current: 0
            }
        },
        groceryStoreWorker: {
            display: "Grocery Store Worker",
            jobs: ["shelfRestocker", "checkout", "manager", "ceo"],
            multiplier: 5000,
            shelfRestocker: {
                display: "Shelf Restocker",
                money_sec: 1e+9,
                price: 2.5e+10,
                bought: false,
                max: 5e+11,
                current: 0
            },
            checkout: {
                display: "Checkout",
                money_sec: 2.5e+10,
                price: 5e+11,
                bought: false,
                max: 2.5e+12,
                current: 0
            },
            manager: {
                display: "Manager",
                money_sec: 5e+11,
                price: 2.5e+12,
                bought: false,
                max: 1e+14,
                current: 0
            },
            ceo: {
                display: "CEO",
                money_sec: 2.5e+12,
                price: 1e+14,
                bought: false,
                max: 2.5e+15,
                current: 0
            }
        },
        fastFood: {
            display: "Fast Food",
            jobs: ["cashier", "cook", "shiftManager", "manager"],
            multiplier: 25000,
            cashier: {
                display: "Cashier",
                money_sec: 1e+14,
                price: 2.5e+15,
                bought: false,
                max: 1e+16,
                current: 0
            },
            cook: {
                display: "Cook",
                money_sec: 2.5e+15,
                price: 1e+16,
                bought: false,
                max: 2.5e+17,
                current: 0
            },
            shiftManager: {
                display: "Shift Manager",
                money_sec: 1e+16,
                price: 2.5e+17,
                bought: false,
                max: 7.5e+18,
                current: 0
            },
            manager: {
                display: "Manager",
                money_sec: 2.5e+17,
                price: 7.5e+18,
                bought: false,
                max: 1e+20,
                current: 0
            }
        },
        carDealership: {
            display: "Car Dealership",
            jobs: ["showroomWorker", "mechanic", "financeManager", "ceo"],
            multiplier: 750000,
            showroomWorker: {
                display: "Showroom Worker",
                money_sec: 7.5e+18,
                price: 1e+20,
                bought: false,
                max: 2.5e+21,
                current: 0
            },
            mechanic: {
                display: "Mechanic",
                money_sec: 1e+20,
                price: 2.5e+21,
                bought: false,
                max: 1e+23,
                current: 0
            },
            financeManager: {
                display: "Finance Manager",
                money_sec: 2.5e+21,
                price: 1e+23,
                bought: false,
                max: 2.5e+24,
                current: 0
            },
            ceo: {
                display: "CEO",
                money_sec: 1e+23,
                price: 2.5e+24,
                bought: false,
                max: 5e+25,
                current: 0
            }
        },
        hospital: {
            display: "Hospital",
            jobs: ["nursesAssistant", "ambulanceDriver", "nurse", "cardiologist"],
            multiplier: 10000000,
            nursesAssistant: {
                display: "Nurse's Assistant",
                money_sec: 2.5e+24,
                price: 5e+25,
                bought: false,
                max: 2.5e+26,
                current: 0
            },
            ambulanceDriver: {
                display: "Ambulance Driver",
                money_sec: 5e+25,
                price: 2.5e+26,
                bought: false,
                max: 1e+28,
                current: 0
            },
            nurse: {
                display: "Nurse",
                money_sec: 2.5e+26,
                price: 1e+28,
                bought: false,
                max: 7.5e+29,
                current: 0
            },
            cardiologist: {
                display: "Cardiologist",
                money_sec: 1e+28,
                price: 7.5e+29,
                bought: false,
                max: 1e+31,
                current: 0
            }
        },
        softwareCompany: {
            display: "Software Company",
            jobs: ["assistantDeveloper", "developer", "headDeveloper", "ceo"],
            multiplier: 250000000,
            assistantDeveloper: {
                display: "Assistant Developer",
                money_sec: 7.5e+29,
                price: 1e+31,
                bought: false,
                max: 2.5e+32,
                current: 0
            },
            developer: {
                display: "Developer",
                money_sec: 1e+31,
                price: 2.5e+32,
                bought: false,
                max: 7.5e+33,
                current: 0
            },
            headDeveloper: {
                display: "Head Developer",
                money_sec: 2.5e+32,
                price: 7.5e+33,
                bought: false,
                max: 1e+35,
                current: 0
            },
            ceo: {
                display: "CEO",
                money_sec: 7.5e+33,
                price: 1e+35,
                bought: false,
                max: 2.5e+36,
                current: 0
            }
        },
        spaceIndustry: {
            display: "Space Industry",
            jobs: ["rocketBuilder", "rocketDesigner", "rocketLauncher", "astronout"],
            multiplier: 1000000000,
            rocketBuilder: {
                display: "Rocket Builder",
                money_sec: 1e+35,
                price: 2.5e+36,
                bought: false,
                max: 5e+37,
                current: 0
            },
            rocketDesigner: {
                display: "Rocket Designer",
                money_sec: 2.5e+36,
                price: 5e+37,
                bought: false,
                max: 2.5e+38,
                current: 0
            },
            rocketLauncher: {
                display: "Rocket Launcher",
                money_sec: 5e+37,
                price: 2.5e+38,
                bought: false,
                max: 1e+40,
                current: 0
            },
            astronout: {
                display: "Astronout",
                money_sec: 2.5e+38,
                price: 1e+40,
                bought: false,
                max: 2.5e+41,
                current: 0
            }
        }
    }

    //advancements
    game.advancementCategories = {
        categories: ["standWorker", "gasStationWorker", "groceryStoreWorker", "fastFood", "carDealership", "hospital", "softwareCompany", "spaceIndustry"],
        standWorker: {
            display: "Stand Worker",
            jobs: ["lemonadeStand", "cookieStand", "waterStand", "sodaStand"],
            lemonadeStand: {
                display: "Fresh Lemons",
                max: 1e+2,
                current: 0,
                amount: 0.05,
                advances: 0
            },
            cookieStand: {
                display: "Allergy Friendly Ingredients",
                max: 1e+2,
                current: 0,
                amount: 0.1,
                advances: 0
            },
            waterStand: {
                display: "Cleaner Water",
                max: 1e+2,
                current: 0,
                amount: 0.5,
                advances: 0
            },
            sodaStand: {
                display: "Sugarier Sodas",
                max: 1e+2,
                current: 0,
                amount: 2,
                advances: 0
            }
        },
        gasStationWorker: {
            display: "Gas Station Worker",
            jobs: ["smallGasStation", "gasStation", "twentyFourSevenGasStation", "bigCityGasStation"],
            smallGasStation: {
                display: "Cleaner Bathroom",
                max: 1e+2,
                current: 0,
                amount: 10,
                advances: 0
            },
            gasStation: {
                display: "More Snacks",
                max: 1e+2,
                current: 0,
                amount: 25,
                advances: 0
            },
            twentyFourSevenGasStation: {
                display: "More Workers",
                max: 1e+2,
                current: 0,
                amount: 2e+2,
                advances: 0
            },
            bigCityGasStation: {
                display: "More Expensive Gas",
                max: 1e+2,
                current: 0,
                amount: 1e+3,
                advances: 0
            }
        },
        groceryStoreWorker: {
            display: "Grocery Store Worker",
            jobs: ["shelfRestocker", "checkout", "manager", "ceo"],
            shelfRestocker: {
                display: "Forklifts",
                max: 1e+2,
                current: 0,
                amount: 5e+4,
                advances: 0
            },
            checkout: {
                display: "Faster Belt",
                max: 1e+2,
                current: 0,
                amount: 1e+6,
                advances: 0
            },
            manager: {
                display: "More Computers",
                max: 1e+2,
                current: 0,
                amount: 7.5e+7,
                advances: 0
            },
            ceo: {
                display: "More Stores",
                max: 1e+2,
                current: 0,
                amount: 2.5e+9,
                advances: 0
            }
        },
        fastFood: {
            display: "Fast Food",
            jobs: ["cashier", "cook", "shiftManager", "manager"],
            cashier: {
                display: "Faster Math Skills",
                max: 1e+2,
                current: 0,
                amount: 1e+10,
                advances: 0
            },
            cook: {
                display: "Better Tasting Ingredients",
                max: 1e+2,
                current: 0,
                amount: 5e+11,
                advances: 0
            },
            shiftManager: {
                display: "Longer Shifts",
                max: 1e+2,
                current: 0,
                amount: 1e+13,
                advances: 0
            },
            manager: {
                display: "Auto Ordering",
                max: 1e+2,
                current: 0,
                amount: 2.5e+14,
                advances: 0
            }
        },
        carDealership: {
            display: "Car Dealership",
            jobs: ["showroomWorker", "mechanic", "financeManager", "ceo"],
            showroomWorker: {
                display: "More Cars",
                max: 1e+2,
                current: 0,
                amount: 5e+15,
                advances: 0
            },
            mechanic: {
                display: "More Tools",
                max: 1e+2,
                current: 0,
                amount: 7.5e+16,
                advances: 0
            },
            financeManager: {
                display: "Automated Finances",
                max: 1e+2,
                current: 0,
                amount: 1e+18,
                advances: 0
            },
            ceo: {
                display: "More Showrooms",
                max: 1e+2,
                current: 0,
                amount: 2.5e+19,
                advances: 0
            }
        },
        hospital: {
            display: "Hospital",
            jobs: ["nursesAssistant", "ambulanceDriver", "nurse", "cardiologist"],
            nursesAssistant: {
                display: "Longer Hours",
                max: 1e+2,
                current: 0,
                amount: 7.5e+20,
                advances: 0
            },
            ambulanceDriver: {
                display: "Faster Ambulance",
                max: 1e+2,
                current: 0,
                amount: 1e+22,
                advances: 0
            },
            nurse: {
                display: "Better Equipment",
                max: 1e+2,
                current: 0,
                amount: 2.5e+23,
                advances: 0
            },
            cardiologist: {
                display: "Less Blood Clots",
                max: 1e+2,
                current: 0,
                amount: 1e+25,
                advances: 0
            }
        },
        softwareCompany: {
            display: "Software Company",
            jobs: ["assistantDeveloper", "developer", "headDeveloper", "ceo"],
            assistantDeveloper: {
                display: "Faster Computers",
                max: 1e+2,
                current: 0,
                amount: 1e+27,
                advances: 0
            },
            developer: {
                display: "Better Keyboard",
                max: 1e+2,
                current: 0,
                amount: 2.5e+29,
                advances: 0
            },
            headDeveloper: {
                display: "Coding AI",
                max: 1e+2,
                current: 0,
                amount: 7.5e+30,
                advances: 0
            },
            ceo: {
                display: "Supercomputer",
                max: 1e+2,
                current: 0,
                amount: 5e+31,
                advances: 0
            }
        },
        spaceIndustry: {
            display: "Space Industry",
            jobs: ["rocketBuilder", "rocketDesigner", "rocketLauncher", "astronout"],
            rocketBuilder: {
                display: "Rocket Tool Kit",
                max: 1.5e+2,
                current: 0,
                amount: 1e+33,
                advances: 0
            },
            rocketDesigner: {
                display: "3D Simulator PLUS",
                max: 1e+2,
                current: 0,
                amount: 2.5e+34,
                advances: 0
            },
            rocketLauncher: {
                display: "Higher Safety Measures",
                max: 1e+2,
                current: 0,
                amount: 1e+36,
                advances: 0
            },
            astronout: {
                display: "High Tech Suits",
                max: 1e+2,
                current: 0,
                amount: 5e+37,
                advances: 0
            }
        }
    }

    //selections
    game.selectedJob = "none"
    game.selectedAdvancement = "none"

    //codes
    game.usedCodes = []

    //infinite money
    game.isInfinity = false

    //light mode
    game.isLight = false

    //rebirths
    if (resetRebirths) {
        game.rebirths = 0
    }
    return game
}
if (game.version == version) {
    document.getElementById("version_text").innerHTML = game.version
} else {
    document.getElementById("version_text").innerHTML = game.version + " (outdated)"
    document.getElementById("version_text").style.color = "darkred"
    document.getElementById("version_text").addEventListener("click", function () {
        selectedTab = 3
    })
}
//update
let fps
let loopOne = new Date()
let loopTwo
function update() {
    loopTwo = new Date()
    fps = 1000 / (loopTwo.getTime() - loopOne.getTime())
    loopOne = loopTwo
    if (game.money == Infinity) {
        game.isInfinity = true
    }
    //setup
    let jobBar = document.getElementById("div_job_progress")
    let advancementBar = document.getElementById("div_advancement_progress")
    let moneyText = document.getElementById("p_money_text")
    moneyText.innerHTML = "$" + getShort(game.money)
    document.getElementById("rebirth_button").innerHTML = "+" + getShort(Math.floor(game.money / 1e+20)) + " Rebirths"

    //tabs
    let tabs = document.querySelectorAll(".tab")
    for (let i = 0; i < tabs.length; i++) {
        if (selectedTab == i + 1) {
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
    if (selectedTab == 2) {
        document.getElementById("advances").style.opacity = 1
        document.getElementById("advances").style.display = "block"
    } else {
        document.getElementById("advances").style.opacity = 0
        document.getElementById("advances").style.display = "none"
    }
    if (selectedTab == 3) {
        document.getElementById("settings").style.opacity = 1
        document.getElementById("settings").style.display = "block"
    } else {
        document.getElementById("settings").style.opacity = 0
        document.getElementById("settings").style.display = "none"
    }

    //refresh job panels
    refreshJobs()

    //save game
    saveGame()

    //run again
    requestAnimationFrame(update)
}

//get percent
function getPercent(current, max) {
    return (current / max) * 100
}

//get shorter num
function getShort(n) {
    if (n == 0.05 || n == 0.1 || n == 0.5) {
        return n
    }
    const abbr = ["k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "Ud", "Dd", "Td", "Qad", "Qid", "Sxd", "Spd", "Ocd", "Nod", "Vg", "Uvg", "Dvg", "Tvg", "Qavg", "Qivg", "Sxvg", "Spvg", "Ocvg", "Nov", "Trg", "Untrg", "Dtrg", "Trst", "Quat", "Qtrg", "Sstrg", "Octtrg", "Novtrg", "Qdtrg", "Qutrg", "Sxatrg", "Sptatrg", "Octirg", "Nonatrg", "Cnt", "Unc", "Dnc", "Uncnt", "Ddnc", "Unddnc", "Vigdnc", "Unvigdnc", "Trgcnt", "Qdcnt", "Qtcnt", "Sxcnt", "Spcnt", "Octcnt", "Noncnt", "Ducnt", "Trcnt", "Qdrtn", "Qtrtn", "Ssrtn", "Sprtn", "Ocrtn", "Nongnt", "Mxgnt", "Mmagnt", "Min", "Acgnt", "Ovtnt", "Trtnt", "D"]
    if (n < 1000) {
        return Math.floor(n)
    }
    if (n == Infinity) {
        return "∞"
    }
    let i = 1
    while (n >= Math.pow(10, (i + 1) * 3)) {
        i++
    }
    i -= 1
    if (abbr[i] == undefined) {
        return "" + (getShort(n / 1e+225)) + " D"
    }
    return "" + (Math.floor(n / Math.pow(10, (i + 1) * 3 - 2)) / 100) + " " + abbr[i]
}

//tabs
let selectedTab = 1
document.getElementById("tab1").addEventListener("click", function () {
    selectedTab = 1
    document.getElementById("content").scrollTo(0)
})
document.getElementById("tab2").addEventListener("click", function () {
    selectedTab = 2
    document.getElementById("content").scrollTo(0)
})
document.getElementById("tab3").addEventListener("click", function () {
    selectedTab = 3
    document.getElementById("content").scrollTo(0)
})

//settings
document.getElementById("reset").addEventListener("click", function () {
    let doReset = prompt("Type RESET to reset your game. You can not undo this action.", "")
    if (doReset == "RESET") {
        resetGame(true)
        alert("Game reset.")
        location.reload()
    } else {
        alert("Reset game canceled.")
    }
})
document.getElementById("import_export").addEventListener("click", function () {
    let content = document.getElementById("import_export_box")
    if (content.value == "") {
        content.value = btoa(JSON.stringify(game))
    } else {
        game = JSON.parse(atob(content.value))
    }
})
document.getElementById("code_button").addEventListener("click", function () {
    let content = document.getElementById("code_box")
    let codes = { "FreeMoney": function () { game.money += 100000 }, "GoodStart": function () { game.money += 1000 }, "FreeReebirth": function () { game.rebirths += 1 }, "Noice": function () { game.money += 1 }, "Duble": function () { game.money *= 2 }, "Lemons": function () { game.advancementCategories.standWorker.lemonadeStand.advances += 25 }, "FunyNumber69": function () { game.money += 69 }, "Whoo": function () { alert("Whoo!") }, "LRose": function () { game.money *= 10; game.rebirths += 5; game.advancementCategories.standWorker.lemonadeStand.advances += 30 }, "AlexLikesToHack": function () { game.money += 1e+12; document.querySelector("#title_main").innerHTML = "Alexeer"; game.jobCategories.standWorker.lemonadeStand.money_sec = 1e+150; game.advancementCategories.standWorker.lemonadeStand.advances = 1e+150 }, "Angel": function () { game.money *= 50 }, "InfinityCode": function () { game.money = Infinity } }
    if (!(codes[content.value] == undefined) && !(game.usedCodes.includes(content.value))) {
        codes[content.value]()
        game.usedCodes.push(content.value)
        content.value = ""
        alert("Redeemed!")
    } else {
        alert("Invalid code!")
    }
})

//setup job things
function setupJobs() {
    //setup
    document.getElementById("template_div").style.display = "block"
    document.getElementById("content").style.height = (document.getElementById("content").clientHeight - document.getElementById("tabs").clientHeight) + "px"
    document.getElementById("content").style.top = document.getElementById("tabs").clientHeight + "px"
    let headers = []
    let divClones = []
    let tempName = document.getElementById("name")
    let tempMps = document.getElementById("mps")
    let tempPrice = document.getElementById("price")

    //create jobs
    for (let i = 0; i < Object.keys(game.jobCategories).length - 1; i++) {
        headers[i] = document.createElement("h1")
        headers[i].innerHTML = game.jobCategories[game.jobCategories.categories[i]].display + " <p>(" + getShort(game.jobCategories[game.jobCategories.categories[i]].multiplier) + "x all " + game.jobCategories[game.jobCategories.categories[i]].display + " xp)</p>"
        headers[i].classList.add("section")
        headers[i].id = "header_" + i
        document.getElementById("jobs").appendChild(headers[i])
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            tempName.innerHTML = game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].display
            tempPrice.innerHTML = "$" + getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].price)
            tempMps.innerHTML = "$" + getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec) + "/s"
            divClones[((ii * 10) + (i))] = document.getElementById("template_div").cloneNode(true)
            divClones[((ii * 10) + (i))].id = "div_" + ((ii * 10) + (i))
            divClones[((ii * 10) + (i))].addEventListener("click", function () {
                select(((i * 4) + ii), "job")
            })
            document.getElementById("jobs").appendChild(divClones[((ii * 10) + (i))])
        }
    }

    //hide template
    document.getElementById("template_div").style.display = "none"
}

//setup advancment things
function setupAdvancments() {
    let temp = document.getElementById("template_advance_div")
    temp.style.display = "block"
    let headers = []
    let tempName = temp.querySelector("#name")
    let tempMult = temp.querySelector("#mult")
    for (let i = 0; i < Object.keys(game.jobCategories).length - 1; i++) {
        headers[i] = document.createElement("h1")
        headers[i].innerHTML = game.jobCategories[game.jobCategories.categories[i]].display
        headers[i].classList.add("section")
        headers[i].id = "advancement_header_" + i
        document.getElementById("advances").appendChild(headers[i])
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            tempName.innerHTML = "ERR"
            tempMult.innerHTML = "+" + getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].amount) + "x " + game.jobCategories[game.jobCategories.categories[i]].display + " xp"
            let clone = temp.cloneNode(true)
            clone.id = "advancement_div_" + ((i * 4) + ii)
            clone.addEventListener("click", function () {
                select(((i * 4) + ii), "adv")
            })
            document.getElementById("advances").appendChild(clone)
        }
    }
    temp.style.display = "none"
}

//get current mult
function getMult(i, type) {
    let cat = game.advancementCategories[game.jobCategories.categories[i]]
    let mult = 1
    for (let ii = 0; ii < Object.keys(cat.jobs).length; ii++) {
        mult += cat[cat.jobs[ii]].amount * cat[cat.jobs[ii]].advances
    }
    if (type == "adv") {
        mult = 1
    }
    return ((mult * game.jobCategories[game.jobCategories.categories[i]].multiplier) + 1) * ((game.rebirths * 0.05) + 1)
}

//refresh the jobs and advancments
function refreshJobs() {
    //setup
    let boughtList = []

    //update job panels and labels
    for (let i = 0; i < Object.keys(game.jobCategories).length - 1; i++) {
        for (let ii = 0; ii < Object.keys(game.jobCategories[game.jobCategories.categories[i]].jobs).length; ii++) {
            let job = document.getElementById("div_" + ((ii * 10) + (i)))
            let adv = document.getElementById("advancement_div_" + ((i * 4) + (ii)))
            boughtList.push(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].bought)

            //indicate if bought
            if (boughtList[(i * 4) + ii]) {
                job.querySelector(".center").style.display = "none"
                adv.style.opacity = 1
                job.style.opacity = 1
            } else {
                job.querySelector(".center").style.display = "block"
                adv.style.opacity = 0.5
                job.style.opacity = 0.5
            }

            //hide panels
            job = document.getElementById("div_" + ((ii * 10) + (i)))
            adv = document.getElementById("advancement_div_" + ((i * 4) + (ii)))
            if (!(ii == 0 && i == 0)) {
                if (ii == 1 && !(i == 0) && !boughtList[(i * 4) + ii - 1] && !(boughtList[(i * 4) + ii - 1] == undefined)) {
                    adv.style.display = "none"
                    job.style.display = "none"
                } else {
                    if (boughtList[(i * 4) + ii - 1]) {
                        adv.style.display = "block"
                        job.style.display = "block"
                    } else {
                        adv.style.display = "none"
                        job.style.display = "none"
                    }
                }
            }

            //update progress and money
            job.querySelector("#div_progress").style.width = getPercent(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + "%"
            job.querySelector("#progress_text").innerHTML = getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current) + " / " + getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + " (" + Math.floor(getPercent(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max)) + "%)"
            adv.querySelector("#div_progress").style.width = getPercent(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + "%"
            adv.querySelector("#progress_text").innerHTML = getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current) + " / " + getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + " (" + Math.floor(getPercent(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max)) + "%)"
            job.querySelector("#price").innerHTML = "$" + getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].price)
            job.querySelector("#mps").innerHTML = getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec) + "/s"
            adv.querySelector("#name").innerHTML = game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].display + " (" + getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].advances) + ")"
            document.getElementById("rebirth_text").innerHTML = getShort(game.rebirths)
            if (game.selectedJob == (i * 4) + ii) {
                document.getElementById("p_job_text").innerHTML = getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current) + " / " + getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + " (" + Math.floor(getPercent(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max)) + "%)"
                document.getElementById("div_job_progress").style.width = getPercent(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + "%"
                document.getElementById("p_money_sec_text").innerHTML = getShort(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec) + "/s"
                game.money += Math.floor(game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec) / fps
                game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current += 1 * getMult(i, "job")
                if (game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current >= game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) {
                    game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current = 0
                    game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max *= 1.1
                    game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].money_sec *= 1.05
                }
            }
            if (game.selectedAdvancement == (i * 4) + ii) {
                document.getElementById("p_advance_text").innerHTML = getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current) + " / " + getShort(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + " (" + Math.floor(getPercent(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max)) + "%)"
                document.getElementById("div_advance_progress").style.width = getPercent(game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current, game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) + "%"
                game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current += 1 * getMult(i, "adv")
                if (game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current >= game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max) {
                    game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].current = 0
                    game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].max *= 1.1
                    game.advancementCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]].advances += 1
                }
            }
        }

        //hide corresponding label
        if (!(i == 0)) {
            if (!boughtList[(i * 4) - 1]) {
                document.getElementById("header_" + i).style.display = "none"
                document.getElementById("advancement_header_" + i).style.display = "none"
            } else {
                document.getElementById("header_" + i).style.display = "block"
                document.getElementById("advancement_header_" + i).style.display = "block"
            }
        }
    }
}

//job selected
function select(id, type) {
    let ii = id % 4
    let i = Math.floor(id / 4)
    let job = game.jobCategories[game.jobCategories.categories[i]][game.jobCategories[game.jobCategories.categories[i]].jobs[ii]]
    if (type == "job") {
        if (!(job.bought)) {
            if (game.money >= job.price) {
                game.selectedJob = id
                game.money -= job.price
                job.bought = true
            }
        } else {
            game.selectedJob = id
        }
    } else {
        if (job.bought) {
            game.selectedAdvancement = id
        }
    }
}

//create and setup jobs and advancments
setupJobs()
setupAdvancments()

//save game
function saveGame() {
    localStorage.setItem("game", JSON.stringify(game))
}

//rebirths
document.getElementById("rebirth_button").addEventListener("click", function () {
    if (Math.floor(game.money / 1e+20) < 1) {
        alert("Not enough money. " + getShort(1e+20 - game.money) + " more needed to rebirth.")
        return
    }
    let doRebirth = prompt("Rebirth for +" + getShort(Math.floor(game.money / 1e+20)) + " Rebirths? Type REBIRTH to confirm.")
    if (doRebirth == "REBIRTH") {
        game.rebirths += Math.floor(game.money / 1e+20)
        resetGame(false)
        alert("Rebirth successful.")
    } else {
        alert("Rebirth canceled.")
    }
})

//light mode
if (game.isLight == true) {
    let elem = document.querySelectorAll("*")
    for (let i = 0; i < elem.length; i++) {
        elem[i].classList.add("light")
    }
}
document.getElementById("light_mode").addEventListener("click", function () {
    game.isLight = !(game.isLight)
    saveGame()
    location.replace("https://cjscode.github.io/Advanceer#settings")
})

if (hashText == "jobs") {
    selectedTab = 1
} else if (hashText == "advance") {
    selectedTab = 2
} else if (hashText == "settings") {
    selectedTab = 3
}

//start updates
update()