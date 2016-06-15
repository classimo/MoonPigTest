import React from 'react';
import {substringDescription} from './lib/lib';

export default class BookDescription extends React.Component{
    render(){
        this.description = substringDescription(this.props.description);
        return(
            <span className="description">{this.description}</span>
        )
    }
}