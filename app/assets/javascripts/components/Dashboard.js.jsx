var Dashboard = React.createClass({
  getInitialState() {
    return (
      {polls: this.props.polls}
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
      <div>
        <h1>hi</h1>
        {polls}
      </div>
    )
  }
});