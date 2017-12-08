import React from 'react';
import RotateControl from './rotate';
import TranslateControl from './translate';
import DraggableList from 'react-draggable-list';
import Template from './template';

class Controls extends React.Component {
  constructor(props){
    super(props);

    // let { update } = this.props;
    // let { thetaX, thetaY, thetaZ } = this.props;
    // let { deltaX, deltaY, deltaZ } = this.props;
    // this.state = {
    //   list: [
    //     {name: 'tx', content:<RotateControl update={update} value={thetaX} name='thetaX' />},
    //     {name: 'ty',content:<RotateControl update={update} value={thetaY} name='thetaY' />},
    //     {name: 'tz',content:<RotateControl update={update} value={thetaZ} name='thetaZ' />},
    //     {name: 'dx',content:<TranslateControl update={update} value={deltaX} name='deltaX' />},
    //     {name: 'dy',content:<TranslateControl update={update} value={deltaY} name='deltaY' />},
    //     {name: 'dz',content:<TranslateControl update={update} value={deltaZ} name='deltaZ' />},
    //   ]
    // };
  }

  _onListChange(newList) {
  this.props.update({name: 'list', value: newList});
}

  render(){
    return (
      <div className='control-wrapper'>
        <style>{`
            .controls {
              position: absolute;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              z-index: 1;
            }
              `}</style>
            <div className='controls' ref={(e)=>(this.container = e)}>
          <h3>controls</h3>
          <label>grid size</label>
          <input onChange={this.props.update} value={this.props.grid} name='grid' min='0' type='number'/>
          <DraggableList
            itemKey="name"
            template={Template}
            onMoveEnd={this._onListChange.bind(this)}
            list={this.props.list}
            />
        </div>
        {/*controls to cildren?*/}
      </div>
    );
  }
}

export default Controls;
