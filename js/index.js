const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])






// navbar

let aTagText = document.querySelectorAll('nav a'); // selects all the anchor tags in nav

aTagText.forEach((element, index) => { // for each array element aka the the anchor links ....)
  return element.innerHTML = siteContent.nav[`nav-item-${index + 1}`]; // add the nav-item-(#) --> index (The index of the current element being processed in the array.) + 1
})

// navbar text to green

aTagText.forEach((element) => { // for each array element ^^ add the style of green
  return element.style.color = 'green';
})


let domINATOR = document.createElement("a"); // creating an anchor element
let domINATORText = document.createTextNode("domINATOR"); // creating a text for the anchor element
domINATOR.prepend(domINATORText); // insert this element at the beginning (can't really go anywhere since its text inside anchor tag) 
domINATOR.style.color = "red"; // style
domINATOR.href = "www.google.com"; // attribute
domINATOR.style.fontWeight = "900"; // style

document.querySelector("nav").appendChild(domINATOR); // we can use prepend to push it to the start of the nav, or appendChild (a DOM method) to push it to the back.

// cta 

let ctaSection = document.querySelector('.cta'); // selecting 
ctaSection.style.margin = "5rem";


let ctaH1 = document.querySelector('.cta-text h1'); // selecting 
siteContent.cta.h1 = siteContent.cta.h1.split(" ").join("<br>"); // splitting a string into an array of substrings, and then using linke break
ctaH1.innerHTML = siteContent.cta.h1;

let ctaBtn = document.querySelector(".cta-text button"); // selecting 
ctaBtn.innerHTML = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img'); // selecting 
ctaImg.src = siteContent.cta["img-src"];

// main content-top

let topHead = document.querySelectorAll(".top-content h4"); // selecting 
topHead[0].innerHTML = siteContent["main-content"]["features-h4"];
topHead[1].innerHTML = siteContent["main-content"]["about-h4"];

let topHeadText = document.querySelectorAll(".top-content p"); // selecting 
topHeadText[0].innerHTML = siteContent["main-content"]["features-content"];
topHeadText[1].innerHTML = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// main-content-bottom

let botHead = document.querySelectorAll(".bottom-content h4"); // selecting 
botHead[0].innerHTML = siteContent["main-content"]["services-h4"];
botHead[1].innerHTML = siteContent["main-content"]["product-h4"];
botHead[2].innerHTML = siteContent["main-content"]["vision-h4"];

let botHeadText = document.querySelectorAll(".bottom-content p"); // selecting 
botHeadText[0].innerHTML = siteContent["main-content"]["services-content"];
botHeadText[1].innerHTML = siteContent["main-content"]["about-content"];
botHeadText[2].innerHTML = siteContent["main-content"]["vision-content"];

// contact + copyright

let contactHead = document.querySelector(".contact h4"); // selecting 
contactHead.innerHTML = siteContent.contact["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p"); // selecting 
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;

document.querySelector("footer p").innerHTML = siteContent.footer.copyright;