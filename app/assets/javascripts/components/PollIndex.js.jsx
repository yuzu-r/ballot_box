var PollIndex = React.createClass({
  getInitialState(){
    return {
      polls: this.props.polls
    }
  },
  showPoll(poll, e){
    console.log('asked for poll', poll.id);
    Turbolinks.visit('/polls/'+poll.id);
  },
  render(){
    var polls = this.state.polls.map((p) => {
      return (
        <PollItem key={p.id} item={p} showPoll={this.showPoll} />
      )
    });
    return (    
      <div>
        <PollIndexHeader />
        <div className='clearfix'></div>
        {polls}
      </div>
    )
  }
});