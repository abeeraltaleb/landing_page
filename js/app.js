/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const nav =document.getElementById('navbar__list');
const sections =document.querySelectorAll('Section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const navbuilder =() =>{
  let navUl='';
  sections.forEach(section =>{
const SID =section.id;
const DNAV=section.dataset.nav;

navUl +=`<li><a class="menu__link" href="#${SID}">${DNAV}</a></li> `

});
nav.innerHTML=navUl;

}

navbuilder();

// Add class 'active' to section when near top of viewport
const offest =(section) => {
  return Math.floor(section.getBoundingClientRect.top);
};
//remove-active-class
const remobeActive =(section) =>{
  section.classList.remove('your-active-class');
};

//add-active-class
const add =(codeitional,section) =>{
  if(conditional){
  section.classList.add('your-active-class')
};
};

// Scroll to anchor ID using scrollTO event
const Acticvstion =()=>{
  section.forEach(section =>{
    const elementoffset= offset(section);
    inviewport =() => elementoffset<150 &&elementoffset>=150;
    removeActive(section);
    addA(isInViewport(),section)
  });
};


window.addEventListener('scoll,Acticvstion');


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
const scolling = () =>{
  const links = document.querySelectorAll('navbar__menu');
  links.forEach(link =>{
    link.addEventListener('click',() =>{
      for(i=0;i<sections;i++){
        sections[i].addEventListener("click",sectionScoll(link));
      }
    })
  })
};

scolling();




// Set sections as active
