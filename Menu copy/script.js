let btn_icone = document.getElementById("cart")
let menu_lateral = document.querySelector(".sidebar")
let seta = document.getElementById("seta-sair");

btn_icone.addEventListener("click",function abrir(){
    menu_lateral.classList.toggle("aberto");
});

seta.addEventListener("click",function abrir(){
    menu_lateral.classList.toggle("aberto");
});


const product = [
    {
        image_classe: './Assets/ferris-svgrepo-com.svg',
        title: 'Atrações',
        items: [
            {
                id: 0,
                image: './Assets/Imagens/pesca.png',
                title: 'Pescaria',
                price: 10.00,
            }
        ]
    },
    {
        image_classe: './Assets/garrafa.svg',
        title: 'Bebidas',
        items: [
            {
                id: 1,
                image: './Assets/Imagens/agua.png',
                title: 'Água',
                description: 'Com e Sem Gás',
                price: 3.00,
            },
            {
                id: 2,
                image: './Assets/bebidas.png',
                title: 'Coca-Cola',
                price: 5.00,
            },
            {
                id: 3,
                image: './Assets/Imagens/guaraná.png',
                title: 'Guaraná',
                price: 5.00,
            },
            {
                id: 4,
                image: './Assets/Imagens/laranja.png',
                title: 'Fanta',
                description: 'Laranja',
                price: 5.00,
            },
            {
                id: 5,
                image: './Assets/Imagens/suco.png',
                title: 'Suco',
                description: 'Dell Vale 290ml',
                price: 5.00,
            },
            {
                id: 6,
                image: './Assets/Imagens/heineken.png',
                title: 'Cerveja',
                description: 'Heineken 350ml',
                price: 10.00,
            },
            {
                id: 7,
                image: './Assets/Imagens/cerveka.png',
                title: 'Cerveja',
                description: 'Brahma, Skol, Amstel 269ml',
                price: 5.00,
            },
            {
                id: 8,
                image: './Assets/Imagens/chopp.png',
                title: 'Chopp',
                description: '400ml',
                price: 10.00,
            },
            // Adicione mais produtos aqui
        ]
    },
    {

        image_classe: './Assets/hot-drink-svgrepo-com.svg',
        title: 'Bebidas Quentes',
        items: [
            {
                id: 9,
                image: './Assets/Imagens/Bebidas_Quentes/quentao.png',
                title: 'Quentão',
                description: '300ml',
                price: 7.00,
            },
            {
                id: 10,
                image: './Assets/Imagens/Bebidas_Quentes/amendoin.png',
                title: 'Chá de Amendoim',
                price: 7.00,
            },
            {
                id: 11,
                image: './Assets/Imagens/Bebidas_Quentes/Chocolate quente.png',
                title: 'Chocolate Quente',
                price: 7.00,
            },
        ]
    },
    {
        image_classe: './Assets/corn-svgrepo-com.svg',
        title: 'Comidas Típicas',
        items: [
            {
                id: 12,
                image: './Assets/Imagens/Comidas_tipicas/caldo.png',
                title: 'Caldo de Feijão',
                price: 5.00,
            },
            {
                id: 13,
                image: './Assets/Imagens/Lanches/guadalupe.png',
                title: 'Pão de Guadalupe',
                price: 12.00,
            },
            {
                id: 14,
                image: './Assets/Imagens/Comidas_tipicas/espeto.png',
                title: 'Espetinho',
                price: 10.00,
            },
            {
                id: 15,
                image: './Assets/Imagens/Comidas_tipicas/milho.png',
                title: 'Milho',
                price: 5.00,
            },
            {
                id: 16,
                image: './Assets/Imagens/Comidas_tipicas/pastel.png',
                title: 'Pastel',
                price: 8.00,
            },
            {
                id: 17,
                image: './Assets/Imagens/Comidas_tipicas/pinhaO.png',
                title: 'Pinhão',
                description: 'Copo 350ml',
                price: 10.00,
            },
            {
                id: 18,
                image: './Assets/Imagens/Comidas_tipicas/mini_pizza.png',
                title: 'Mini Pizza',
                price: 10.00,
            },
        ]
    },
    {
        image_classe: './Assets/sweet-heart-svgrepo-com.svg',
        title: 'Doces',
        items: [
            {
                id: 19,
                image: './Assets/Imagens/Doces/arroz-doce.png',
                title: 'Arroz Doce',
                price: 5.00,
            },
            {
                id: 20,
                image: './Assets/Imagens/Doces/pudim.png',
                title: 'Bolo e Pudim',
                description: 'Pedaço',
                price: 6.00,
            },
            {
                id: 21,
                image: './Assets/Imagens/Doces/bolodepote.png',
                title: 'Bolo de Pote',
                price: 10.00,
            },
            {
                id: 22,
                image: './Assets/Imagens/Doces/Canjica.png',
                title: 'Canjica',
                price: 5.00,
            },
            {
                id: 23,
                image: './Assets/Imagens/Doces/churros.png',
                title: 'Churros',
                price: 13.00,
            },
            {
                id: 24,
                image: './Assets/Imagens/Doces/churros.png',
                title: 'Churros Gourmet',
                price: 20.00,
            },
            {
                id: 25,
                image: './Assets/Imagens/Doces/cocada.png',
                title: 'Cocada',
                price: 10.00,
            },
            {
                id: 26,
                image: './Assets/Imagens/Doces/crepe.png',
                title: 'Crepe Suíço',
                price: 20.00,
            },
            {
                id: 27,
                image: './Assets/Imagens/Doces/cricri.png',
                title: 'CriCri',
                price: 10.00,
            },
            {
                id: 28,
                image: './Assets/Imagens/Doces/fondue.png',
                title: 'Fondue',
                description: 'Frutas com Chocolate',
                price: 10.00,
            },
            {
                id: 29,
                image: './Assets/Imagens/Doces/maça.png',
                title: 'Maça do Amor',
                price: 8.00,
            },
            {
                id: 30,
                image: './Assets/Imagens/Doces/murango.png',
                title: 'Morango com chocolate',
                description: 'No Palito',
                price: 20.00,
            },
            {
                id: 31,
                image: './Assets/Imagens/Doces/pamonha.png',
                title: 'Pamonha',
                price: 15.00,
            },
            {
                id: 32,
                image: './Assets/Imagens/Doces/saquinho.png',
                title: 'Pipoca',
                description: 'Salgada ou Doce',
                price: 5.00,
            },
        ]
    },
    {
        image_classe: './Assets/kebab-roll-svgrepo-com.svg',
        title: 'Lanches',
        items: [
            {
                id: 33,
                image: './Assets/Imagens/Lanches/Costela.png',
                title: 'Costela no Baguete',
                price: 35.00,
            },
            {
                id: 34,
                image: './Assets/Imagens/Lanches/Choripan.png',
                title: 'Choripan Sanduíche',
                description: 'A partir das 14h',
                price: 10.00,
            },
            {
                id: 35,
                image: './Assets/Imagens/Lanches/cachorro.png',
                title: 'Cachorro Quente',
                price: 12.00,
            },
            {
                id: 36,
                image: './Assets/Imagens/Lanches/shawarma.png',
                title: 'Shawarma',
                price: 30.00,
            },
            {
                id: 37,
                image: './Assets/Imagens/Lanches/bacon2.png',
                title: 'X-Bacon',
                price: 30.00,
            },
            {
                id: 38,
                image: './Assets/Imagens/Lanches/bacon.png',
                title: 'X-Calabresa',
                price: 30.00,
            },
            {
                id: 39,
                image: './Assets/Imagens/Lanches/salada.png',
                title: 'X-Salada',
                price: 25.00,
            },
        ]
    },
    {

        image_classe: './Assets/meal-svgrepo-com.svg',
        title: 'Porções',
        items: [
            {
                id: 40,
                image: './Assets/Imagens/Porcoes/batata_frita.png',
                title: 'Batata Frita',
                price: 30.00,
            },
            {
                id: 41,
                image: './Assets/Imagens/Porcoes/Feijuca.png',
                title: 'Feijoada',
                price: 40.00,
            },
            {
                id: 42,
                image: './Assets/Imagens/Porcoes/porco.png',
                title: 'Porco a Paraguaia',
                description: 'A partir das 16h',
                price: 30.00,
            },
            {
                id: 43,
                image: './Assets/Imagens/Porcoes/torresmo.png',
                title: 'Torresmo de Rolo',
                description: 'A partir das 16h',
                price: 30.00,
            },
            {
                id: 44,
                image: './Assets/Imagens/Porcoes/~frango.png',
                title: 'Frango à passarinho',
                price: 40.00,
            },
            {
                id: 45,
                image: './Assets/Imagens/Porcoes/~frango+fritas.png',
                title: 'Frango + fritas',
                price: 50.00,
            },
            {
                id: 46,
                image: './Assets/Imagens/Porcoes/costela.png',
                title: 'Costela Defumada com Mandioca',
                price: 50.00,
            },
            {
                id: 47,
                image: './Assets/Imagens/Porcoes/lollipops.png',
                title: 'Chicken Lollipops',
                description: 'Frango Assado',
                price: 25.00,
            },
            {
                id: 48,
                image: './Assets/Imagens/Porcoes/yakissoba.png',
                title: 'Yakissoba',
                price: 30.00,
            },
            {
                id: 49,
                image: './Assets/Imagens/Porcoes/batata_chips.png',
                title: 'Batata Chips',
                description: 'Pequena',
                price: 10.00,
            },
            {
                id: 50,
                image: './Assets/Imagens/Porcoes/batata_chips.png',
                title: 'Batata Chips',
                description: 'Média',
                price: 15.00,
            },
            {
                id: 51,
                image: './Assets/Imagens/Porcoes/batata_chips.png',
                title: 'Batata Chips',
                description: 'Grande',
                price: 20.00,
            },
        ]
    },
    // Adicione mais categorias aqui
];



document.getElementById('menu-categorias').innerHTML = product.map((category, categoryIndex) => {
    const { image_classe, items, title } = category;
    return `
            <button class="btn-categorias" id="${title}">
                <img src="${image_classe}" alt="" height="45">
                <h2>${title}</h2>
                <img src="./Assets/seta-baixo.svg" alt="" height="40">
            </button>
            <div class="lista-produtos" id="lista-produtos">
                ${items.map((item, itemIndex) => {
                    const { image, title, price } = item;
                    return `
                        <div class='card_1'>
                            <img src="${image}" alt="" height="60" width="60">
                            <div class='desc-card'>
                                <h3>${title}</h3>
                                <h4>R$ ${price}.00</h4>
                                <button class="botao_tag" onclick='addtocart(${categoryIndex}, ${itemIndex})'>Adicionar a Lista</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class = "espaco">
            </div>
    `;
}).join('');

let cart = [];

function addtocart(categoryIndex, itemIndex) {
    const item = product[categoryIndex].items[itemIndex];
    cart.push({...item});
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}


function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Sua Lista está Vazia";
        document.getElementById("total").innerHTML = "R$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart_item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${item.image} height="60" width="60">
                    </div>
                    <p style='font-size:15px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>R$ ${item.price}.00</h2>
                    <i  onclick='delElement(${index})'><img src="../Assets/trash-undo-alt-svgrepo-com.svg" alt="" height="30"></i>
                </div>
            `;
        }).join('');
        document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);
    }
}
