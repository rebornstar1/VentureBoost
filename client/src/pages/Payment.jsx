import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react'


function Payment() {

  //const tempkey = process.env.REACT_APP_API_KEY

    const [product,setProduct] = useState({
        name:"VentureBoost",
        price: 100,
        productBy: "reborn_star"  
    })

    const makeInvestment = token => {
       const body = {
        token,
        product
       }

       const headers = {
        "Content-Type" : "application/json"
       }

          return fetch("http://localhost:3000/payment",{
          method: "POST",
          headers,
          body : JSON.stringify(body)
         }).then(response => console.log(response))
         .catch(error => console.log(error));
    }

  return (
    <div>
       <StripeCheckout
       stripeKey={"pk_test_51P3EqMSANBGDnCuC0WRlbvtCE8zA8PKvY9R0n6xxhUjXcc6aiAkLs9bUPBRKIkxu8fyZ3IG1tDcl1YVsHroKJNcr006LgdFQZZ"}
       token={makeInvestment}
       name="Invest and Grow"
       amount = {product.price * 100}
       >
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Invest
        </button>
       </StripeCheckout>
    </div>
  )
}

export default Payment
