import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Header from './Header'

const mapStateToProps = (state, props) => {
  return {
    pathname: state.router.location.pathname
  }
}

const mapDispatchToProps = dispatch => ({
  push: path => dispatch(push(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
