export default function displayAbout(aboutPage) {

    // See if about page exists
    if (aboutPage === null) {

        // If it doesnt exist, then make it
        const pageContent = document.getElementById('content');

        // Render About tab
        const about = document.createElement('div');
        about.classList = 'about';
        const aboutContent = document.createElement('p');
        aboutContent.innerText = `Awful Food is a restaurant that is perfect for individuals who want to be as dissapointed as possible.  As the owner of Awful Food, I offer a full money-back guarantee if you somehow end up enjoying your meal.  Have a horrible experience!`
        about.appendChild(aboutContent);
    
        return pageContent.appendChild(about);
    }
    // If it does exist, then simply display it
    else return aboutPage.style.display = 'flex';
};