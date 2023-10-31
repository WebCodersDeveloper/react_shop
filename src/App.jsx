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
import Conditional from "./components/Conditional";
import { useGlobalContext } from "./context";




const App = () => {
  const {getLocalStorage} = useGlobalContext();
  const {getLocalStorageUser} = useGlobalContext();
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
  

  const inpName = document.getElementById('inpName');
  const inpPrice = document.getElementById('inpPrice');

  const creaProduct = (e) => {
    if (inpName.value.length > 0 && inpPrice.value.length > 0) {
      e.preventDefault();
      const newItem = { id: id, image: img, name: item, narx: price };
      setProduct([...product, newItem]);
      setItem("");
      setPrice("");
    }
    else{
      alert("Iltimos malumot kiritganingzga ishonch hosil qiling!");
    }
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
const inp = document.getElementById('inp');
const handleSubmit = (e) => {
  e.preventDefault();
  if(inp.value.length > 0) {
    const newUser = {name: nicname };
    setUser(newUser);
    setNicname("")
  }
  else{
    alert("Iltimos ismingizni yozganingizga ishonch hosil qiling!")
  }
};

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Mainhed product={product} buyProduct={buyProduct} likeProduct={likeProduct}/>} />
        <Route path="/add" element={<Conditional handleSubmit={handleSubmit} user={user} nicname={nicname} setNicname={setNicname} name={item} setItem={setItem} price={price} setPrice={setPrice} creaProduct={creaProduct} product={product} removeItem={removeItem} buyProduct={buyProduct} likeProduct={likeProduct}/>} />
        <Route path="/buypage" element={<Buypage buyer={buyer} removeItem={removeItem} />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </>
  );
};

export default App;


