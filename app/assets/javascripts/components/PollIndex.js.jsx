var PollIndex = React.createClass({
  getInitialState: function(){
    return {
      polls: this.props.polls.polls
    }
  },
  about: function(){
    Turbolinks.visit('/about');
  },
  showPoll: function(poll, e){
    Turbolinks.visit('/polls/'+poll.id);
  },
  render: function(){
    var polls = this.state.polls.map((p) => {
      return (
        <PollItem key={p.id} item={p} showPoll={this.showPoll} />
      )
    });
    var textElement = this.props.signedIn ? null : <p>Sign up or sign in to create polls of your own.</p>;
    return ( 
      <div>
        <div className="well col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <h3>Welcome to BallotBox.</h3>
          <p>You are free to vote in any poll listed below.</p>
          {textElement}
          <p>Dissatisfied with the choices a poll offers? Signed in users can add a custom response.</p>
          <p><a href="/about">About BallotBox</a></p>
        </div>
        <div className='clearfix'></div>
        <PollIndexHeader sortBy={this.props.sortBy} />
        <div className='clearfix'></div>
        {polls}
      </div>
    )
  }
});