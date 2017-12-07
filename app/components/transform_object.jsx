import React from 'react';
import Controls from './controls';

class TransformObject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thetaX: 0,
      thetaY: 0,
      thetaZ: 0,
      deltaX: 0,
      deltaY: 0,
      deltaZ: 0,
    };
    this.update = this.update.bind(this);
    this.transforms = this.transforms.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  tranforms(){
    const rX = () => {
      return `rotateX(${this.state.thetaX}deg)`;
    };
    const rY = () => {
      return `rotateY(${this.state.thetaY}deg)`;
    };
    const rZ = () => {
      return `rotateZ(${this.state.thetaZ}deg)`;
    };
    const tX = () => {
      return `translateX(${this.state.deltaX}px)`;
    };
    const tY = () => {
      return `translateY(${this.state.deltaY}px)`;
    };
    const tZ = () => {
      return `translateZ(${this.state.deltaZ}px)`;
    };

    let transforms = [rX,rY,rZ,tX,tY,tZ];
    // return transforms;
    return '';
  }

  onSort(){}

  render(){
    // let {thetaX , thetaY , thetaZ} = this.state;
    // let {deltaX , deltaY , deltaZ} = this.state;
    let transforms = this.state.transforms;
    let objectID = 'objectID'; /*temp objectID placeholder*/
    return (
      <div className='transform-object'>
        <style>
          {`
            .controls-wrapper { display: none; }
            .${objectID} { transform: ${transforms}; }
            .${objectID}:focus-within  .controls-wrapper { display: block; }
          `}
          </style>
          <div className={`${objectID } object`} tabIndex='0'>
            <p>{transforms}</p>
            {React.Children.only(this.props.children)}
            <Controls update={this.update} {...this.state}/>
          </div>
      </div>
    );
  }
}
