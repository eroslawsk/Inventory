import React from 'react';
import axios from 'axios';
import '../App.css';


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

        this.setState({
            Manufacturer: '',
            Model: '',
            PurchaseCost: '',
            SerialNumber: ' '
        })
    }
    render() { 
        return ( 
            <div>
                <h1><strong className="has-text-info">Add an Asset</strong></h1>
            <form onSubmit={this.submitAsset.bind(this)}>
            <div className="columns">
            <div className="column">
            <div className="field">
            <label className="label">Manufacturer</label>
            <div className="control">
                <input className="input" id="Manufacturer" ref="Manufacturer" type="text" />
            </div>
            </div>
            </div>
            <div className="column">
            <div className="field">
            <label className="label">Model</label>
            <div className="control">
                <input className="input" id="Model" ref="Model" type="text" />
            </div>
            </div>
            </div>
            </div>
            <div className="columns">
            <div className="column">
            <div className="field">
            <label className="label">Purchase Cost</label>
            <div className="control">
                <input className="input" id="PurchaseCost" ref="PurchaseCost" type="text" />
            </div>
            </div>
            </div>
            <div className="column">
            <div className="field">
            <label className="label">Serial Number</label>
            <div className="control">
                <input className="input" id="SerialNumber" ref="SerialNumber" type="text" />
            </div>
            </div>
            </div>
            </div>
            <button className="button is-link" type="submit" name="action">Add Asset</button>
            </form>
            </div>
        );
    }
}
 
export default AssetForm;