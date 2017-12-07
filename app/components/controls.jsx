import React from 'react';

class Controls extends React.Component {

  render(){
    let list=[{content:<div>a</div>},{content:<div>b</div>}];
    return (
      <div className='control-wrapper'>
        <style>{`
            .controls {
              position: absolute;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
              `}</style>
        <div className='controls'>
          controls

          <label>grid size</label>
          <input onChange={this.props.update} value={this.props.grid} name='grid' min='0' type='number'/>
          <label>rotate thetaX</label>
          <input onChange={this.props.update} value={this.props.thetaX} name='thetaX' min="-180" max="180" type='range' list='tickmarks'/>
          <label>rotate thetaY</label>
          <input onChange={this.props.update} value={this.props.thetaY} name='thetaY' min="-180" max="180" type='range' list='tickmarks'/>
          <label>rotate thetaZ</label>
          <input onChange={this.props.update} value={this.props.thetaZ} name='thetaZ' min="-180" max="180" type='range' list='tickmarks'/>
          <label>translate deltaX</label>
          <input onChange={this.props.update} value={this.props.deltaX} name='deltaX' type='number'/>
          <label>translate deltaY</label>
          <input onChange={this.props.update} value={this.props.deltaY} name='deltaY' type='number'/>
          <label>translate deltaZ</label>
          <input onChange={this.props.update} value={this.props.deltaZ} name='deltaZ' type='number'/>
          <datalist id="tickmarks">
            <option value="-180"/>
            <option value="-90"/>
            <option value="0"/>
            <option value="90"/>
            <option value="180"/>
          </datalist>
        </div>
        {/*controls to cildren?*/}
      </div>
    );
  }
}

export default Controls;
