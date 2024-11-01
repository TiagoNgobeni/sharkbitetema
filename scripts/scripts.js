// Load featured products dynamically
fetch('data/product.json')
.then(response => response.json())
.then(data => {
    let featuredProducts = document.getElementById('featured-products');
    let productList = document.getElementById('product-list');
    
    data.products.forEach(product => {
        let productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
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

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment the slide index, or reset to 1 if it's greater than the number of slides
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Show the current slide
    slides[slideIndex-1].style.display = "block";  

    // Change the slide every 3 seconds
    setTimeout(showSlides, 3000); // 3000 milliseconds = 3 seconds
}

        // Add this JavaScript code for the animations
        function reveal() {
            let heroContent = document.querySelector('.hero-content');
            let serviceCards = document.querySelector('.service-cards');
            let fadeInElements = document.querySelectorAll('.fade-in');

            heroContent.classList.add('show');
            serviceCards.classList.add('show');

            fadeInElements.forEach(element => {
                element.classList.add('show');
            });
        }

        window.addEventListener('load', reveal);