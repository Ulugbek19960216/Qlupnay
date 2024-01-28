import React from 'react'
export default function () {

    const path = process.env.PUBLIC_URL;

 return (
    <div>
        <h2><img src={path + '/images/logo1.png'} width="80px"/></h2>
        <h3>QLUPNAY</h3>
    </div>
  )
}
