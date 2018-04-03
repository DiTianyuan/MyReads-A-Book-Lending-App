import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';

class AddBooks extends Component {
  state = {
    shelfs: {},
  }

  handleChange(book, event) {
    book.shelf = event.target.value;
    BooksAPI.update(book, book.shelf).then((shelfs) => {
      this.setState({ shelfs });
    })
  }

  render() {
    let showingBooks
    if (this.props.query) {
      const match = new RegExp(escapeRegExp(this.props.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors));
    } else {
      showingBooks = []
    }

    return (
      <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                  { book.imageLinks ? (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  ) : (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://via.placeholder.com/128x193")` }}></div>
                  )}
                    <div className="book-shelf-changer">
                      <form>
                        <select id={book.id} value={book.shelf ? book.shelf : "none"} onChange={this.handleChange.bind(this, book)}>
                          <option value="woveTo" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="book-title">{book.title ? book.title : "No title"}</div>
                  { book.authors ? (
                    book.authors.map((item,index) => {
                      return (
                        <div className="book-authors" key={index}>{item}</div>
                      )
                    })
                  ) : (
                    <div className="book-authors">Unknow</div>
                  )}
                </div>
              </li>
            ))}
          </ol>
      </div>
    )
  }
}

export default AddBooks