import { useState, useContext } from "react"
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"

import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

import { OrderCard } from "../../Components/OrderCard"
import { totalPrice } from "../../Utils"

export const CheckoutSideMenu = () => {
    
    const context = useContext(ShoppingCartContext)
  
    const item =  context.productToShow

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id != id)
        context.setCartProducts(filteredProducts)
    }
 
    const handleClick = () => {
      context.closeProductDetail() 
      context.closeCheckoutSideMenu()
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "1-1-1",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
        context.setCount(0)
    }

	return (
      <aside className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} w-[369px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded bg-white top-[68px]`}>
      	<div className="flex justify-between items-center p-6">
      		<h2 className="font-medium text-xl">detail</h2>
      		<XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => handleClick()} />
      	</div>
        <div className="px-6 overflow-y-scroll flex-1">
          {
              context.cartProducts.map((product) => (
                <OrderCard product={product} key={product.id} handleDelete={handleDelete} />
              ))
          }
        </div>
        <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
               <span className="font-light">total:</span>
               <span className="font-medium text-2x1">{totalPrice(context.cartProducts)}</span>
            </p>
            <Link to="/my-orders/last">
              <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>checkout</button>
            </Link>
        </div>
      </aside>
	)
}