var PollTitle = React.createClass({
  render: function(){
    return (
        <div>
          <input placeholder='enter title' 
                 value={this.props.title}
                 onChange={this.props.handleTitleChange}></input>
        </div> 
    )
  }
});
