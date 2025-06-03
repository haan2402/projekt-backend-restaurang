//javascript för meny sidan
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    getData();
});

//funktion för att hämta in mitt API och sedan skriva ut i DOM
async function getData() {
    try {
        const response = await fetch("projekt-backend-databas-production.up.railway.app/api/foodItems", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response) {
            throw new Error('Problem med att ansluta...');
        }

        const data = await response.json();
        writeMenu(data);
    } catch (error) {
        console.error("Fel vid anslutning - försök igen om en stund", error);
    }
}

//funktion för att skriva ut förrätt, varmrätt och efterrätt på rätt ställe
function writeMenu(menu) {
    menu.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('meny-item'); //lägger till en klass för styling av en rätt

        li.innerHTML = `
        <div class="dish-info">
        <div class="dish-top">
        <h3 class="dish-name">${item.name}</h3>
        <span class="dish-price">${item.price} kr</span>
        </div>
        <p class="dish-desc">${item.description}</p>
        </div>
        `;

        //kontroll i vilet fält maträtten ska skrivas ut efter kategori
        if(item.category === 'Förrätt') {
            document.querySelector('#starter .meny-list').appendChild(li);
        } else if (item.category === 'Varmrätt') {
            document.querySelector('#main-course .meny-list').appendChild(li);
        } else if (item.category === 'Efterrätt') {
            document.querySelector('#dessert .meny-list').appendChild(li);
        }
    });
}

//eventlyssnare för knapp på startsida, så när man klickar kommer man till meny sidan
document.getElementById('meny-button').addEventListener('click', () => {
        window.location.href = 'meny.html';
    });
