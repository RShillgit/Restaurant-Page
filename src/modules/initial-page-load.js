export default function initialPageLoad() {

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

        // Click event listener on each list item
            listItem.addEventListener('click', (e) => {
                console.log(e.target.innerHTML)
                e.target.style.backgroundColor = 'lightgray';
        });
    });
    navBar.appendChild(navBarList);

    // Render About tab
    const about = document.createElement('div');
    about.classList = 'about';
    const aboutContent = document.createElement('p');
    aboutContent.innerText = `Awful Food is a restaurant that is perfect for individuals who want to be as dissapointed as possible.  
    As the owner of Awful Food, I offer a full money-back guarantee if you somehow end up enjoying your meal.`
    about.appendChild(aboutContent);

    // Append divs to content
    pageContent.appendChild(header);
    pageContent.appendChild(navBar);
    pageContent.appendChild(about);

    return pageContent;
};
    