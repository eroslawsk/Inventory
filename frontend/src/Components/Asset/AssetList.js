import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import App from '../App.css';

  
class AssetList extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
          assets: [],
      }
    }
    
      componentDidMount(){
        const url = 'http://localhost:4000/inventory';
    
        axios.get(url)
          .then((Response) => {
          this.setState({
            assets: Response.data
          })
          })
          .catch((error) => {
            console.log(error);
          })
        }

    

render() {
    return ( 
        <div className="columns">
        <div className="column">
        <table className="table is-striped">
            <thead>
                <tr>
                    <th className="has-text-info">Serial Number</th>
                    <th className="has-text-info">Manufacturer</th>
                    <th className="has-text-info">Model</th>
                    <th className="has-text-info">Purchase Cost</th>
                    <th className="has-text-info">Actions</th>
                </tr>
            </thead>
            <tbody>
            {this.state.assets.map((item) => (
                <tr key={item._id}>
            <td>{item.SerialNumber}</td>
            <td>{item.Manufacturer}</td>
            <td>{item.Model}</td>
            <td>{item.PurchaseCost}</td>
            <td>
            <Link to={"/edit/"+item._id}>Edit</Link>
            </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
    );
}
} 
export default AssetList;