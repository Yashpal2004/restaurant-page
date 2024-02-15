function menu_page() {
  const content = document.getElementById("content")

  content.innerHTML = ""

  const menu = document.createElement("div")
  menu.id = "menu-page"

  const food = ["Cursed_Womb", "Gojo_Saturo", "Jogo", "Mahoraga"]

  for (let i = 0; i < food.length; i++) {
    let disp = document.createElement("div")
    disp.className = "menu-items"
    
    let image = document.createElement("img")
    image.src = `file:///home/yashpal/Documents/repos/restaurant-page/src/images/food/${i}.webp`

    let title = document.createElement("p")
    title.innerText = `${food[i]}`

    disp.appendChild(image)
    disp.appendChild(title)
    menu.appendChild(disp)
  }

  content.appendChild(menu)
}

export{menu_page}
