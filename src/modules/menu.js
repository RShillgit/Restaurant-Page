import blackenedCroissant from './images/blackenedCroissant.jpg'
import avocado from './images/avocado.jpg'
import burger from './images/nastyBurger.jpg'
import stew from './images/stew.jpg'
import apple from './images/trashCanApple.jpg'
import strawberry from './images/uniqueStrawberry.jpg'

export default function displayMenu(menuPage) {

    // Check to see if menu page exists
    if (menuPage === null) {

        // if it doesnt exist, then make it
        const pageContent = document.getElementById('content');

        const menuDiv = document.createElement('div');
        menuDiv.classList = 'menu';

        // 6 menu items
        for (let i = 0; i < 6; i++) {
            const menuItem = document.createElement('div');
            menuItem.classList = 'menu-item';
            
            const itemImage = document.createElement('img');
            itemImage.setAttribute('id', `img${i}`);

            const itemText = document.createElement('p');
            itemText.setAttribute('id', `p${i}`);

            menuItem.setAttribute('id', i);

            menuItem.appendChild(itemImage);
            menuItem.appendChild(itemText);
            menuDiv.appendChild(menuItem);
        }

        // Append menuDiv to the page
        pageContent.appendChild(menuDiv);

         // Customize each menu item
         let item1Image = document.getElementById('img0');
         item1Image.src = blackenedCroissant;
         let item1Text = document.getElementById('p0');
         item1Text.innerHTML = "Blackened Croissant - $8";
 
         let item2Image = document.getElementById('img1');
         item2Image.src = avocado;
         let item2Text = document.getElementById('p1');
         item2Text.innerHTML = "Freshly Rotten Avocado - $6";

         let item3Image = document.getElementById('img2');
         item3Image.src = burger;
         let item3Text = document.getElementById('p2');
         item3Text.innerHTML = "Unrecognizable Chicken Sandwitch - $12";

         let item4Image = document.getElementById('img3');
         item4Image.src = stew;
         let item4Text = document.getElementById('p3');
         item4Text.innerHTML = "Grandma's Beef Stew - $15";

         let item5Image = document.getElementById('img4');
         item5Image.src = apple;
         let item5Text = document.getElementById('p4');
         item5Text.innerHTML = "Trash Can Apple - $5";

         let item6Image = document.getElementById('img5');
         item6Image.src = strawberry;
         let item6Text = document.getElementById('p5');
         item6Text.innerHTML = "Unique Strawberry - $4";
    }
    // if it does, then simply display it
    else return menuPage.style.display = 'grid';
};