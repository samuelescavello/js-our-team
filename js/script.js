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

let ulEl = document.querySelector('.ss-card')

for (let i = 0 ; i < arrStudenti.length ; i++ ){
    const liEl = document.createElement('div');
    liEl.classList.add('card', 'mt-4', 'mb-2', 'ms-3')
    liEl.innerHTML =`
    <img src="img/${arrStudenti[i].foto}">
    <div class="card-body">
    <p class="text-center">
    nome: ${arrStudenti[i].nome} cognome: ${arrStudenti[i].cognome} <br>
    ruolo: ${arrStudenti[i].ruolo}
    </p>
    </div>
    `  
    ulEl.appendChild(liEl)
}
