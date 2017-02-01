var Dashboard = React.createClass({
  getInitialState() {
    return (
      {polls: this.props.polls.polls}
    )
  },
  deletePoll(poll){
    console.log('deleting poll', poll);
    $.ajax({ 
      url: '/polls/' + poll.id, 
      type: 'DELETE', 
      success(response) { console.log('successfully removed item') } 
    }); 
  },
  render(){
    var polls = this.state.polls.map((p) => {
      return (
        <PollDetail key={p.id} poll={p} deletePoll={this.deletePoll} />
      )
    });

    return (
      <div className='col-xs-8 col-xs-offset-2 dashboard' >
        <h2>Poll Manager</h2>
        <a href='/'>See all polls</a>
        {polls}
      </div>
    )
  }
});