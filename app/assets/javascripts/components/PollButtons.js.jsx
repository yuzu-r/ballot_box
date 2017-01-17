var PollButtons = React.createClass({
  render: function(){
    var isEnabled = this.props.isValid;
    return (
      <div className='buttonArray'>
        <button onClick={this.props.handleNewCandidate}>Add New Choice</button>
        <button onClick={this.props.handlePollCreate} disabled={!isEnabled}>Save Poll</button>
        <button onClick={this.props.handleCancelPollCreate}>Cancel</button>
      </div>
    )
  }
})
