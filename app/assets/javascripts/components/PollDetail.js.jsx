var PollDetail = React.createClass({
  render(){
    var voteInfo = 'Total Votes: ' + this.props.poll.total_votes + ', last voted on: ';
    return (
      <div className='dashboard-item'>
        <h3>{this.props.poll.title}</h3>
        <div className='input-group'>
          <span className='input-group-addon'>{voteInfo}</span>
          <div className="input-group-btn">  
            <button onClick={this.props.deletePoll.bind(null,this.props.poll)}
                    className='btn btn-default'>
              Delete poll
            </button>
          </div>
        </div>
      </div>
    )
  }
});

