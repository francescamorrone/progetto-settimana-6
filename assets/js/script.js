const lavoriContainer = document.querySelector('#lavori-container');
const darkMode = document.querySelector('#dark-mode');
const themeIcon = document.querySelector('#themeIcon');
const body = document.querySelector("body")
const buttonModal = document.querySelector('#button-modal');
const modalEl = document.querySelector('#project-modal');
const modalCloseBtn = modalEl.querySelector('#btn-close');
const contactForm = document.querySelector('#contactForm');



const progetti = [
    {
        titolo: "Villa Luce",
        categoria: "Residenziale",
        descrizione: "Residenza unifamiliare immersa nel verde con ampie vetrate a tutta altezza e tetto giardino.",
        immagine: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
        titolo: "Loft Brera",
        categoria: "Interior design",
        descrizione: "Recupero di un ex spazio industriale a Milano trasformato in abitazione e atelier fotografico.",
        immagine: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    },
    {
        titolo: "Headquarter Nexus",
        categoria: "Spazi Commerciali",
        descrizione: "Progettazione di uffici direzionali flessibili con pareti acustiche e aree lounge biofiliche.",
        immagine: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
        titolo: "Casa nel Bosco",
        categoria: "Architettura Sostenibile",
        descrizione: "Struttura in legno CLT a impatto zero, progettata secondo i criteri della bioedilizia alpina.",
        immagine: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
        titolo: "Boutique Aura",
        categoria: "Interior design",
        descrizione: "Concept store minimalista realizzato con intonaci in terra cruda, pietra naturale e ottone.",
        immagine: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80"
    },
    {
        titolo: "Palazzo Storico",
        categoria: "Ristrutturazione",
        descrizione: "Restauro conservativo e riqualificazione energetica di una dimora storica del Settecento.",
        immagine: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    }
];



function renderLavori(listaProgetti) {
    lavoriContainer.textContent = '';

    listaProgetti.forEach((progetto) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';

        const article = document.createElement('article');
        article.className = 'card project-card h-100';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'card-img-wrapper';

        const img = document.createElement('img');
        img.src = progetto.immagine;
        img.className = 'card-img-top';
        img.alt = progetto.titolo;

        imgWrapper.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const badge = document.createElement('span');
        badge.className = 'badge align-self-start mb-2 rounded-pill text-bg-primary opacity-75';
        badge.textContent = progetto.categoria;

        const title = document.createElement('h3');
        title.className = 'card-title h5';
        title.textContent = progetto.titolo;

        const desc = document.createElement('p');
        desc.className = 'card-text mb-0';
        desc.textContent = progetto.descrizione;

        cardBody.appendChild(badge);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);

        article.appendChild(imgWrapper);
        article.appendChild(cardBody);
        col.appendChild(article);

        lavoriContainer.appendChild(col);
    });
}




contactForm.addEventListener('submit', (e) => {
    e.preventDefault();    
    contactForm.reset();
});

const modalForm = document.querySelector('#modalForm');
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalCloseBtn.click();
    modalForm.reset();
});

function setTheme(dark) {
    body.classList.toggle('dark', dark);
    if(dark === true){
        body.setAttribute('data-bs-theme', 'dark')
    } else {
        body.setAttribute('data-bs-theme', 'light')
    }
}
darkMode.addEventListener('change', (e) => setTheme(e.target.checked));
renderLavori(progetti);