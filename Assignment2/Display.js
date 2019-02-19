import React, {Component} from 'react';
import './MyApp.css';

class Display extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="ali">
        <p className="props"> Name : {this.props.name} </p>
        <p className="props"> Age : {this.props.age} </p>
        <p className="props"> Birthmonth : {this.props.birthmonth} </p>
      </div>
    )
  }
}

export default Display;
