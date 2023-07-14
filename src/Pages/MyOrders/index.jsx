import { useContext } from "react"
import { Link } from "react-router-dom"

import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

import { OrdersCard } from "../../Components/OrdersCard"


function MyOrders() {

  const context = useContext(ShoppingCartContext)

  const orders = context.order

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">my orders</h1>
        </div>
        {
          orders.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard order={order} />
            </Link>
          ))  
        }
      </Layout>

    </>
  )
}

export default MyOrders
