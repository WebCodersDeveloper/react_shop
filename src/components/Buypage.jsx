import React from "react";
import "./buypage.scss";

export default function Buypage({removeItem}) {
  const buyers = JSON.parse(localStorage.getItem('buyer'))
  return (
    <>
      <div className="container">
        <div className="newItem">
          <h2>Bizda Aksiya barcha mahsulotlarimizga 50% chegirma shoshilib qoling!!!</h2>
        </div>
        <div className="itemList">
          {buyers.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.narx}so'm</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="btn_cont">
                    <button onClick={() => removeItem(item.id)} className="trash_btn">
                        <i class="fa-solid fa-trash"></i>
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
