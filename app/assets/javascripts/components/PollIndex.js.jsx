var PollIndex = React.createClass({
  getInitialState(){
    return {
      polls: this.props.polls.polls
    }
  },
  showPoll(poll, e){
    console.log('asked for poll', poll.id);
    Turbolinks.visit('/polls/'+poll.id);
  },
  render(){
    console.log(this.state.polls[0])
    var polls = this.state.polls.map((p) => {
      return (
        <PollItem key={p.id} item={p} showPoll={this.showPoll} />
      )
    });
    return ( 
      <div>
        <div className="jumbotron col-xs-8 col-xs-offset-2">
          <h3>Welcome to BallotBox.</h3>
          <p>You are free to vote in any poll listed below.</p>
          <p>Sign up or sign in to create polls of your own.</p>
          <p>Don't like any of the choices a poll offers? Signed in users can add a custom response.</p>
        </div>
        <PollIndexHeader />
        <div className='clearfix'></div>
        {polls}
      </div>
    )
  }
});