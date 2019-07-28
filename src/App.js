import React from 'react';
import Websocket from 'react-websocket';
import './index.css';
import {Online, Card, Donate} from "./components";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderLoaded = this.renderLoaded.bind(this);
  }

  handleData(data) {
    let d = JSON.parse(data);
    this.setState({data: d});
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  renderLoaded(){
    return(
        <div>
          <Online count={this.state.data.online}/>
            <h1 style={{width: "90%", margin: "auto", marginTop: "30px"}}>{this.state.data.title}</h1>
          <div style={{width: "90%", margin: "auto", marginTop: '35px'}} className="grid">
            <Card k="z" count={this.state.data.z} data={<p>По данным <a target="_blank" href="https://ovdinfo.org/">ОВД-Инфо</a></p>}/>
            <Card k="p_chely" count={this.state.data.p_chely}/>
            <Card k="total" count={this.state.data.total}/>
          </div>
          <div className="embed">
            <Donate />
            <iframe className="yt" width="100%" src="https://www.youtube.com/embed/4dSYm1fOkyE" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </div>
    )
  }

  render() {
    return (
        <div>
          <Websocket url='ws://84.201.149.111:8999'
                     onMessage={this.handleData.bind(this)}/>
          {this.state.data && this.renderLoaded()}
        </div>
    );
  }
}

export default App;