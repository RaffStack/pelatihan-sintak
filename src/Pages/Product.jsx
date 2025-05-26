import React from "react";

function Product() {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="p-3">
          <h2 className="font-bold text-xl">{props.tittle}</h2>
          <p className="text-sm text-gray-400">{props.des}</p>
          <div className="flex flex-col gap-2 mt-4 mb-4">
            <div className="flex justify-between">
              <p className="text-gray-500">Processing:</p>
              <p>{props.proses}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Altitude:</p>
              <p>{props.altitude}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Flavor Notes:</p>
              <p>{props.flavor}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Available:</p>
              <p>{props.available}</p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full bg-amber-800">
              Request Quotation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
