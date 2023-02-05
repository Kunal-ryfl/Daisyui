// 'use client'
// import { Card, Grid, Text, Button, Row } from "@nextui-org/react";


export default async function xCard({item}) {
  // const pro = await getData();
  return (


<div className="card my-4 mx-4 card-compact w-96  shadow-xl">
  

    <figure><img src={`${item.images[0]}`} alt="Shoes" className=" " /></figure>
  
  <div className="card-body ">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">${item.price}</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

  );
}