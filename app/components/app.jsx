import React from 'react';
import Coordinates from './coordinates';
import Controls from './controls';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grid: 5,
      thetaX: 0,
      thetaY: 0,
      thetaZ: 0,
    };

    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  render(){
    return (
      <div className='app' tabIndex='0'>
        <style>{`
            .control-wrapper { display: none; }
            .app {width: 100vw; height: 100vh;}
            .app:focus-within .control-wrapper { display: block; }
              `}</style>
        <h1>app</h1>
        <Controls update={this.update} {...this.state}/>
        <Coordinates {...this.state}/>
      </div>
    );
  }
}

export default App;
