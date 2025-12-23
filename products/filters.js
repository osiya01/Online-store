import { get } from '../products/product.js'

let allProducts = []

export function initFilters(data) {
    allProducts = data

    get(allProducts)

    companyFilter()
    priceFilter()
    searchFilter()
}

function companyFilter() {
    let links = document.querySelectorAll('.filter a')

    links.forEach(link => {
        link.onclick = function (e) {
            e.preventDefault()

            let company = link.innerText.toLowerCase()
            let result = []

            if (company === 'all') {
                result = allProducts
            } else {
                allProducts.forEach(item => {
                    if (item.fields.company === company) {
                        result.push(item)
                    }
                })
            }

            get(result)
        }
        console.log(link.innerText.toLowerCase());
    })
    
}

function priceFilter() {
    let range = document.querySelector('.range')
    let value = document.querySelector('.value')

    range.oninput = function () {
        value.innerText = 'Value : $' + range.value

        let result = []

        allProducts.forEach(item => {
            if (item.fields.price <= range.value) {
                result.push(item)
            }
        })

        get(result)
    }
}

function searchFilter() {
    let search = document.querySelector('.search')

    search.oninput = function () {
        let text = search.value.toLowerCase()
        let result = []

        allProducts.forEach(item => {
            if (item.fields.name.toLowerCase().includes(text)) {
                result.push(item)
            }
        })

        get(result)
    }
}
