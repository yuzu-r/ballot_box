var About = React.createClass({
  render: function(){
    return(
        <div className="well col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <h3>BallotBox Details</h3>
          <ul>
            <li>No login is required to view and vote on any poll.</li>
            <li>Registration and login are required to create a poll, manage your polls, or add custom options to any poll.</li>
            <li>If you are adding a custom option to a poll, it's assumed you want to vote for it. You can't add an option without voting for it.</li>
            <li>A vote must be cast in order to see the current vote tally, unless you are the creator of the poll. Creators can monitor their polls from the Poll Manager page.</li>
          </ul>
          <p>BallotBox uses Rails and React.js (via react-rails). Authentication by devise and charts by Chartkick.</p>
          <p>This is a <a href='http://www.freecodecamp.com'>freeCodeCamp</a> project built by <a href='https://s.codepen.io/yuzu-r/debug/KMWNOo/bYrdyYxogGKA'>yuzu-r</a>.</p>
        </div>
    )
  }
})