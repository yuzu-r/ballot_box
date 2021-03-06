var PollItem = React.createClass({
  render: function(){
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 poll-index-item' onClick={this.props.showPoll.bind(null,this.props.item)}>
        <div className='poll-info'>
          <h4 className='poll-title'>{this.props.item.title}</h4>
          <p className='poll-detail-text'>&nbsp;created {this.props.item.created_at}, total votes: {this.props.item.total_votes}</p>
        </div>
        <div className='wrapper poll-item-icon'>
          <i className="fa fa-question-circle-o fa-3x "></i>
        </div>
      </div>
    )
  }
});