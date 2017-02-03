var About = React.createClass({
  render(){
    return(
        <div className="well col-xs-8 col-xs-offset-2">
          <h3>About BallotBox.</h3>
          <ul>BallotBox Guidelines:
            <li>No login is required to view and vote on any poll.</li>
            <li>Registration and login are required to create a poll, manage your existing polls, or add custom options to any poll.</li>
            <li>A vote must be cast in order to see the current vote tally, unless you are the creator of the poll. Creators can monitor their polls from the Poll Manager page.</li>
          </ul>
          <p>BallotBox uses Rails and React.js (via react-rails). Authentication by devise and charts by Chartkick.</p>
          <p>This is a <a href='http://www.freecodecamp.com'>freeCodeCamp</a> project built by <a href='https://s.codepen.io/yuzu-r/debug/KMWNOo/bYrdyYxogGKA'>yuzu-r</a>.</p>
        </div>
    )
  }
})