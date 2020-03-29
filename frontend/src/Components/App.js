import React from 'react';
import axios from 'axios';
import './App.css';
import AssetList from './Asset/AssetList';
import AssetSingle from './Asset/AssetSingle';
import AssetForm from './Asset/AssetForm';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      assets: [],
      currentAsset: {},
    }
    this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
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
  

  updateCurrentAsset(item){
    this.setState(
      {
        currentAsset: item,
      })
  }

  render() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
        <div className="nav-wrapper blue darken-1">
          <a href="/" className="brand-logo">Inventory Management</a>
          
        </div>
      </nav>
      </div>
      <div className="row">
        <div className="col s3"><AssetList assets={this.state.assets}
        updateCurrentAsset={this.updateCurrentAsset} /></div>
        <div className="col s9"><AssetSingle asset={this.state.currentAsset} /></div>
        </div>
        <div className="row">
          <div className="col s12"><AssetForm /></div>
        </div>
    </div>
  );
  }
}

export default App;
