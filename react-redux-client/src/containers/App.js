import { connect } from 'react-redux'
import * as appActions from '../actions/appActions'
import App from '../components/App'

// map state from store to props
const mapStateToProps = (state) => {
   return {
      mappedAppState: state.appState
   }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
   return {
      mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);