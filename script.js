let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];



let divListFrmes = document.querySelector(".paintings");
let divActionFigures = document.querySelector(".actionFigures");

let sectionListFrmes = document.createElement("section");
let sectionlistFigures = document.createElement("section");

let titleFrmes = document.createElement('span');
let titleFigures = document.createElement('span');

let listFrames = document.createElement("ul");
let listFigures = document.createElement("ul");

divListFrmes.appendChild(titleFrmes);
divActionFigures.appendChild(titleFigures);

divListFrmes.appendChild(sectionListFrmes);
divActionFigures.appendChild(sectionlistFigures);

sectionListFrmes.appendChild(listFrames);
sectionlistFigures.appendChild(listFigures);

titleFrmes.innerText = 'Paintings';
titleFigures.innerText = 'Action Figures'


function createProductCard(product) {
    let productCard = document.createElement("li");
    let imageCard = document.createElement("img");
    let nameCard = document.createElement("h2");
    let priceCard = document.createElement("p");

    imageCard.src = product.image;
    nameCard.innerText = product.name;
    priceCard.innerText = product.price;
    
    productCard.id = product.name;
    
    productCard.className = "product-card";
    imageCard.className = "image-card"

    productCard.appendChild(imageCard);
    productCard.appendChild(nameCard);
    productCard.appendChild(priceCard);

    return productCard;

}

function listProduct (array, type, loja){

    for (let i = 0; i < array.length; i++){
        if (array[i].type == type) {
            let result = createProductCard(array[i])
        loja.appendChild(result);
        }
    }
}

listProduct(itens, 'Painting', listFrames );
listProduct(itens, 'Action Figures', listFigures );




