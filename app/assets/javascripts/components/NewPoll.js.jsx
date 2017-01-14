var NewPoll = React.createClass({
  handleClick() {
    var title= this.refs.title.value;
    $.ajax({ 
      url: '/polls', 
      type: 'POST', 
      data: { 
              poll: { title: title,
                      user_id: "1" } 
            }, 
      success: (response) => { console.log('it worked!', response); } 
    }); 

  },
  render(){
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h3>create a new poll</h3>
        <input ref='title' placeholder='enter a name for the poll' />
        <br />
        <button onClick={this.handleClick}>Create this Poll</button>
      </div>
    )
  }
});