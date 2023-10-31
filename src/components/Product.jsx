import React from "react";
import "./Product.scss";

export default function Product({
  name,
  setItem,
  price,
  setPrice,
  creaProduct,
  product,
  removeItem,
  buyProduct,
  likeProduct
}) {
  return (
    <>
      <div className="container">
        <div className="newItem">
          <form action="" onSubmit={creaProduct}>
            <input
              id="inpName"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setItem(e.target.value)}
            />
            <input
              id="inpPrice"
              type="number"
              placeholder="Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button>Create Product</button>
          </form>
        </div>
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
                    <button onClick={() => removeItem(item.id)} className="trash_btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
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
      </div>
    </>
  );
}
