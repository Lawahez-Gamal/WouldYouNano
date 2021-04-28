import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Navbar from './Navbar'
import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionDetails from './QuestionDetails'
import Notfound from './Notfound'
import Routers from './Routers'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if(loading === true) {
      dispatch(handleInitialData())
   }
  }
  render() {
    return (
    <Router>
      <Fragment>
          <Navbar/>
          <div>
            <LoadingBar/>
            { this.props.loading === true
              ? null
              : <div>
              <Switch>
                <Route path='/login' exact component={Login} />
                <Routers path='/' exact component={Dashboard} />
                <Routers path='/add' exact component={NewQuestion} />
                <Routers path='/questions/:question_id' exact component={QuestionDetails} />
                <Routers path='/leaderboard' exact component={LeaderBoard} />
                <Route component={Notfound}/>
              </Switch>
            </div>
              }
          </div>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps({users}) {
  return {
    loading: isEmpty(users)
  }
}

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false
  }
  return true
}

export default connect(mapStateToProps)(App)
