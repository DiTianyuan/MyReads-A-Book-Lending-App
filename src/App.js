import React from 'react';
import { Route } from 'react-router-dom';
import CreateMainPage from './CreateMainPage';
import CreateSearchPage from './CreateSearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    bookshelfs: [
      {
        "title":"Currently Reading",
        "id":"currentlyReading"
      },
      {
        "title":"Want to Read",
        "id":"wantToRead"
      },
      {
        "title":"Read",
        "id":"read"
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  searchBooks(query) {
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        if (Array.isArray(books)) {
          this.setState(state => ({
            books: state.books.concat(books.filter(book => {
              for (var i = 0, k = state.books.length; i < k; ++i) {
                if (state.books[i].id === book.id) {
                  return false;
                }
              }
              return true;
            }))
          }));
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <CreateMainPage
            books={this.state.books}
            bookshelfs={this.state.bookshelfs}
          />
        )}/>
        <Route path='/search' render={() => (
          <CreateSearchPage
            books={this.state.books}
            onSearchBooks={(query)=>{this.searchBooks(query)}}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
