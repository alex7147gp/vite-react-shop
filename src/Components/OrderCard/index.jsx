import { XMarkIcon } from "@heroicons/react/24/solid"



export const OrderCard = ({ product, handleDelete }) => {

    const { id, title, image, price } = product

    let renderXMarkIcon

    if (handleDelete) {
    	renderXMarkIcon = <XMarkIcon className="w-6 h-6 text-black cursor-pointer" onClick={() => handleDelete(id)} />
    }

	return (
		<div className="flex justify-between items-center m-2">
		    <div className="flex items-center gap-2">
			    <figure className="w-20 h-20">
				    <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
			    </figure>
		      	<p className="text-sm font-light">{title}</p>
	    	</div>
	    	<div className="flex items-center gap-2">
		    	<p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
	    	</div>
    	</div>
    )	
}