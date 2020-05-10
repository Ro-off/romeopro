let howManyWeHave = 43; //Колличество товара на складе
let goodsNames = [
  ['Роза',        200,  'rose'    ],
  ['Пиво',        300,  'beer'    ],
  ['Гамбургер',   275,  'burger'  ],
  ['Гамбургер',   75,  'burger'  ],
  ['Пиво',        300,   'beer'   ],
];

var activePrice = 0;
var activeID = '';



sortArr(goodsNames);


function makeVisibleButton() {
  document.getElementById('MotherBuyButton').style.opacity = '1';
  document.getElementById('MotherBuyButton').style.transform = 'scale(1)';
  document.getElementById('buyButton').onclick =
  function(){alert(`Покупка ${activeID}, в колличестве ${document.getElementById('typeNum').value}, за ${document.getElementById('showPrice').textContent}`)};
}

function makeInVisibleButton() {
  document.getElementById('MotherBuyButton').style.opacity = '0';
  document.getElementById('MotherBuyButton').style.transform = 'scale(0.9)';
}

function makeBuyingActive(id, price) {
  makeVisibleButton();
   activePrice = price;
   activeID = id;
   typeNumCheck();
}



function pasteGood(name, price, id){
  document.getElementsByClassName('goods')[0].innerHTML +=
  `<div onclick=" makeBuyingActive('${id}', ${price})"><p id="good">${name}</p> <p id="price">${price}$</p></div>`;
}

function sortArr(Arr){
  for(let i = 0; i <= Arr.length; i-=-1){
    pasteGood(Arr[i][0], Arr[i][1], Arr[i][2]);
  }
}


function typeNumCheck() {
  let input = document.getElementById('typeNum');





input.value = (input.value > howManyWeHave)?
  howManyWeHave : input.value;

input.value = (input.value > 99)?
  99 : input.value;

input.value = (input.value == '')?
  1 : input.value;

  input.value = Number(input.value);

  input.value = (isNaN(input.value))?
    1 : input.value;

  let showPrice = document.getElementById('showPrice');
  showPrice.textContent = activePrice * input.value;

}
