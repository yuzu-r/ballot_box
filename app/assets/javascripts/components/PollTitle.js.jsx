var PollTitle = React.createClass({
  render: function(){
    return (
        <div>
          <label className='poll-detail-text' htmlFor='title'>Poll Title</label>
          <input placeholder='enter poll title, e.g. Chocolate or Vanilla?' 
                 value={this.props.title}
                 onChange={this.props.handleTitleChange}
                 className='form-control input-poll-title'
                 id='title'>
          </input>
        </div> 
    )
  }
});
