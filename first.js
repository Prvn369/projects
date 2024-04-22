
let createCard = (image, title, link) => {
        let html = `<div class="crd">
            <div class="img">
                <img src="${image}">
            </div>
            <div class="crd-right">
                <h2 class="crd-heading">${title}</h2>
               
                <a target="_blank" href="${link}"><button type="button">click here</button></a>
            
            </div>
            </div>`
        

        let container = document.querySelector(".container")
        container.innerHTML = container.innerHTML + html
}

createCard("random-color-change.png", "Random Color Changer", "https://prvn369.github.io/random_color_change/")
createCard("clock.png", "Digital Clock", "https://prvn369.github.io/clock/")
createCard("card-design.png", "Card Design", "https://prvn369.github.io/card-design/")
createCard("profile-card.png", "Profile Card", "https://prvn369.github.io/profile-card/")
createCard("hakerman.png", "Hackerman", "https://prvn369.github.io/hackerman/")
createCard("stone-paper-scissor.png", "Stone Paper Scissor", "https://prvn369.github.io/stone-paper-scissor/")




