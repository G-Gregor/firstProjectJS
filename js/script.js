const prod = {
    "11111" : {
      "nameProduct" : "Heart rate monitor Polar FT1",
      "priceProduct" :50,
      "quantity" : 3
    },
    "11112" : {
        "nameProduct" : "Heart rate monitor Polar FT2",
        "priceProduct" :755,
        "quantity" : 7
      },
    "11113" : {
        "nameProduct" : "Heart rate monitor Polar FT3",
        "priceProduct" : 500,
        "quantity" : 5
      },
      "11114" : {
        "nameProduct" : "Heart rate monitor Polar FT4",
        "priceProduct" : 150,
        "quantity" : 9
      },
      "11115" : {
        "nameProduct" : "Heart rate monitor Polar FT5",
        "priceProduct" : 245,
        "quantity" : 4
      },
      "11116" : {
        "nameProduct" : "Heart rate monitor Polar FT6",
        "priceProduct" : 890,
        "quantity" : 3
      }
  };
const openSign = document.querySelector('.sign'),
      closeBtn = document.querySelectorAll('[data-close]'),
      modalSign = document.querySelector('.modal__sign'),
      openModalCart = document.querySelector('.cart'),
      cartDropDown = document.querySelector('.cart__dropdown');

 function openModalSign () {
    modalSign.classList.remove('hide');
     modalSign.classList.add('show');
    // document.body.style.overflow = 'hidden'; 
 }

 openSign.addEventListener('click', openModalSign);

function closeModal() {
    modalSign.classList.add('hide');
    modalSign.classList.remove ('show');
    document.body.style.overflow = '';
}

closeBtn.forEach((close) => {
    close.addEventListener('click', closeModal);
});

modalSign.addEventListener('click', (e) =>{
        if (e.target === modalSign){
            closeModal(); 
        }
    });

function openCart() {
    cartDropDown.classList.toggle('hide'); 
    // document.body.style.overflow = 'hidden';
    }

openModalCart.addEventListener('click', openCart);

const modalBtn = document.querySelector('.modals__btn');
function signIn(){
    let name = document.querySelector('.modal__input_sign').value;
    let checkbox = document.querySelector('#admin-sign');
    let balance = document.querySelector('.modal__input_balance').value;
    const money = document.querySelector('.money');
    money.innerHTML = `<span>${balance}</span>`;

    if (checkbox.checked){
       localStorage.admin = JSON.stringify({
            adminName: `${name}`,
            balance:`${balance}`,
        });
    } else {
        localStorage.user = JSON.stringify({
            userName: `${name}`,
            balance:`${balance}`,
        }); 
    }  
};

// modalBtn.addEventListener('click', signIn);

//     let raw = localStorage.getItem('user')
//     const person = JSON.parse(raw);
//     const userName = person.userName;
//     const balance = person.balance;
    




class Product {
    constructor(nameProduct, priceProduct, quantity){
       this.nameProduct = nameProduct;
       this.priceProduct = priceProduct;
       this.quantity = quantity  
    }

    product(){
        const catalogList = document.querySelector('.catalog__list');
        const catalogItem = document.createElement('li');
        catalogItem.classList.add('catalog-item');
            catalogItem.innerHTML = 
            `<img src = img/heartrate.png alt="heartrate" class="catalog-item__img">
            <h3 class="catalog-item__title">
              ${this.nameProduct}
            </h3>
            <p>
              For the first steps in heart rate-based workouts
            </p>
            <a href="#" class="catalog-item__details">
              details
            </a>
            <div class="catalog-item__footer">
              <div class="ctalog-item__prices">
                <div class="ctalog-item__old_amount">
                 ${this.quantity}
                </div>
                <div class="ctalog-item__price">
                  ${this.priceProduct}
                </div>
              </div>
              <button class="catalog-item__btn">
                buy
              </button>
            </div>`;
            catalogList.append(catalogItem);
    }

    substractAmount(amount){
       return this.quantity - amount;
    }
} 

let nameProduct;
let priceProduct;
let quantity ;
for (let key in prod ) {
nameProduct = prod[key].nameProduct
priceProduct = prod[key].priceProduct
quantity = prod[key].quantity

const product = new Product (
    nameProduct,
    priceProduct, 
    quantity  )
product.product();
}