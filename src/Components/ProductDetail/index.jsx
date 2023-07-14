import { useState, useContext } from "react"
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../Context"


export const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
  
    const item =  context.productToShow


	return (
      <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} w-[369px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded bg-white top-[68px]`}>
      	<div className="flex justify-between items-center p-6">
      		<h2 className="font-medium text-xl">detail</h2>
      		<XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => context.closeProductDetail()} />
      	</div>
      	<figure className="px-6">
      		<img className="w-full h-full rounded-lg" src={item.image} alt={item.title} />
      	</figure>
      	<p className="flex flex-col p-6">
      		<span className="font-medium text-2x1 mb-2">{item.price}</span>
      		<span className="font-medium text-md">{item.title}</span>
      		<span className="font-light text-sm">{item.description}</span>
      	</p>
      </aside>
	)
}