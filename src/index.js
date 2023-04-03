import "./components/card/card.js"
async function getData(){
    const message = {
        method: 'GET',
        headers: {
            'content-type':'application/json'
        }
    }
    const API = await fetch('https://64207a7425cb6572104a3f53.mockapi.io/catalog',message)
    const data = await API.json()
    console.log(data)
    return data
}

const shoesList = await getData();
const cardsContainer = document.getElementById('cards_container');

console.log(Array.isArray(shoesList))

function renderShoes(){
    shoesList.forEach(shoe =>{
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('url', shoe.url)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('description', shoe.description)
        nikeShoe.setAttribute('colors', shoe.color)
        nikeShoe.setAttribute('description', shoe.description)
    
        cardsContainer.append(nikeShoe)
    });
}

renderShoes();


