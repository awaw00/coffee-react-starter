React = require 'react'
PropTypes = React.PropTypes
{Router, IndexRoute, Route, browserHistory} = require 'react-router'
App = require 'layouts/App'
ContentView = require 'views/ContentView'

Root = React.createClass
  render: ->
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={ContentView} />
        </Route>
      </Router>
    </div>

module.exports = Root
