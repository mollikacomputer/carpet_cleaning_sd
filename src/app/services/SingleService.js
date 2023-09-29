import Image from "next/image";
import React from "react";

const SingleService = ({service}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
        width={400}
        height={200}
        alt="image"
        src={service.imageUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {service.title}</h2>
        <p>{service.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
