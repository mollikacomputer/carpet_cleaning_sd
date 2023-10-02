import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleService = ({service}) => {
  const {_id, title, body, imgUrl} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4">
      <figure>
        <Image
        width={400}
        height={200}
        alt="image"
        src={imgUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link href={`/services/${_id}`} >
          <button className="btn btn-primary">Read more...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
