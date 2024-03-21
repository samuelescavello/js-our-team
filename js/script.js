let arrStudenti = [
    {
        nome : 'Wayne',
        cognome : 'Barnett',
        ruolo : 'Founder & CEO', 
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome : 'Angela',
        cognome : 'Caroll',
        ruolo : 'Chief Editor', 
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome : 'Walter',
        cognome : 'Gordon',
        ruolo : 'Office Manager', 
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome : 'fAngela',
        cognome : 'Lopez',
        ruolo : 'Social Media Manager', 
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome : 'Scott',
        cognome : 'Estrada',
        ruolo : 'Developer', 
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome : 'Barbara',
        cognome : 'Ramos',
        ruolo : 'Graphic Designer', 
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
]

let ulEl = document.querySelector('ul')

for (let i = 0 ; i < arrStudenti.length ; i++ ){
    const liEl = document.createElement('li');
    liEl.innerHTML = 
     `
     nome: ${arrStudenti[i].nome} cognome: ${arrStudenti[i].cognome}
     ruolo: ${arrStudenti[i].ruolo} <img src="img/${arrStudenti[i].foto}">
    ;
    `
    ulEl.appendChild(liEl)
}