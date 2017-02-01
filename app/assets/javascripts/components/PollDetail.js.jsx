var PollDetail = React.createClass({
  getInitialState() {
    return (
      {showResults: false}
    )    
  },
  toggleResults(){
    this.setState({
      showResults: !this.state.showResults
    });
  },
  render(){
    var chartResults, resultButtonText;
    var voteInfo = 'Total votes: ' + this.props.poll.total_votes 
                    + ', last vote: ' + this.props.poll.last_voted_on;
    if (this.state.showResults) {
      chartResults = <PollChart poll_id={this.props.poll.id} />;
      resultButtonText = 'Hide results';
    }
    else {
      chartResults = null;
      resultButtonText = 'Show results';
    }
    return (
      <div className='dashboard-item'>
        <h4>{this.props.poll.title}</h4>
        <span className='dashboard-item-text'>{voteInfo}</span>
        <button onClick={this.props.deletePoll.bind(null,this.props.poll)}
                className='btn btn-default'>
                Delete poll
        </button>
        <button className='btn btn-info'
                onClick={this.toggleResults}>{resultButtonText}</button>
        {chartResults}
      </div>
    )
  }
});

