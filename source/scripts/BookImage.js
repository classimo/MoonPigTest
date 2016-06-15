import React from 'react';

export default class BookImage extends React.Component{
    render(){
        return(
            <div className="image-container" >
                <img src={this.props.image} alt="" />
            </div>
        )
    }
}