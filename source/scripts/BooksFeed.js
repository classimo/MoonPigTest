import React from 'react';
import Book from './Book';
import Container from  './Container';
import Col from './Col';

export default class BooksFeed extends React.Component{
    constructor(){
        super();
        this.state = {books: []};
    }
    componentDidMount(){
        this.serverRequest = new XMLHttpRequest();
        this.serverRequest.onreadystatechange = function() {
            if (this.serverRequest.readyState == 4 && this.serverRequest.status == 200) {
                try {
                    this.setState({books: JSON.parse(this.serverRequest.responseText).items});
                } catch(e) {}
            }
        }.bind(this);
        this.serverRequest.open("GET", "https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=20&orderBy=newest", true);
        this.serverRequest.send();
    }
    componentWillUnmount(){
        this.serverRequest.abort();
    }
    render(){

        return(
            <Container>
                    {this.state.books.map((book) => {
                        if(book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.title && book.volumeInfo.description) {
                            return <Col><Book image={book.volumeInfo.imageLinks.thumbnail}
                                              title={book.volumeInfo.title}
                                              description={book.volumeInfo.description}
                                              key={book.id}/>

                            </Col>
                        }
                    })}
            </Container>
        )
    }
}