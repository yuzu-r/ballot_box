var PollIndex2 = React.createClass({
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
    console.log(this.state.polls)
    //console.log('polls polls',this.state.polls.polls)
    //console.log('polls polls',this.state.polls.polls[0].title)
    var polls = null;
    polls = this.state.polls.map((p) => {
      return (
        <p key={p.id}>{p.title}</p>
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