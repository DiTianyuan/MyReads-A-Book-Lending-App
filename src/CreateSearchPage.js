import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddBooks from './AddBooks';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class CreateSearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: '',
  }

  updateQuery = _.debounce(query => {
    this.setState({ query: query.trim() })
  }, 400)

  componentWillUnmount(){
    //重写组件的setState方法，直接返回空
    this.setState = (state,callback) => {
      return;
    };
  }

  render() {
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

        <AddBooks
          books={this.props.books}
          query={this.state.query}
        />

      </div>
    )
  }
}

export default CreateSearchPage