import React from 'react';
import DragSortableList from 'react-drag-sortable';

class Controls extends React.Component {

  onSort(sortedList){
    console.log(sortedList);
  }



  render(){
    let list=[
      {content:
        <div>
        <label>rotate thetaX</label>
        <input onChange={this.props.update} value={this.props.thetaX} name='thetaX' min="-180" max="180" type='range' list='tickmarks'/>
      </div>  },
      {content:
        <div><label>rotate thetaY</label>
      <input onChange={this.props.update} value={this.props.thetaY} name='thetaY' min="-180" max="180" type='range' list='tickmarks'/>
      </div>},
      {content:
        <div><label>rotate thetaZ</label>
      <input onChange={this.props.update} value={this.props.thetaZ} name='thetaZ' min="-180" max="180" type='range' list='tickmarks'/>
      </div>},
      {content:
        <div><label>translate deltaX</label>
      <input onChange={this.props.update} value={this.props.deltaX} name='deltaX' type='number'/>
      </div>},
      {content:
        <div><label>translate deltaY</label>
      <input onChange={this.props.update} value={this.props.deltaY} name='deltaY' type='number'/>
      </div>},
      {content:
        <div><label>translate deltaZ</label>
      <input onChange={this.props.update} value={this.props.deltaZ} name='deltaZ' type='number'/>
    </div>}
    ];

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
          <DragSortableList items={list} onSort={this.onSort} type="vertical"/>
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
