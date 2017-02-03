var Dashboard = React.createClass({
  getInitialState() {
    return (
      {polls: this.props.polls.polls}
    )
  },
  deletePoll(poll){
    //console.log('deleting poll', poll);
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
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 dashboard' >
        <h3>Poll Manager</h3>
        <a href='/'>See all polls</a>
        <p>Share, monitor or delete your pools.</p>
        {polls}
      </div>
    )
  }
});