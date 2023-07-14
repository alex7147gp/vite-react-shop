import { useContext } from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../Context"


export const Card = ({ item }) => {

    const context = useContext(ShoppingCartContext)

    const handleClick = (data) => {
        context.openProductDetail()
        context.setProductToShow(data)
    }    

    const RenderCard = ({ id }) => {

        const isInCard = context.cartProducts.filter((product) => product.id == id).length > 0

        if (isInCard) {

          return (
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
                onClick={() => context.openCheckoutSideMenu()}
            >
                <CheckIcon className="w-6 h-6 text-white"/>
            </div>
          )

        }
        else {
        
          return (
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={() => handleProducts(event, {...item, image})}
            >
                <PlusIcon className="w-6 h-6 text-black-600"/>
            </div>
          )
        }
    }

    let image = item.images[1]

    if (!image) {
    	image = "https://images.pexels.com/photos/983831/pexels-photo-983831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    const handleProducts = (event, data) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, data])
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }

	return (
      <div className="bg-white cursor-pointer w-56 h-60">
      	<figure 
          className="relative mb-2 w-full h-4/5"
          onClick={() => handleClick({...item, image})}
        >
      		<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category.name}</span>
      		<img className="w-full h-full object-cover rounded-lg" src={image} alt={item.title}/>
      		<div>
      		  <RenderCard id={item.id} />
      		</div>
      	</figure>
      	<p className="flex justify-between">
      		<span className="text-sm font-light">{item.title}</span>
      		<span className="text-lg font-medium">{item.price}</span>
      	</p>
      </div> 
    )
}