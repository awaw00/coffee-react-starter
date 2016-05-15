React = require 'react'

App = React.createClass
  render: ->
    <div>
      {@props.children}
    </div>

module.exports = App
