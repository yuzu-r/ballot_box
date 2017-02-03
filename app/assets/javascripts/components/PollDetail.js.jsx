var PollDetail = React.createClass({
  getInitialState() {
    return (
      {
        showResults: false
      }
    )    
  },
  toggleResults(){
    this.setState({
      showResults: !this.state.showResults
    });
  },
  tweetPoll() {
    var tweetText, tweetUrl;
    var tweetBaseUrl = 'https://twitter.com/intent/tweet?text=';
    var pollUrl = window.location.origin + '/polls/' + this.props.poll.id;
    tweetText = 'Vote: ' + this.props.poll.title + ' ' + pollUrl;
    tweetUrl = tweetBaseUrl + tweetText;
    var myWindow = window.open(tweetUrl, "Popup", "location = 1, status = 1, scrollbars = 1, resizable = 1, toolbar = 1, titlebar = 1, width = 400, height = 300");
  },
  visitPoll(){
    Turbolinks.visit('/polls/'+this.props.poll.id);
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
        <br />
        <button className='btn btn-default'
                onClick={this.visitPoll}>Vote</button>
        <button className='btn btn-primary'
                onClick={this.toggleResults}>{resultButtonText}</button>
        <button onClick={this.props.deletePoll.bind(null,this.props.poll)}
                className='btn btn-danger'>
                Delete poll
        </button>
        <button className='btn btn-info' onClick={this.tweetPoll}><i className="fa fa-twitter"></i></button>
        {chartResults}
      </div>
    )
  }
});

