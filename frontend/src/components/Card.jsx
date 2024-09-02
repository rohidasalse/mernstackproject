import React from "react";
import list from "../../public/list.json";

function Card({ item }) {
  console.log(item);

  return (
    <>
      <div className="mt-20 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105">
          <figure className="">
            <img src={item.image} alt="Shoes" className="h-20 w-20" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.tital}</p>
            <div className="card-actions flex justify-between">
              <div className="badge">{item.price} $</div>
              <div className="btn btn-sm badge badge-outline cursor-pointer">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
