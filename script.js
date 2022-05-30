const products = [
    {name: 'Doo-Wops & Hooligans', desc: 'Bruno Mars',price: 39, image: './images/vinyl-bruno_mars.jpg'},
      {name: 'The Best of Whitney Houston', desc: 'Whitney Houston',price: 37, image: './images/vinyl-whitney_houston.jpg'},
      {name: 'Harry’s House', desc: 'Harry Styles',price: 42, image: './images/vinyl-harrys_house.jpg'},
      {name: 'Greatest Hits (1981)', desc: 'Queen',price: 35, image: './images/vinyl-queen.jpg'},
      {name: 'Born To Die', desc: 'Lana del Rey',price: 40.5, image: './images/vinyl-lana_del_rey.jpg'},
      {name: 'Sun is shining', desc: 'Bob Marley',price: 38, image: './images/vinyl-bob_marley.jpg'},
      {name: '...And Justice for All', desc: 'Metallica',price: 36, image: './images/vinyl-metallica.jpg'},
      {name: '2020', desc: 'Bon Jovi',price: 34, image: './images/vinyl-bon_jovi.jpg'},
  ]
  
  function createProductCards(data){
    data.forEach(e =>{
  
      const productTemplate = document.getElementById('cardContainer')
  
      const header = productTemplate.content.querySelectorAll('h5')
      header[0].innerHTML = e.name
  
      const image  = productTemplate.content.querySelectorAll('img')
      image[0].src = e.image
  
      const pTags = productTemplate.content.querySelectorAll('p')
      pTags[0].innerHTML = e.desc
      pTags[1].innerHTML = '$' + e.price 
  
      const productsContainer = document.getElementById('products') 
      let clone  = document.importNode(productTemplate.content, true)
      productsContainer.appendChild(clone)
    })
  }
  
  createProductCards(products)
  
  const cards = document.getElementsByClassName('card')
  
  console.log(cards)
  let numberContainer = document.getElementById('cart')
  let cart = []
  let number  = 0 
  
  for(let i = 0; i < cards.length; i ++){
    
  cards[i].addEventListener('click', function(event){
    number ++
    cart.push(products[i])
    numberContainer.innerHTML = number
    console.log(cart)
  })
  }
  
  
  document.getElementById('checkout').addEventListener('click', function(){
    console.log(cart, 'real cart?')
  alert(outputCart(cart))
    cart=[]
    number = 0
    document.getElementById('cart').innerHTML = number
    window.location = './success.html'
  })
  
  function outputCart(array){
    console.log(array)
    let output = ''
    let total = 0
    for(let i = 0; i < array.length; i ++){
      output = output.concat(' ', `${array[i].name} -${array[i].price} `)
      total = total + array[i].price
    }
  return `Total: ${total} Output: ${output}`
    
  }
  
  