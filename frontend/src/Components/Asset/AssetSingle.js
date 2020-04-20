import React from 'react';


const AssetSingle = (props) => {
    return ( 
    <div className="columns">
    <div className="column">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
    Serial Number: {props.asset.SerialNumber}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
    <p>Manufacturer: {props.asset.Manufacturer} Model: {props.asset.Model}</p>
    <p>Purchase Cost: {props.asset.PurchaseCost}</p>
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
</div> 
</div>
    );
}
 
export default AssetSingle;