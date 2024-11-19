const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100)
});

let menu = document.querySelector('.bx');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Load featured products dynamically
fetch('data/product.json')
.then(response => response.json())
.then(data => {
    let featuredProducts = document.getElementById('featured-products');
    let productList = document.getElementById('product-list');
    
    data.products.forEach(product => {
        let productHTML = `
            <div class="product">
            <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <h1>${product.price}</h1>
            </div>
        `;
        
        if (featuredProducts) {
            featuredProducts.innerHTML += productHTML;
        }

        if (productList) {
            productList.innerHTML += productHTML;
        }
    });
})
.catch(error => console.log('Error loading products: ', error));