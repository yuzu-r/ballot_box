var Dashboard = React.createClass({
  getInitialState: function() {
    return (
      {polls: this.props.polls.polls}
    )
  },
  deletePoll: function(poll){
    $.ajax({ 
      url: '/polls/' + poll.id, 
      type: 'DELETE', 
      success: function(response) { 
        //console.log('successfully removed item') 
      },
      error: function(response) {
        console.log('error in poll delete', response.responseText)
      }
    }); 
  },
  render: function(){
    var self = this;
    var polls = this.state.polls.map(function(p) {
      return (
        <PollDetail key={p.id} poll={p} deletePoll={self.deletePoll} />
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