import * as React from 'react';
import * as PropTypes from 'prop-types'

export interface LinkProps {
  active: boolean,
  children: Node,
  onClick: () => void
}

class Link extends React.Component<LinkProps, {}> {
  constructor(props : LinkProps){
    super(props);
  }

  public render(){
    return(
      <button
      onClick={this.props.onClick}
      disabled={this.props.active}
      style={{
          marginLeft: '4px',
      }}
   >
     {this.props.children}
   </button>
    )
  }
}

export default Link
