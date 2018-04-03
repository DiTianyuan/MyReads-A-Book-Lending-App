import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';

class AddBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  state = {
    books: [],
    shelfs: {},
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  handleChange(book, event) {
    book.shelf = event.target.value;
    BooksAPI.update(book, book.shelf).then((shelfs) => {
      this.setState({ shelfs });
    })
  }

  componentWillUnmount(){
    //重写组件的setState方法，直接返回空
    this.setState = (state,callback) => {
      return;
    };
  }

  render() {
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors));
    } else {
      showingBooks = []
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => {
                this.updateQuery(event.target.value);
                this.props.onSearchBooks(event.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
                  <div className="book-title">{book.title}</div>
                  { book.authors.map((item,index) => {
                    return (
                      <div className="book-authors" key={index}>{item}</div>
                    )
                  })}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default AddBooks