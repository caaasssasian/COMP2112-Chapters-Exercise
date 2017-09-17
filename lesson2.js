// 3. CHANGE BOOK TITLE
let h1 = document.querySelector('.item-page__main-title');
h1.textContent
h1.textContent = "COMP 2112"

// 4. CHANGE BOOK IMAGE
let img = document.querySelector('.product-image__image--single');
img.src = "http://via.placeholder.com/350x150";
img.setAttribute('title', 'placeholder 350x150');

// 5. CHANGE NAVIGATION TITLES
let navTitles = ['bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon'];
let titles = Array.from(document.querySelectorAll('.top-nav__list-item'));
titles.map ( (title, index) => title.textContent = navTitles[index]);

// 6. CHANGE LOGO
let parent = document.querySelector('.indigo-logo');
let oldImg = document.querySelector('svg[xmlns="http://www.w3.org/2000/svg"]');
let newImg = document.createElement('img');
newImg.src = "http://cdn-8-theme.designhill.com/images/infographic/twitter_new.png";
parent.replaceChild(newImg, oldImg);

// 7. TEMPLATE LITERAL INNERHTML
let course = {'name':'comp2112', 'language':'js'};

let div = document.querySelector('.product-details__purchase-info-container');

function render(obj) {
    let snippet = `
    	<ul>
    		<li>${obj.name}</li>
    		<li>${obj.language}</li>
    	</ul>
    `;
    return snippet;
}

div.innerHTML = render(course);

// 8. TEMPLATE LITERAL ARRAY OF OBJECTS
let course = [{'name':'comp2112', 'language':'js'},
{'name':'comp2081', 'language':'html&css'}];

let div2 = document.querySelector('.product-details__purchase-info-container');

function render(obj) {
    let snippet = `
        <ul>
            <li>${obj.name}</li>
    		<li>${obj.language}</li>
        </ul>
    `;
    return snippet;
}

div2.innerHTML = render(course[0]);
div2.innerHTML = render(course[1]);

// 9. CHANGE AUTHOR'S NAME LINK TO GEORGIAN COLLEGE LINK
let link = document.querySelector('.item-contributor__link');
link.textContent = "Georgian College";
link.href = "http://www.georgiancollege.ca/";

// 10. ERASING BODY OF PAGE WITH 'ADD TO CART' BOTTON
let button = document.getElementById('add-to-cart-button');
button.addEventListener('click', function() {
    document.documentElement.innerHTML = '';
});