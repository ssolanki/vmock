import React from 'react'
import './UserView.scss'

export class UserView extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    const { location, fetchUserBasicInfo, fetchUserRepos } = this.props
    const path = location.pathname
    const login = path.split('/')[path.split('/').length - 1]
    fetchUserBasicInfo(login)
    fetchUserRepos(login)
  }
  render() {
    const { login, url, name, avatar_url, location, email, repos } = this.props.user
    //TODO: Loaders
    if(!login){ return null }
    return (
      <div className="user-info">
        <div className="leftbar">
          <img src={avatar_url} />
          <h4> {name} </h4>
          <a href={url} target="_blank"> {url} </a>
          <p> {location} </p>
          <p> {email} </p>
        </div>
        <div className="rightbar">
          {repos.map((repo) => {
            return (
              <div className="repo" key={repo.id}>
                <h4 ><a href={repo.html_url} target="_blank"> {repo.name}</a></h4>
                <p>{repo.description}</p>
                <span> Open Issues: {repo.open_issues}</span> <span> Watchers: {repo.watchers}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserView