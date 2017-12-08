import React from 'react';
import Coordinates from './coordinates';
import Controls from './controlcenter';
import RotateControl from './rotate';
import TranslateControl from './translate';
import TransformObject from './transform_object';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grid: 5,
      thetaX: 0,
      thetaY: 0,
      thetaZ: 0,
      list: [],
    };

    this.update = this.update.bind(this);
  }

  componentWillMount(){
    this.setState({list: [
            {name: 'tx', content:<RotateControl update={this.update} value={this.state.thetaX} name='thetaX' />},
            {name: 'ty',content:<RotateControl update={this.update} value={this.state.thetaY} name='thetaY' />},
            {name: 'tz',content:<RotateControl update={this.update} value={this.state.thetaZ} name='thetaZ' />},
            {name: 'dx',content:<TranslateControl update={this.update} value={this.state.deltaX} name='deltaX' />},
            {name: 'dy',content:<TranslateControl update={this.update} value={this.state.deltaY} name='deltaY' />},
            {name: 'dz',content:<TranslateControl update={this.update} value={this.state.deltaZ} name='deltaZ' />},
          ]});
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  render(){
    return (
      <div className='app' tabIndex='0'>
        <TransformObject><div className='bob'>obj</div></TransformObject>
      </div>
    );
  }
  //   return (
  //     <div className='app' tabIndex='0'>
  //       <h1>app</h1>
  //       <style>{`
  //           .control-wrapper { display: none; }
  //           .app {width: 100vw; height: 100vh;}
  //           .app:focus-within .control-wrapper { display: block; }
  //           `}</style>
  //       <Controls update={this.update} {...this.state}/>
  //       <Coordinates {...this.state}/>
  //       <TransformObject><div>obj</div></TransformObject>
  //     </div>
  //   );
  // }
}

export default App;
