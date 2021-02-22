'use strict';

(function(){

const productList=[
    {
      id:'001',
      itemName:'Apple',
      itemImage:'./imgs/img-1.png',
      quantity:'1KG',
      priceTag:'₹200',
    },
    {
        id:'002',
        itemName:'Banana',
        itemImage:'./imgs/img-2.png',
        quantity:'1 Dozen',
        priceTag:'₹80',
      },
      {
        id:'003',
        itemName:'Grapes',
        itemImage:'./imgs/img-3.png',
        quantity:'1KG',
        priceTag:'₹150',
      }
]



function create(){
    const mainContainer= document.createElement('div');
    mainContainer.id="main-container";
    document.body.appendChild(mainContainer);

    for(let i=0;i<3;i++){
        let productContainer=document.createElement('div');
        productContainer.className="product-container";
        mainContainer.appendChild(productContainer);

        let imageContainer=document.createElement('img');
        imageContainer.className="image-container";
        productContainer.appendChild(imageContainer);
        imageContainer.src=productList[i].itemImage;

        let productName=document.createElement('h3');
        productName.className="product-title";
        productContainer.appendChild(productName);
        
        let item = productList[i].itemName;
        productName.innerText=item;

        let flexContainer=document.createElement('div');   
        flexContainer.className="flex-container";
        productContainer.appendChild(flexContainer);

        let quantityContainer=document.createElement('div');
        quantityContainer.className="quantity";
        flexContainer.appendChild(quantityContainer);
        let quantity = productList[i].quantity;
        quantityContainer.innerText=quantity;


        let priceContainer=document.createElement('div');
        priceContainer.className="price";
        flexContainer.appendChild(priceContainer);
        let price = productList[i].priceTag;
        priceContainer.innerText=price;

        let buttonContainer=document.createElement('button');
        buttonContainer.className="add-btn"
        buttonContainer.id=`btn-${i}`;
        productContainer.appendChild(buttonContainer);
        let btnLabel=document.createElement('p');
        btnLabel.className="label";
        btnLabel.innerText='ADD TO CART';
        buttonContainer.appendChild(btnLabel);
    }
}
create();


// adding items to cart
// for(let i=0;i<3;i++){
//   let selectedBtn=document.getElementById(`btn-${i}`);
//   selectedBtn.addEventListener('click',function(){
//     let fetchedId = this.id;
//     console.log(fetchedId);
//     console.log(document.getElementById(fetchedId));
//     let child = document.getElementById(fetchedId).children[0];
//     if(child.innerText==="ADD TO CART"){
//       child.innerText="ADDED"
//       child.parentElement.classList.toggle('added');
//     }else{
//       child.classList.remove('added')
//       child.innerText="ADD TO CART"
//       child.parentElement.classList.toggle('added');
//     }
//   });
// }

// CART CAONTAINER


let cartContainer = document.createElement("div");
document.body.appendChild(cartContainer);
cartContainer.className = "cart-container";

let totalAmtContainer = document.createElement("div");
totalAmtContainer.setAttribute(
  "style",
  "display:flex;position:absolute;bottom:1rem;right:1rem;padding:0.5rem"
);
cartContainer.appendChild(totalAmtContainer);

let totalAmtLabel = document.createElement("p");
totalAmtLabel.innerText = "Total:";

let totalAmt = document.createElement("p");
totalAmt.className = "total-price";
totalAmt.innerText = " ₹ 0";
totalAmtContainer.appendChild(totalAmtLabel);
totalAmtContainer.appendChild(totalAmt);

let selectedBtnEl = document.querySelectorAll('.add-btn');
for(let i=0;i<selectedBtnEl.length;i++){
  let selectedBtn = selectedBtnEl[i];
  selectedBtn.addEventListener('click',addToCart);
}

function addToCart(event){
let btn = event.target;
let parentEl = btn.parentElement.parentElement;
let img = parentEl.querySelector('.image-container').src;
let title = parentEl.querySelector('.product-title').innerText;
let priceEl = parentEl.querySelector('.price').innerText;
addItemsToCart(img,title,priceEl);
}



function addItemsToCart(img,title,price){

  let itemContainer = document.createElement("div");
  itemContainer.className = "item-container";
  cartContainer.appendChild(itemContainer);

  let productImg = document.createElement("img");
  productImg.className = "product-img";
  productImg.src=img;
  itemContainer.appendChild(productImg);

  let productName = document.createElement("p");
  productName.className = "product-name";
  let item = title;
  productName.innerText =  item;
  itemContainer.appendChild(productName);

  let productPrice = document.createElement("p");
  productPrice.className = "product-price";
  price = price;
  productPrice.innerText = price;
  itemContainer.appendChild(productPrice);

  let counter = document.createElement("input");
  counter.setAttribute("type", "number");
  counter.setAttribute("value", "2");
  counter.className = "counter";
  itemContainer.appendChild(counter);

  let removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerText = "Remove";
  itemContainer.appendChild(removeBtn);

  // to remove items from the cart
  removeBtn.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    cartTotal()
  });

 
  let selectedItemContainer = document.querySelectorAll('.item-container');
  for(let i=0;i<selectedItemContainer.length;i++){
  let productTitle = selectedItemContainer[i].querySelector('.product-name');
  let selectedProductTitle = productTitle.innerText;
  if(title==selectedProductTitle){
    return
  }

}

// to update total amount

  let counterEl = document.querySelectorAll('.counter');
  for(let i=0;i<counterEl.length;i++){
    let input = counterEl[i].addEventListener('change',quantity);
  } 

  function quantity(event){
    let input = event.target;
    if(isNaN(input.value) || input.value<=0){
      input.value=1;
    }
    cartTotal();
  }

function cartTotal(){
let cartItemEl=document.querySelectorAll('.item-container');
let total = 0;
for(let i=0;i<cartItemEl.length;i++){
   let price = parseInt(cartItemEl[i].querySelector('.product-price').innerText.replace('₹',''));
   let quantity = parseInt(cartItemEl[i].querySelector('.counter').value);
   total = total+(price*quantity);
}
let totalAmtEl=document.querySelector('.total-price');
totalAmt.innerText=` ₹ ${total}`;
 }
cartTotal();
}

}());