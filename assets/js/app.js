const products = [
    {
        "id": "product_1",
        "img": "./assets/img/featured/featured-1.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all"
    },
    {
        "id": "product_2",
        "img": "./assets/img/featured/featured-2.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all HTMLDesign Blogging UITemplates"
    },
    {
        "id": "product_3",
        "img": "./assets/img/featured/featured-3.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all UITemplates eCommerce CMSThemes"
    },
    {
        "id": "product_4",
        "img": "./assets/img/featured/featured-1.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all HTMLDesign UITemplates eCommerce"
    },
    {
        "id": "product_5",
        "img": "./assets/img/featured/featured-2.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all UITemplates eCommerce CMSThemes"
    },
    {
        "id": "product_6",
        "img": "./assets/img/featured/featured-3.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all HTMLDesign UITemplates CMSThemes"
    },
    {
        "id": "product_7",
        "img": "./assets/img/featured/featured-1.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all Blogging UITemplates CMSThemes"
    },
    {
        "id": "product_8",
        "img": "./assets/img/featured/featured-2.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all Blogging WPThemes"
    },
    {
        "id": "product_9",
        "img": "./assets/img/featured/featured-3.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all CMSThemes Blogging WPThemes"
    },
    {
        "id": "product_10",
        "img": "./assets/img/featured/featured-1.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all CMSThemes"
    },
    {
        "id": "product_11",
        "img": "./assets/img/featured/featured-2.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all CMSThemes WPThemes"
    },
    {
        "id": "product_12",
        "img": "./assets/img/featured/featured-3.png",
        "title": "Hazel - Clean Minimalist Multi-Pu...",
        "cost": "$50",
        "sale-count": "258 Sale",
        "category": "all CMSThemes WPThemes"
    }
]



const headerBurger = document.querySelector(".header__burger");
const headerContent = document.querySelector(".header__content");
const headerBtnLink = document.querySelector(".header__btn-link");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active")
    headerContent.classList.toggle("active")
})
headerBtnLink.addEventListener("click", () => {
    headerBurger.classList.remove("active")
    headerContent.classList.remove("active")
})

let categoriesDropdown = document.querySelector('.header__categories')

categoriesDropdown.addEventListener('click', () => {
    let arrow = document.querySelector('.arrow')
    let categoriesList = document.querySelector('.categories-dropdown-list')
    let categoriesItem = document.querySelectorAll('.categories-dropdown-item')

    arrow.classList.toggle('arrow-clicked')
    categoriesList.classList.toggle('categories-dropdown-list-open')

    categoriesItem.forEach((item) => {
        item.addEventListener('click', () => {
            categoriesItem.forEach((item) => {
                item.classList.remove('categories-dropdown-item-selected')
            })
            item.classList.add('categories-dropdown-item-selected')
        })
    })
})

const shoppingCart = document.querySelector('#shopping_cart')
const cartWrapper = document.querySelector('.cartWrapper')
const cartClose = document.querySelector('#cart_close')

shoppingCart.addEventListener('click', () => {
    cartWrapper.classList.add('active')
})
cartClose.addEventListener('click', () => {
    cartWrapper.classList.remove('active')
})

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }


window.addEventListener('load', ready)
function ready() {
    const removeCartBtns = document.querySelectorAll('.cart__remove')
    const quantityInputs = document.querySelectorAll('.cart__quantity')
    // const addCart = document.getElementsByClassName('add-basket')

    removeCartBtns.forEach((el) => {
        el.addEventListener('click', removeCartItems)
    })
    quantityInputs.forEach((el) => {
        el.addEventListener('change', quantityChanged)
    })
    // for (let i = 0; i < addCart.length; i++) {
    //     const btn = addCart[i]  
    //     btn.addEventListener('click', addCartClicked)     
    // }
}

function removeCartItems(ev) {
    ev.target.parentElement.remove()
    updateTotal()
}

function quantityChanged(ev) {
    if (isNaN(ev.target.value) || ev.target.value <= 0) {
        ev.target.value = 1
    }
    updateTotal()
}

// function addCartClicked(ev) {
//     const productItems = ev.target.parentElement.parentElement.parentElement
//     console.log(productItems)
// }


function updateTotal() {
    let cartContent = document.getElementsByClassName('cart__content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart__box')
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox = cartBoxes[i]
        const priceElement = cartBox.getElementsByClassName('cart__product-price')[0]
        const quantityElement = cartBox.getElementsByClassName('cart__quantity')[0]
        const price = parseFloat(priceElement.innerText.replace('$', ''))
        const quantity = quantityElement.value
        total = total + (price * quantity)
        total = Math.round(total * 100) / 100

        document.getElementsByClassName('cart__total-price')[0].innerText = '$' + total
    }
}



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})


const viewAllProducts = document.getElementById('viewAllProducts')
const viewAllCheckOut = document.getElementById('viewAllCheckOut')

const featuredWrapper = document.getElementById('featuredWrapper')
const checkOutWrapper = document.getElementById('checkOutWrapper')

function productComponent(data) {
    featuredWrapper.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="featuredItem mb-4">
            <div class="featuredItem__img">
                <img src=${data.img} alt="">

                <div class="featuredItem__preview">
                    <a href="#!" class="preview" data-bs-toggle="modal" data-bs-target="#${data.id}">
                        Preview
                    </a>
                    <a href="#!" class="add-basket">
                        <i class="bi bi-cart-check-fill"></i>
                    </a>
                </div>
            </div>

            <h4 class="featuredItem__title">${data.title}</h4>

            <div class="featuredItem__sale">
                <span class="featuredItem__sale-cost">${data.cost}</span>
                <span class="featuredItem__sale-count">${data['sale-count']}</span>
            </div>
        </div>
    </div>

    <div class="modal fade" id="${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${data.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="featuredItem__img">
                        <img src=${data.img} alt="">
                    </div>

                    <div class="featuredItem__sale">
                        <span class="featuredItem__sale-cost">${data.cost}</span>
                        <span class="featuredItem__sale-count">${data['sale-count']}</span>
                    </div>

                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores molestias. Laudantium temporibus quam eius blanditiis minima nostrum reprehenderit ducimus.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn close-btn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
}

function checkOutComponent(data) {
    checkOutWrapper.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 checkOutItems ${data.category}">
        <div class="featuredItem mb-4">
            <div class="featuredItem__img">
                <img src=${data.img} alt="">

                <div class="featuredItem__preview">
                    <a href="#!" class="preview" data-bs-toggle="modal" data-bs-target="#${data.id}">
                        Preview
                    </a>
                    <a href="#!" class="add-basket">
                        <i class="bi bi-cart-check-fill"></i>
                    </a>
                </div>
            </div>

            <h4 class="featuredItem__title">${data.title}</h4>

            <div class="featuredItem__sale">
                <span class="featuredItem__sale-cost">${data.cost}</span>
                <span class="featuredItem__sale-count">${data['sale-count']}</span>
            </div>
        </div>
    </div>

    <div class="modal fade" id="${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${data.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="featuredItem__img">
                        <img src=${data.img} alt="">
                    </div>

                    <div class="featuredItem__sale">
                        <span class="featuredItem__sale-cost">${data.cost}</span>
                        <span class="featuredItem__sale-count">${data['sale-count']}</span>
                    </div>

                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores molestias. Laudantium temporibus quam eius blanditiis minima nostrum reprehenderit ducimus.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn close-btn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
}

function addProductsToLocalStorage() {
    let response
    if (!localStorage.getItem('products')) {
        response = localStorage.setItem('products', JSON.stringify(products))
    }
    return response
}

window.addEventListener('load', () => {
    addProductsToLocalStorage()
    const response = JSON.parse(localStorage.getItem('products'))
    response.slice(0, 3).map((data) => productComponent(data))
    response.slice(0, 8).map((data) => checkOutComponent(data))

})

function viewAllProductsFunc(wrapper, component) {
    wrapper.innerHTML = ''
    const response = JSON.parse(localStorage.getItem('products'))
    response.map((data) => component(data))
}

viewAllProducts.addEventListener('click', (e) => {
    e.preventDefault()
    viewAllProductsFunc(featuredWrapper, productComponent)
})

viewAllCheckOut.addEventListener('click', (e) => {
    e.preventDefault()
    viewAllProductsFunc(checkOutWrapper, checkOutComponent)
})

const checkOutLinks = document.querySelectorAll('.checkOut__link')
checkOutLinks.forEach((el) => {
    el.addEventListener('click', function () {
        checkOutLinks.forEach((el) => el.classList.remove('active'))
        this.classList.add('active')
    })
})

function openProducts(productName) {
    const productsItem = document.querySelectorAll(".checkOutItems")
    productsItem.forEach((el) => el.style.display = "none")
    document.querySelectorAll(`.${productName}`).forEach((el) => el.style.display = "block")
}

const copyright = document.getElementById('copyright_date')
copyright.innerHTML += new Date().getFullYear()