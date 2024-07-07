const tiers = [
    {"name": "S", "color": "green"},
    {"name": "A", "color": "yellowgreen"},
    {"name": "B", "color": "yellow"},
    {"name": "C", "color": "orange"},
    {"name": "D", "color": "orangered"},
    {"name": "F", "color": "red"},
]

const garys = [
    {
      "name": "Garry's mod",
      "tier": "B",
      "weight": 80,
      "reason": "Pretty fun sandbox physics engine game",
      "link": "https://en.wikipedia.org/wiki/Garry%27s_Mod",
      "filename": "GarrysMod.png"
    },
    {
      "name": "Gary T",
      "tier": "A",
      "weight": 50,
      "reason": "Honestly, hoping to get a Bravo out of this placement.",
      "link": "https://www.linkedin.com/in/garytauscher/",
      "filename": "GaryT.jpg"
    },
    {
      "name": "Gary Indiana",
      "tier": "C",
      "weight": 80,
      "reason": "Indiana's 8th most populous city",
      "link": "https://en.wikipedia.org/wiki/Gary%2C_Indiana",
      "filename": "GaryIndiana.png"
    },
    {
      "name": "Gary Busey",
      "tier": "D",
      "weight": 10,
      "reason": "Under Siege was a great move",
      "link": "https://en.wikipedia.org/wiki/Gary_Busey",
      "filename": "GaryBusey.png"
    },
    {
      "name": "Gary Coleman",
      "tier": "B",
      "weight": 50,
      "reason": "3 time People's Choice Award winner for \"Favorite Young TV Performer",
      "link": "https://en.wikipedia.org/wiki/Gary_Coleman",
      "filename": "GaryColeman.png"
    },
    {
      "name": "Gary Oldman",
      "tier": "S",
      "weight": 50,
      "reason": "Legendary actor.  Fifth Element, Batman (Dark Knight series), Dracula, Air Force One",
      "link": "https://en.wikipedia.org/wiki/Gary_Oldman",
      "filename": "GaryOldman.png"
    },
    {
      "name": "Gary the Snail (spongebob)",
      "tier": "B",
      "weight": 30,
      "reason": "Basically an underwater cat.  Cats are either S-tier or D-tier depending on who you ask, so we'll take the average.",
      "link": "https://spongebob.fandom.com/wiki/Gary_the_Snail",
      "filename": "GaryTheSnail.png"
    },
    {
      "name": "Gary Vay-Ner-Chuk",
      "tier": "F",
      "weight": 10,
      "reason": "I don't know who this is, but they were good enough at SEO to be the first person in the Google result for 'Gary'",
      "link": "https://www.instagram.com/garyvee/?hl=en",
      "filename": "GaryVaynerchuk.png"
    },
    {
      "name": "Gary Sinise",
      "tier": "S",
      "weight": 60,
      "reason": "After staring as Captain Dan in Forest Gump, became heavily influenced by the role, and took on a life of working for veterans",
      "link": "https://en.wikipedia.org/wiki/Gary_Sinise",
      "filename": "GarySinese.png"
    },
    {
      "name": "Gary Cooper (popularized the name Gary)",
      "tier": "A",
      "weight": 70,
      "reason": "This man is credited as being the reason the name Gary become popular in the early 1900s",
      "link": "https://en.wikipedia.org/wiki/Gary_Cooper",
      "filename": "GaryCooper.png"
    },
    {
      "name": "Garry Shandling",
      "tier": "C",
      "weight": 50,
      "reason": "Hilarious",
      "link": "https://en.wikipedia.org/wiki/Garry_Shandling",
      "filename": "GarryShandling.png"
    },
    {
      "name": "Gary Cole",
      "tier": "A",
      "weight": 10,
      "reason": "Bill Lumbergh, master of TPS reports.  Underrated performance as the VP Bob Russell in the West Wing.  Genereally great character actor.",
      "link": "https://en.wikipedia.org/wiki/Gary_Cole",
      "filename": "GaryCole.png"
    },
    {
      "name": "Evil Gary",
      "tier": "D",
      "weight": 50,
      "reason": "Prominent member of many watchlists.  Inspiration for the villian in multiple Disney scripts.",
      "link": null,
      "filename": "EvilGaryT.jpg"
    },
    {
      "name": "Gary Chalmers (Principal), Simpsons",
      "tier": "B",
      "weight": 10,
      "reason": "SKINNERRRRRR!  Enjoyer of Steamed Hams.",
      "link": "https://simpsons.fandom.com/wiki/Gary_Chalmers",
      "filename": "GaryChalmers.png"
    },
    {
      "name": "Gary \"Eggsy\" Unwin",
      "tier": "C",
      "weight": 10,
      "reason": "Main character from the Kingsman series.",
      "link": "https://en.wikipedia.org/wiki/Kingsman_(franchise)",
      "filename": "Garry_Eggsy_Unwin.png"
    },
    {
      "name": "USS Gary",
      "tier": "C",
      "weight": 20,
      "reason": "Ship goes brrrr.",
      "link": "https://en.wikipedia.org/wiki/USS_Gary_(FFG-51)",
      "filename": "USSGary.png"
    },
    {
      "name": "Gary (Mango)",
      "tier": "F",
      "weight": 50,
      "reason": "A mango born in Florida.  Thus, a FloridaMan[go]",
      "link": "https://en.wikipedia.org/wiki/Gary_(mango)",
      "filename": "GaryMango.jpg"
    },
    {
      "name": "Gary GPT",
      "tier": "B",
      "weight": 51,
      "reason": "The image generated when I prompted an AI image generate for 'Create an image of a Gary'",
      "link": null,
      "filename": "GaryGPT.jpg"
    }
  ]

let createTier = (tier) => {
    let tier_id = `${tier.name}-tier`

    // Create row (contains lsbel and elements)
    let row = document.createElement("div")
    row.className = "row"

    // Create label (S, A, B, ...)
    let label = document.createElement("div")
    label.id = tier_id
    label.className = "label"
    label.innerHTML = tier.name
    label.style.backgroundColor = tier.color

    // Add to document
    row.appendChild(label)
    board.appendChild(row)
}

let wrapImg = (link, imgElement, tier_div) => {
    let wrapped
    if (link !== null) {
        let a = document.createElement("a")
        a.href = link
        a.target = "_blank"
        a.appendChild(imgElement)
        wrapped = a
    } else {
        wrapped = imgElement
    }
    tier_div.appendChild(wrapped)
}

let addToTier = (gary) => {
    let tier_id = `${gary.tier}-tier`
    let tier_div = document.getElementById(tier_id).parentNode

    // Create card (to contain img)
    let card = document.createElement("div")
    card.className = "card"

    // Create img element
    // let btn = document.createElement("button")
    let img = document.createElement("img")
    let img_src = `images/${gary.filename}`
    img.src = img_src
    let tooltipContent = `<h2>${gary.name}</h2>${gary.reason}`

    tippy(img, {
        content: tooltipContent, 
        allowHTML: true,
        placement: "top", 
        arrow: true
    })

    // Add to document
    card.appendChild(img)
    wrapImg(gary.link, card, tier_div) 
}

let organizeGarys = () => {
    // Embrark on a truly abhorent task
    // **shudder**
    let garys_by_tier = {}
    garys.forEach((g) => {
        if (!(g.tier in garys_by_tier)) {
            garys_by_tier[g.tier] = []
        }
        garys_by_tier[g.tier].push(g)
    })
    return garys_by_tier
}

let buildTierList = () => {
    let garys_by_tier = organizeGarys()

    // Create HTML elements for each tier
    tiers.forEach((t) => {
        createTier(t)
    })
    
    for (const [_idx, garys] of Object.entries(garys_by_tier)) {
        let sorted_garys = _.sortBy(garys, (o) => { return o.weight} )
        sorted_garys.forEach((gary) => {
            addToTier(gary)
        })
        
    }
}

buildTierList()