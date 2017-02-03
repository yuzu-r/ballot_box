var PollIndex = React.createClass({
  getInitialState(){
    return {
      polls: this.props.polls.polls
    }
  },
  about(){
    Turbolinks.visit('/about');
  },
  showPoll(poll, e){
    //console.log('asked for poll', poll.id);
    Turbolinks.visit('/polls/'+poll.id);
  },
  render(){
    //console.log(this.state.polls[0])
    var polls = this.state.polls.map((p) => {
      return (
        <PollItem key={p.id} item={p} showPoll={this.showPoll} />
      )
    });
    var textElement = this.props.signedIn ? null : <p>Sign up or sign in to create polls of your own.</p>;
    return ( 
      <div>
        <div className="well col-xs-8 col-xs-offset-2">
          <h3>Welcome to BallotBox.</h3>
          <p>You are free to vote in any poll listed below.</p>
          {textElement}
          <p>Dissatisfied with the choices a poll offers? Signed in users can add a custom response.</p>
          <p><button className="btn btn-link" onClick={this.about}>About BallotBox</button></p>
        </div>
        <div className='clearfix'></div>
        <PollIndexHeader sortBy={this.props.sortBy} />
        <div className='clearfix'></div>
        {polls}
      </div>
    )
  }
});