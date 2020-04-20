import React from 'react';
import axios from 'axios';

class EditAsset extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          SerialNumber: '',
          Manufacturer: '',
          Model: '',
          PurchaseCost: 0
      }
      this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
      this.onChangeModel = this.onChangeModel.bind(this);
      this.onChangePurchaseCost = this.onChangePurchaseCost.bind(this);
      this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
    }
    
      componentDidMount(){
        const url = 'http://localhost:4000/inventory/'+this.props.match.params.id;
    
        axios.get(url)
          .then((Response) => {
          this.setState({
            PurchaseCost: Response.data.PurchaseCost,
            SerialNumber: Response.data.SerialNumber,
            Manufacturer: Response.data.Manufacturer,
            Model: Response.data.Model
            })
          })
          .catch((error) => {
            console.log(error);
          })
        }

        onChangeManufacturer(event){
            this.setState({
                Manufacturer: event.target.value
            });
        }

        onChangeModel(event){
            this.setState({
                Model: event.target.value
            });
        }
        onChangePurchaseCost(event){
            this.setState({
                PurchaseCost: event.target.value
            });
        }
        onChangeSerialNumber(event){
            this.setState({
                SerialNumber: event.target.value
            });
        }


        updateAsset(event){
            event.preventDefault();
    
            axios.put('http://localhost:4000/inventory/'+this.props.match.params.id, {
                Manufacturer: this.state.Manufacturer,
                Model: this.state.Model,
                PurchaseCost: this.state.PurchaseCost,
                SerialNumber: this.state.SerialNumber
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
            <div>
            <h1><strong className="has-text-info">Add an Asset</strong></h1>
            <form onSubmit={this.updateAsset.bind(this)}>
            <div className="columns">
            <div className="column">
            <div className="field">
            <label className="label">Manufacturer</label>
            <div className="control">
                <input className="input" id="Manufacturer" ref="Manufacturer" type="text" value={this.state.Manufacturer} 
                onChange={this.onChangeManufacturer}/>
            </div>
            </div>
            </div>
            <div className="column">
            <div className="field">
            <label className="label">Model</label>
            <div className="control">
                <input className="input" id="Model" ref="Model" type="text" value={this.state.Model} onChange={this.onChangeModel}/>
            </div>
            </div>
            </div>
            </div>
            <div className="columns">
            <div className="column">
            <div className="field">
            <label className="label">Purchase Cost</label>
            <div className="control">
                <input className="input" id="PurchaseCost" ref="PurchaseCost" type="text" value={this.state.PurchaseCost} onChange={this.onChangePurchaseCost}/>
            </div>
            </div>
            </div>
            <div className="column">
            <div className="field">
            <label className="label">Serial Number</label>
            <div className="control">
                <input className="input" id="SerialNumber" ref="SerialNumber" type="text" value={this.state.SerialNumber} onChange={this.onChangeSerialNumber}/>
            </div>
            </div>
            </div>
            </div>
            <button className="button is-link" type="submit" name="action">Update Asset</button>
            </form>
            </div>
          );
    }
}
 
export default EditAsset;