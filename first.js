
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

createCard("img.jpg", "the game changer", "jjdnfjdf")




