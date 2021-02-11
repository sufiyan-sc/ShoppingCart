'use strict';

(function(){

const productList=[
    {
      id:'001',
      itemName:'Apple',
      itemImage:'../imgs/img-1.png',
      quantity:'1KG',
      priceTag:'200',
    },
    {
        id:'002',
        itemName:'Banana',
        itemImage:'../imgs/img-2.png',
        quantity:'1 Dozen',
        priceTag:'80',
      },
      {
        id:'003',
        itemName:'Grapes',
        itemImage:'../imgs/img-3.png',
        quantity:'1KG',
        priceTag:'150',
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




for(let i=0;i<3;i++){
  let selectedBtn=document.getElementById(`btn-${i}`);
  selectedBtn.addEventListener('click',function(){
    let fetchedId = this.id;
    // console.log(fetchedId);
    // console.log(document.getElementById(fetchedId));
    let child = document.getElementById(fetchedId).children[0];
    if(child.innerText==="ADD TO CART"){
      child.innerText="ADDED"
      child.parentElement.classList.toggle('added');
    }else{
      child.classList.remove('added')
      child.innerText="ADD TO CART"
      child.parentElement.classList.toggle('added');
    }
  });
}


}());