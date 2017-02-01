var PollTitle = React.createClass({
  render: function(){
    return (
        <div>
          <input placeholder='enter poll title, e.g. Chocolate or Vanilla?' 
                 value={this.props.title}
                 onChange={this.props.handleTitleChange}
                 className='form-control input-poll-title'>
          </input>
        </div> 
    )
  }
});
