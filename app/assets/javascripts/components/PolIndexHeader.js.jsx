var PollIndexHeader = React.createClass({
  render(){
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <div className='btn-group btn-block '>
          <button type='button' className='btn btn-primary text-left col-xs-9'>All Polls</button>
          <button type='button' className='btn btn-primary col-xs-1 col-xs-offset-2 dropdown-toggle' aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">All Polls</a></li>
            <li><a href="#">Newest Polls</a></li>
            <li><a href="#">Popular Polls</a></li>
          </ul>
        </div>        
      </div>
    )
  }
});