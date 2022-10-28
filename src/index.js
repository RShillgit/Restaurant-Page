import _ from 'lodash';
import './styles.css';
import displayAbout from './modules/about';
import displayMenu from './modules/menu';
import displayContact from './modules/contact';




function navigation(option) {
    // Set all option's background colors back to normal
    const allNavOptions = document.querySelectorAll('.option');
    allNavOptions.forEach(navOption => {return navOption.style.backgroundColor = '#795C34'});

    // Page elements
    const aboutPage = document.querySelector('.about');
    const menuPage = document.querySelector('.menu');
    const contactPage = document.querySelector('.contact');

    // Set all page displays to none
    if (aboutPage !== null)aboutPage.style.display = 'none';
    if (menuPage !== null) menuPage.style.display = 'none';
    if (contactPage !== null) contactPage.style.display = 'none';

    option.style.backgroundColor = '#9A7B4F';
    if (option.innerHTML === 'About') {
        // render about tab
        return displayAbout(aboutPage);
    }
    else if (option.innerHTML === 'Menu') {
        // render menu tab
        return displayMenu(menuPage);
    }
    else if (option.innerHTML === 'Contact') {
        // render contact tab
        return displayContact(contactPage); 
    }
};

window.onload = function initialPageLoad() {

    const pageContent = document.getElementById('content');

    // Header to go inside pageContent
    const header = document.createElement('div');
    header.classList = 'header';
    const pageTitle = document.createElement('p');
    pageTitle.innerHTML = 'Welcome to Awful Food';
    header.appendChild(pageTitle);

    // Nav Bar to go inside pageContent
    const navPages = ['About', 'Menu', 'Contact'];

    const navBar = document.createElement('div');
    navBar.classList = 'nav';
    
    const navBarList = document.createElement('ul');
    navPages.forEach(page => {
        
        // Create a list item displaying name of page
        const listItem = document.createElement('li');
        listItem.innerHTML = `${page}`;
        listItem.classList = 'option';
        navBarList.appendChild(listItem);

        listItem.addEventListener('click', (e) => {
            return navigation(e.target);
        });
    });

    navBar.appendChild(navBarList);

    /*
    // Render About tab
    const about = document.createElement('div');
    about.classList = 'about';
    const aboutContent = document.createElement('p');
    aboutContent.innerText = `Awful Food is a restaurant that is perfect for individuals who want to be as dissapointed as possible.  As the owner of Awful Food, I offer a full money-back guarantee if you somehow end up enjoying your meal.  Have a horrible experience!`
    about.appendChild(aboutContent);
    */

    // Append divs to content
    pageContent.appendChild(header);
    pageContent.appendChild(navBar);
    //pageContent.appendChild(about);

    return pageContent;
};


