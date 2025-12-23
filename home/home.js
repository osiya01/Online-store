import { addToCart } from '../cart/cart.js'

let box = document.querySelector('.box')


export function get(data) {
    box.innerHTML = ''

    data.slice(0, 3).forEach(element => {
        const fields = element.fields

        let card = document.createElement('div')
        card.classList.add('card')

        let image = document.createElement('img')
        image.src = fields.image?.[0]?.url || 'https://via.placeholder.com/150'
        image.classList.add('img')
        image.onclick =()=>{
    localStorage.setItem("id", element.id)
    window.location.href = "../getById/getbyid.html"
}

        let name = document.createElement('h5')
        name.innerText = fields.name
        name.className = 'name'

        let price = document.createElement('h6')
        price.innerText = `$${fields.price}`
        price.className = 'price'
        let addCartBtn = document.createElement('button')
        addCartBtn.innerText = 'Add to cart'
        addCartBtn.className = 'addCartBtn'
        

        addCartBtn.onclick = () => {
            addToCart({
                id: element.id,
                name: fields.name,
                price: fields.price,
                image: image.src
            })
        }

        card.append(image, name, price, addCartBtn)
        box.append(card)
    })
}


let showNow = document.querySelector('.showNow')
let allPr = document.querySelector('.allPr')

showNow.onclick = () => {
    localStorage.setItem('from', 'showNow')
    window.location.href = '../products/products.html'
}

allPr.onclick = () => {
    localStorage.setItem('from', 'allPr')
    window.location.href = '../products/products.html'
}
