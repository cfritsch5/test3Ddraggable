import React from 'react';
import CoordinatePlane from './coordinate_plane';

class Coordinates extends React.Component {

  render(){
    let boxSize = 50;
    let side = this.props.grid*boxSize;
    let borderOffset = this.props.grid*2;
    let toEdge = (side)/2; //from origin of element to edge
    return (
      <div className='space'>
        <style>
          {`
            .plane-label, .axis-label  {position: absolute; top: 40%; left: 40%;}
            .axis-label {position: absolute; margin: 0;}
            p {color: grey;}
            .gridBox { width: ${boxSize}px; height:  ${boxSize}px}
            li {list-style-type: none;}
            ol {margin: 0; padding: 0;}
            .plane {
              display: flex;
              position: absolute;
              transition: 1s linear;
              border: 1px solid blue;
            }
            .XZ {transform:
                  rotateX(90deg)
                  translateZ(-${toEdge}px)
                  translateY(-${toEdge}px);
            }
            .YX {transform: translateZ(-${side}px)}
            .ZY {transform:
                  rotateY(90deg)
                  translateZ(-${toEdge}px)
                  translateX(${toEdge}px);
                }
            .YX .axis-label {left: 0; top:10%; transform: rotate(90deg)}
            .ZY .axis-label {left: 0; top:90%;}
            .XZ .axis-label {left: 80%; top:0;}
            .space {
              perspective: 1000px;
              height: ${80}%;
              width: ${80}%;
            }

            .coordinates {
              transform-origin: 50% 50% -${toEdge}px;
              transform:
                rotateY(${this.props.thetaY}deg)
                rotateX(${this.props.thetaX}deg)
                rotateZ(${this.props.thetaZ}deg);
            }

            .space, .coordinates {
              display: flex;
              justify-content: center;
              align-items: center;
              transform-style: preserve-3d;
              margin: auto;
            }
          `}
        </style>
        <div className="coordinates">
          <CoordinatePlane grid={this.props.grid} plane={'YX'}/>
          <CoordinatePlane grid={this.props.grid} plane={'XZ'}/>
          <CoordinatePlane grid={this.props.grid} plane={'ZY'}/>
        </div>
      </div>
    );
  }
}

export default Coordinates;
