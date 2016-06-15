import React from 'react';

export default class Col extends React.Component{
    render(){
        return(
            <div className="col">{this.props.children}</div>
        )
    }
}