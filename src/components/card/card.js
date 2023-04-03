class Card extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.name = this.getAttribute('name')
        this.url = this.getAttribute('url')
        this.description = this.getAttribute('description')
        this.category = this.getAttribute('category')
        this.collection = this.getAttribute('collection')
        this.colors = this.getAttribute('color')
        this.price = this.getAttribute('price')
    }

    static get observedAttributes() {
        return ['name', 'url', 'description', 'category', 'collection', 'colors', 'price']
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "/src/components/card/style.css">
        <article class="product">
            <span class="product_price">$${this.price}</span>
            <img class="product_image" src="${this.url}">
            <h1 class="product_title">${this.name}</h1>
            <hr />
            <h3>${this.category}</h3>
            <p>${this.description}</p>
            <a href="#" class="product_btn btn">SHOP</a>
        </article>
        `
    }
    connectedCallback() {
        this.render()
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }
}

customElements.define('nike-card', Card)
export default Card;