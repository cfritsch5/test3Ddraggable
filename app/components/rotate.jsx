import React from 'react';

class RotateControl extends React.Component {

  render(){
    return (
      <div className="rotate-control">
        <label>rotate {this.props.name}</label>
        <input className='rotate-slider'
          onChange={this.props.update}
          value={this.props.thetaX}
          name={this.props.name}
          type='range'
          min="-180" max="180"
          list='tickmarks'/>
          <datalist id="tickmarks">
            <option value="-180"/>
            <option value="-90"/>
            <option value="0"/>
            <option value="90"/>
            <option value="180"/>
          </datalist>
      </div>
    );
  }
}

export default RotateControl;
