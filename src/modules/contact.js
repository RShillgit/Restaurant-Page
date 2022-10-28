export default function displayContact(contactPage) {

    // See if contact page exists
    if (contactPage === null) {
        
        // If it doesnt exist, then make it
        const pageContent = document.getElementById('content');

        // Create contact page
        const contactDiv = document.createElement('div');
        contactDiv.classList = 'contact';
    
        // Page discription
        const discription = document.createElement('p');
        discription.innerHTML = "Welcome to our contact page.  Ask us anything you'd like.";
        contactDiv.appendChild(discription);
    
        // Phone Numbers
        const phoneNumbers = document.createElement('p');
        phoneNumbers.innerHTML = "Phone Number: 555-555-5555"
        contactDiv.appendChild(phoneNumbers);
    
        // Email
        const email = document.createElement('p');
        email.innerHTML = "Email: AwfulFood@dissapointment.com";
        contactDiv.appendChild(email);
    
        return pageContent.appendChild(contactDiv);
    }
    // If it does exist, then simply display it
    else return contactPage.style.display = 'flex';


    
};