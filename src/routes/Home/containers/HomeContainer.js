import { connect } from 'react-redux'
import { searchUser } from '../modules/home'

import HomeView from '../components/HomeView'
const mapDispatchToProps = {
  searchUser
}

const mapStateToProps = (state) => ({
  items : state.home.items
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
