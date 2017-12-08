import React from 'react';

class Template extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {

    };
  }
  render(){
    const {dragHandle} = this.props;
    return <div className={`${this.props.item.name}-template`}>
      {dragHandle(<div className={`${this.props.item.name}-dragHandle dragHandle` }></div>)}
      {this.props.item.content}
    </div>;
  }
}

export default Template;
