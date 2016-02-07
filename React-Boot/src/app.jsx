/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./views/shared/components/header.jsx');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div>
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;