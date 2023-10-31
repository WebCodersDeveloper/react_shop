import React, { useState } from 'react'
import './Mainhed.css';
import maxsulot from '../../public/img/hero_fruits.png'; 



export default function Mainhed({product,buyProduct,likeProduct}) {
  return (
    <>
    <header className="header">
    <div className="header_hero">
      <img src={maxsulot} alt="pic" />
      <h1>Доставка бесплатно от 1000 ₽</h1>
    </div>
    </header>
    <main>
      <div className="itemList">
          {product.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.narx}so'm</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="btn_cont">
                    <button onClick={() => buyProduct(item.id)} className="buy_btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="like_btn" onClick={() => likeProduct(item.id)}>
                        <i class="fa-regular fa-heart" id="heart"></i>
                        {/* <i class="fa-solid fa-heart"></i>  */}
                    </button>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  )
}
