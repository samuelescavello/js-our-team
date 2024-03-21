let arrStudenti = [
    {
        nome : 'franco',
        cognome : 'rossi',
        etá : 20,
    },

    {
        nome : 'francesca',
        cognome : 'gallo',
        etá : 20,
    },

    {
        nome : 'luca',
        cognome : 'sasso',
        etá : 20,
    }
]

let ulEl = document.querySelector('ul')

for (let i = 0 ; i < arrStudenti.length ; i++ ){
    const liEl = document.createElement('li');
    liEl.innerHTML = 
     `
     nome: ${arrStudenti[i].nome} cognome: ${arrStudenti[i].cognome}
    ;
    `
    ulEl.appendChild(liEl)
}