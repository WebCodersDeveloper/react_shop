import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { uid } from "uid";
import Product from "./components/Product";
import Buypage from "./components/Buypage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Like from "./components/Like";
import Mainhed from "./components/Mainhed";
import Check from "./components/Check";

const getLocalStorage = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
};
const getLocalStorageUser = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};
};

const App = () => {
  const id = uid();
  const img = "https://dummyimage.com/300x200/9f9fa1/fff";

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState(getLocalStorage('items'));
  const [buyer, setBuyer] = useState(getLocalStorage('buyer'));
  const [checkLike, setCheckLike] = useState(false);
  const [like, setLike] = useState(getLocalStorage('like'))
  const [nicname, setNicname] = useState('')
  const [user, setUser] = useState(getLocalStorageUser());
  // console.log(user);
  const creaProduct = (e) => {
    e.preventDefault();
    const newItem = { id: id, image: img, name: item, narx: price };
    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(product));
    localStorage.setItem("buyer", JSON.stringify(buyer));
    localStorage.setItem("like", JSON.stringify(like));
    localStorage.setItem("user", JSON.stringify(user));
  }, [product,buyer,like,user]);

  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  
  const buyProduct = (id) => {
    const buyItem = product.find((item) => item.id === id);
    setBuyer([...buyer, buyItem]);
    console.log(buyItem);
  }

const heart = document.getElementById("heart");

const likeProduct = (id) => {
  const likeItem = product.find((item) => item.id === id);
  setLike([...like, likeItem]);
  console.log(likeItem);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const newUser = {name: nicname };
  setUser({newUser});
  setNicname("")
  console.log(user);
};

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainhed />} />
        <Route path="/add" element={<Check handleSubmit={handleSubmit} nicname={nicname} setNicname={setNicname}/>} />
        <Route
          path="/edit"
          element={
            <Product
              name={item}
              setName={setItem}
              price={price}
              setPrice={setPrice}
              creaProduct={creaProduct}
              product={product}
              removeItem={removeItem}
              buyProduct={buyProduct}
              likeProduct={likeProduct}
            />
          }
        />
        <Route path="/buypage" element={<Buypage buyer={buyer} />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </>
  );
};

export default App;


