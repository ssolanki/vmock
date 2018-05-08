import React from 'react'
import { IndexLink, Link } from 'react-router'

export const User = ({ item }) => {
  return (
    <div className="user">
      <Link to={`/users/${item.login}`} activeClassName='page-layout__nav-item--active'>
        <img src={item.avatar_url} />
        <span> {item.login} </span>
      </Link>
    </div>
  )
}

export default User
