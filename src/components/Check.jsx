import React from 'react'
import { Navigate } from 'react-router-dom'


export default function Check(nicname,setNicname,handleSubmit) {





  return (
    <>
        <div className="check__main">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={nicname.name} onChange={(e) => setNicname(e.target.value)} />
                <button>Save</button>
            </form>
        </div>
    </>
  )
}
// 