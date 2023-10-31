import React from 'react'
// import { Navigate } from 'react-router-dom'
import "./Check.scss";


export default function Check({nicname,setNicname,handleSubmit}) {

  return (
    <>
        <div className="check__main">
            <form className='forma' action="" onSubmit={handleSubmit}>
                <h1>Write your name...</h1>
                <input id='inp' type="text" value={nicname} onChange={(e) => setNicname(e.target.value)} />
                <button>Save</button>
            </form>
        </div>
    </>
  )
}
// 