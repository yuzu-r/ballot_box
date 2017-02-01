var PollButtons = React.createClass({
  render: function(){
    var isEnabled = this.props.isValid;
    return (
      <div className='buttonArray'>
        <button onClick={this.props.handleNewCandidate}
                className='btn btn-info'>Add New Choice</button>
        <button onClick={this.props.handlePollCreate} 
                disabled={!isEnabled}
                className='btn btn-primary'>Save Poll</button>
        <button onClick={this.props.handleCancelPollCreate}
                className='btn btn-default'>Cancel</button>
      </div>
    )
  }
})
