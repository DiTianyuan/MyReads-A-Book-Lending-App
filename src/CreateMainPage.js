import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class CreateMainPage extends Component {
  handleChange(book, event) {
    book.shelf = event.target.value;
    BooksAPI.update(book, book.shelf).then((shelfs) => {
      this.setState({ shelfs });
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter((book) => (book.shelf === "currentlyReading"))
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <form className="myform">
                                <select id={book.id} defaultValue="currentlyReading" onChange={this.handleChange.bind(this, book)}>
                                  <option value="moveTo" disabled>Move to...</option>
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

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter((book) => (book.shelf === "wantToRead"))
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <form>
                                <select id={book.id} defaultValue="wantToRead" onChange={this.handleChange.bind(this, book)}>
                                  <option value="moveTo" disabled>Move to...</option>
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

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter((book) => (book.shelf === "read"))
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <form>
                                <select id={book.id} defaultValue="read" onChange={this.handleChange.bind(this, book)}>
                                  <option value="moveTo" disabled>Move to...</option>
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
          </div>
        </div>

        <div className="open-search">
          <Link to='/search' className='add-a-book'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default CreateMainPage