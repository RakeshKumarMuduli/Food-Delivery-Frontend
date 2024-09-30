import React from 'react'
import { Link } from 'react-router-dom'
import {useCart} from "react-use-cart"

const Card = (props) => {

    const {addItem}  = useCart();

    return (
        <div className="w-full rounded-lg border bg-white text-center mx-auto mb-8 md:mb-0 md:mr-16">
            <img
                src={props.img}
                alt="loading.."
                className="h-fit w-fit rounded-t-lg  "
            />
            <div className="p-4">
                <h1 className="text-xl font-semibold">{props.name}</h1>
                <p className="mt-3 text-sm font-bold text-gray-600 ">
                    Price : ₹{props.price}
                </p>    
                <p className="text-gray-500 line-through mb-2">₹{props.comp}</p>
                {props.badge && <span className="badge bg-yellow-500 text-white p-2 ">{props.badge}</span>}

                <button
                    type="button"
                    className="mt-4 ml-32 block h-8  rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={()=>addItem(props.item)}
                >
                    <Link to="/mycart">Add to Cart </Link>
                </button>
            </div>
        </div>
    )
}

export default Card
