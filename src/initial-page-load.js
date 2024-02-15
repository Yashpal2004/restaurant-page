function initial_page() {
  const content = document.getElementById("content")
  
  const quote = document.createElement("p")
  quote.id = "quote"
  quote.innerText = "You should have burnt everything you desired to a cinder. to reach the height of Satoru Gojo and not worry about your future or identity. but you lacked the hunger to take hold of your desires."

  content.appendChild(quote)
}

export{initial_page}
