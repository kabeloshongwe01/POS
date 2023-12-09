import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
    
    const {cart, totalAmount} = props;
    return (
      <div ref={ref} className="p-5">
        <h2>Patch & Stitch Daveyton</h2>
        <p>4820 Kheswa Street<br></br>
           Daveyton <br></br>
           Ekhuruleni 1520<br></br>
           Contact: 0797847256<br></br>
           Monday-Saturday: 09:00 AM - 17:00 PM<br></br>
           Email: patchandstitchsa@gmail.com<br></br>
           </p> 
          <table className='table'>
    
                  <thead>
                    <tr>
                      <td>Item no</td>
                      <td>Description</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    { cart ? cart.map((cartProduct, key) => <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>                    
                    </tr>)

                    : ''}
                  </tbody>
          </table>
                <h2 className='px-2'>Total Amount: R{totalAmount}</h2>
      </div>
    );
});