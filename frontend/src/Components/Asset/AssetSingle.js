import React from 'react';


const AssetSingle = (props) => {
    return ( 
    <div>
    <div className="row">
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Serial Number: {props.asset.SerialNumber}</span>
          <p>Manufacturer: {props.asset.Manufacturer} Model: {props.asset.Model}</p>
          <p>Purchase Cost: {props.asset.PurchaseCost}</p>
        </div>
      </div>
    </div>
    </div>
    </div> 
    );
}
 
export default AssetSingle;