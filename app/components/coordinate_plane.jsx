import React from 'react';

class CoordinatePlane extends React.Component {

  renderGridPane(plane){
    let grid = [], row = [];
    let gridClassnames, rowClassnames;
    for(let j = 0; j < this.props.grid ; j++){
      row = [];
      rowClassnames = 'row';
      for(let i = 0; i < this.props.grid ; i++){
        gridClassnames = 'gridBox';
        if(i === 0) gridClassnames = gridClassnames + ' ' + 'first';
        if(i === this.props.grid - 1) gridClassnames = gridClassnames + ' ' + 'last';
        row.push(<li key={i} className={gridClassnames}></li>);
      }
      if(j === 0) rowClassnames = rowClassnames + ' ' + 'first';
      if(j === this.props.grid - 1) rowClassnames = rowClassnames + ' ' + 'last';

      grid.push(<ol key={j} className={rowClassnames}>{row}</ol>);
    }
    return grid;
  }

  render(){
    let boxSize = 50;
    let side = this.props.grid*boxSize;
    let borderOffset = this.props.grid*2;
    let toEdge = (side)/2; //from origin of element to edge
    return (
      <div className={`${this.props.plane} plane`}>
        <p className='plane-label'>{this.props.plane}-plane</p>
        <p className='axis-label'>{this.props.plane[0]} axis</p>
          {this.renderGridPane(this.props.plane)}
      </div>
    );
  }
}

export default CoordinatePlane;
