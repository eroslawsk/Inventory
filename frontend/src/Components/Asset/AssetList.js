import React from 'react';

const AssetList = (props) => {
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Assets</h4></li>
            {props.assets.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentAsset.bind(this, item)}>{item.SerialNumber} {item.Manufacturer} {item.Model}</a>
            ))}
        </ul>
    </div> 
    );
}
 
export default AssetList;