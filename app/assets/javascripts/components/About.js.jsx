var About = React.createClass({
  render(){
    return(
        <div className="well col-xs-8 col-xs-offset-2">
          <h3>About BallotBox.</h3>
          <p>BallotBox uses Rails and React.js (via react-rails). Authentication by devise and charts by Chartkick.</p>
          <p>This is a <a href='http://www.freecodecamp.com'>freeCodeCamp</a> project built by <a href='https://s.codepen.io/yuzu-r/debug/KMWNOo/bYrdyYxogGKA'>yuzu-r</a>.</p>
        </div>
    )
  }
})