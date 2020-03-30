import React from 'react';
import axios from 'axios';


class AssetForm extends React.Component {
    submitAsset(event){
        event.preventDefault();

        axios.post('http://localhost:4000/inventory', {
            Manufacturer: this.refs.Manufacturer.value,
            Model: this.refs.Model.value,
            PurchaseCost: this.refs.PurchaseCost.value,
            SerialNumber: this.refs.SerialNumber.value,
        })
        .then((response) => {
            console.log(response)
        })

        .catch((error) => {
            console.log(error);
        });
    }
    render() { 
        return ( 
            <div className="row">
            <h1 className="center">Add a new Asset</h1>
            <form className="col s12" onSubmit={this.submitAsset.bind(this)}>
            <div className="row">
                <div className="input-field col s6">
                <input id="Manufacturer" ref="Manufacturer" type="text" />
                <label htmlFor="Manufacturer">Manufacturer</label>
                </div>
                <div className="input-field col s6">
                <input id="Model" ref="Model" type="text" />
                <label htmlFor="Model">Model</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                <input id="PurchaseCost" ref="PurchaseCost" type="text" />
                <label htmlFor="PurchaseCost">Purchase Cost</label>
                </div>
                <div className="input-field col s6">
                <input id="SerialNumber" ref="SerialNumber" type="text" />
                <label htmlFor="SerialNumber">Serial Number</label>
                </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Add Asset</button>
            </form>
        </div> 
        );
    }
}
 
export default AssetForm;