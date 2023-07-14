import { ChevronRightIcon } from "@heroicons/react/24/solid"



export const OrdersCard = ({ order }) => {

    const { date, totalPrice, totalProducts } = order

	return (
		<div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
		    <div className="flex justify-between w-full">
		    	<p className="flex flex-col">
		    	    <span className="font-light">{date}</span>
		    	    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2x1">{totalPrice}</span>
		            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
		        </p>
		    </div>
    	</div>
    )	
}