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
const sectionsList = Array.from(document.querySelectorAll('section'));
const menuList = document.getElementById('navbar__list');
const sectionsNumber = sectionsList.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/** Create Nav menu List items  **/
var createNavMenuList = () => {
    for (section of sectionsList) {

        /* Get the name of the section */
        sectionName = section.getAttribute('data-nav');

        /* Get the link of the section */
        sectionId = section.getAttribute('id');

        item = document.createElement('li');

        /* Adding the link to the item of the menu */
        item.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;

        /* Add this item to the Menu List*/
        menuList.appendChild(item);
    }
}

/* Get the position of the section method */
var GetTheSectionPosition = (element) => {
    let elementPos = element.getBoundingClientRect();
    return (elementPos.top >= 0);
}

/* Change Section state method */
var ChangeActiveState = () => {
    for (section of sectionsList) {
        GetTheSectionPosition(section) ?
            setSectionActive(section) : setSectionInactive(section);
    }
}

/* Set menu item active method */
//var setNavMenuItemActive(item)

/* Set menu item inactive method*/

/* Set Section to active method */
var setSectionActive = (currenctSection) => {
    /* Set all sections to Inactive */
    for (section of sectionsList) {
        setSectionInactive(section);
    }

    // //Add Link Active
    // document.querySelector('.link__active') ?
    //     document.querySelector('.link__active').classList.remove('link__active') : null;
    // document.querySelector(`[href="#${currenctSection.sectionId}"]`) ?
    //     document.querySelector(`[href="#${currenctSection.sectionId}"]`).classList.add('link__active') : null;

    /* Set the current section to active */
    return !currenctSection.classList.contains('your-active-class') ?
        currenctSection.classList.add('your-active-class') : null;
}

/* Set Section to Inactive method */
var setSectionInactive = (element) => {
    if (element.classList.contains('your-active-class')) {
        console.log("Hi");
        element.classList.remove('your-active-class');
    }
}


/* Init method */
var pageInit = () => {

        /* Add this listener to detect scrolling event */
        document.addEventListener('scroll', ChangeActiveState());

        /* Create Nav menu items */
        createNavMenuList();

        /* Set first section to Active */
        setSectionActive(sectionsList[0]);

    }
    /**
     * End Helper Functions
     * Begin Main Functions
     * 
     */




pageInit();

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active