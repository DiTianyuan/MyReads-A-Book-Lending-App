import React from 'react';
import { Route } from 'react-router-dom';
import CreateMainPage from './CreateMainPage';
import AddBooks from './AddBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  searchBooks(query) {
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        // filter一下books，将id不存在于原state.books的book添加到state.books
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
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <CreateMainPage
            books={this.state.books}
          />
        )}/>
        <Route path='/search' render={() => (
          <AddBooks
            books={this.state.books}
            onSearchBooks={(query)=>{this.searchBooks(query)}}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
