const CartDetail = () => {
    return (
        <div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Qt</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
<div className="">

    <table className="table table-borderless">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody className="invoice">
    <tr>
     
      <td></td>
      <td></td>
      <td>Qt</td>
      <td>12 items</td>
     
    </tr>
    <tr>
     
      <td></td>
      <td></td>
      <td>Cost Ksh.</td>
      <td> 1200</td>
     
    </tr>
    <tr>
     
      <td></td>
              <td>+</td>
      <td>16% VAT</td>
      <td>120</td>
     
    </tr>
    <tr>
     
               <td></td>
      <td></td>
      <td>TOTAL Ksh.</td>
                 <td> 1326</td>
     
    </tr>
  </tbody>
</table>

</div>
<div className="text-cente">
<p>This prices are inclusive of 16% VAT. </p>
</div>

        </div>
    )
}

export default CartDetail
