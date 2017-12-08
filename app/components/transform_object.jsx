import React from 'react';
import Controls from './controlcenter';
import RotateControl from './rotate';
import TranslateControl from './translate';

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
      list: [],
    };
    this.update = this.update.bind(this);
    this.transforms = this.transforms.bind(this);
  }

  componentWillMount(){
    this.setState({
      list: [
        {name: 'rX',
          content:<RotateControl update={this.update} value={this.state.thetaX} name='thetaX' />
      },
        {name: 'rY',
          content:<RotateControl update={this.update} value={this.state.thetaY} name='thetaY' />
      },
        {name: 'rZ',
          content:<RotateControl update={this.update} value={this.state.thetaZ} name='thetaZ' />
      },
        {name: 'tX',
          content:<TranslateControl update={this.update} value={this.state.deltaX} name='deltaX' />
      },
        {name: 'tY',
          content:<TranslateControl update={this.update} value={this.state.deltaY} name='deltaY' />
      },
        {name: 'tZ',
          content:<TranslateControl update={this.update} value={this.state.deltaZ} name='deltaZ' />
      },
      ]
    });
  }

  update(e){
    console.log(e);
    let obj = e.currentTarget;
    let name = obj ? obj.name : e.name;
    let value = obj ? obj.value : e.value;
    this.setState({[name]: value});
  }

  transforms(){
    let transform = {
      rX: `rotateX(${this.state.thetaX}deg)`,
      rY: `rotateY(${this.state.thetaY}deg)`,
      rZ: `rotateZ(${this.state.thetaZ}deg)`,
      tX: `translateX(${this.state.deltaX}px)`,
      tY: `translateY(${this.state.deltaY}px)`,
      tZ: `translateZ(${this.state.deltaZ}px)`,
    };

    let transforms = '';
    this.state.list.forEach((listItem)=>{
      transforms = transforms + ' ' + transform[listItem.name];
    });
    return transforms;
    // return '';
  }


  render(){
    // console.log('render obj');
    // console.log(this.modChild.bind(this)());
    let transforms = this.transforms() || '';
    let objectID = 'objectID'; /*temp objectID placeholder*/
    let className = this.props.children.props.className;
    className = className + ' ' + objectID;
    //       <style>{`
    //           .control-wrapper { display: none; }
    //           .app {width: 100vw; height: 100vh;}
    //           .app:focus-within .control-wrapper { display: block; }
    //           `}</style>
    return (
      <div className={`${objectID}-transform-object`}>
        <style>
          {`
            .control-wrapper { display: none; }
            .${objectID}-transform-object:focus-within  .control-wrapper { display: block; }
            .${objectID}-wrapper > div { transform-style: preserve-3d;}
            .${objectID} { transform: ${transforms}; transform-style: preserve-3d}
            .${objectID} {display: flex; justify-content: center; align-items: center;}
          `}
          </style>
          <p>{transforms}</p>
          <div className={`${objectID }-wrapper`} tabIndex='0'>
            {React.cloneElement(this.props.children, {
               className: className,
             })}
            <Controls update={this.update} {...this.state}/>
          </div>
      </div>
    );
  }
}
export default TransformObject;
