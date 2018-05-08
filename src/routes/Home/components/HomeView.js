import React from 'react'
import './HomeView.scss'
import User from './User'
import debounce from 'lodash.debounce'

export const HomeView = ({ items=[], query, searchUser }) => {
  const debouncedSearch = debounce(function(val) {
    searchUser(val)
  }, 100);
  //TODO: loader
  return (
    <div>
      <div className="top-nav">
        <div className="search-input col">
          <i className="fa fa-search" />
          <input type="text" placeholder="Search username"
            onChange={(e) => debouncedSearch(e.target.value)}/>
        </div>
      </div>
      <div>
        {items.map((item) => {
          return <User item={item} key={item.login} />
        })}
        {items.length === 0 &&
          <p className="nouser"> No user to show. </p>
        }
      </div>
    </div>
  )
}

export default HomeView