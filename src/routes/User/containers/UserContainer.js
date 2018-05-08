import { connect } from 'react-redux'
import { fetchUserBasicInfo, fetchUserRepos} from '../modules/user'

import UserView from '../components/UserView'
const mapDispatchToProps = {
  fetchUserBasicInfo,
  fetchUserRepos
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
