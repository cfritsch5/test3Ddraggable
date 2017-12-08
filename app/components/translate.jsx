import React from 'react';

class TranslateControl extends React.Component {

  render(){
    return (
      <div className='translate-wrapper'>
          <label>translate deltaY</label>
          <input
            onChange={this.props.update}
            value={this.props.deltaY}
            name={this.props.name}
            type='number'
            />
      </div>
    );
  }
}

export default TranslateControl;
