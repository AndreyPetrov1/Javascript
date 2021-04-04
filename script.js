
const goods = [
    { title: 'Jacket', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Shirt', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
class GoodsItem {
    constructor (title, price) {
      this.title = title;
      this.price = price;
}
    getHtml () { 
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
}
}

class Header { 
  constructor () {
  this.$container = document.querySelector (`header`);
  this.$button = this.$container.querySelector (`.cart-button`);
  this.$search = this.$container.querySelector (`#search `);
}
  setSearchHandler (callback) {
  this.$search.addEventListener (`input`, callback);
}
  setButtonHandler (callback) { 
 this.$button.addEventListener (`click`, callback );
}
}

class GoodsList { 
    constructor () { 
      this.api = new Api ();
      this.header = new Header ();
      this.$godsList = document.querySelector (`.goods-list` );
      this.goods = [];
      this.filteredGoods = []; 

      this.header.setSearchHandler ((evt) => {
      this.search (evt.target.value);
      })
      
      const fetch = this.api.fetchPromise();


      fetch.then ((data)=> {this.onFetchSuccess (data) })
      .catch((err)=> {this.onFetchError (err) });

      console.log(fetch);
} 

search(str) { 
    if (str === ``){
      this.filteredGoods = this.goods;
    } 
    const regexp = new RegExp(str, `gi` );
    this.filteredGoods = this.goods.filter((goods)=> regexp.test(good.title));
    this.filteredGoods = this.goods;
    this.render();
}
onFetchSuccess(data){ 
    this.goods = data.map (({title, price})=> new GoodsItem (title, price));
    this.filteredGoods = this.goods;
    this.render();
}
onFetchError(err) { 
    this.$goodsList.insertAdjacentHTML (`beforeend`, `<h3>${err}</h3>`);
}
render( ) {
    this.$goodsList.textContent = ``;
    this.filteredGoods.forEach((good)=> { 
      this.goodsList.insertAdjacentHTML (`beforeend`, good.getHtml());
    })
  }
}

// Корзина
class cart { 
  constructor () { 
    this.goods = []; 
                  }
// добавляем товар в корзину 
add (good) {
    this.goods.push(good); 
            }
    //Метод определяющий суммарнцю стоимость выбранных товаров
addTotalPrice () {
  totalGoodsPrice(); {
      let totalPrice = document.getElementById('goods-list__total'); 
      let sum = 0;
      this.goods.forEach (good => { 
          sum += good.price
                                  })
      totalPrice.innerText = `Итого  ${sum} рублей`;
                    }
                  } 
            }

const $goodsList = document.querySelector (`.goods-list`);

  const renderGoodsItem = ({title, price}) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list = goods) => {
    let goodsList = list.map( item => renderGoodsItem(item)).join(`\n`);

    $goodsList.insertAdjacentHTML (`beforeend`, goodsList );
    }
  
  renderGoodsList( );

