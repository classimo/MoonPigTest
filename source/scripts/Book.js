import React from 'react';
import BookImage from './BookImage';
import BookTitle from './BookTitle';
import BookDescription from './BookDescription';

export default class Book extends React.Component{
    render(){
        return(
            <div className="Book">
                <BookImage image={this.props.image} />
                <BookTitle title={this.props.title} />
                <BookDescription description={this.props.description} />
            </div>
        )
    }
}