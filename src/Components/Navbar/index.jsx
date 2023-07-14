import { useContext } from "react"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"


import { ShoppingCartContext } from "../../Context"

import { NavLink } from "react-router-dom"


export const Navbar = () => {


  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"

	return (
       <div>
       	<nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
       		<ul className="flex items-center gap-3">       			
       			<li className="font-semibold text-lg">
       				<NavLink to="/">
       					Shopi
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/"
                className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				>
       					All
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/clothes"
                onClick={() => context.setSearchByCategory("clothes")}
                className={({ isActive }) => isActive ? activeStyle : "undefine" }       				  
              >
       					Clothes
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/electronics"
                onClick={() => context.setSearchByCategory("electronics")}
                className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				>
       					Electronics
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/furnitures"
                onClick={() => context.setSearchByCategory("furnitures")}
                className={({ isActive }) => isActive ? activeStyle : "undefine" } 
       				>
       					Furnitures
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/toys"
                onClick={() => context.setSearchByCategory("toys")}
                className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				>
       					Toys
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/others"
                onClick={() => context.setSearchByCategory("others")}
                className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				>
       					Others
       				</NavLink>
       			</li>
       		</ul>
       		<ul className="flex items-center gap-3">       			
       		    <li className="text-black/60">
       				correo@gmail.com
       			</li>
       			<li>
       				<NavLink 
       				  to="/my-orders"
                      className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				  >
       					My Orders
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/my-account"
                      className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				  >
       					My Account
       				</NavLink>
       			</li>
       			<li>
       				<NavLink 
       				  to="/sing-in"
                      className={({ isActive }) => isActive ? activeStyle : "undefine" }
       				>
       					Sing In
       				</NavLink>
       			</li>
       			<li className="flex flex-between items-center">
                <ShoppingCartIcon className="w-6 h-6 text-black-600"/>
                <div>
                  {context.count}
                </div>
       			</li>
       		</ul>
       	</nav>
       </div>
	)
}