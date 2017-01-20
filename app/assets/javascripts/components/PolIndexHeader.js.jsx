var PollIndexHeader = React.createClass({
  render(){
    return (
      <div className='col-xs-8 col-xs-offset-2'>
        <div className='btn-group btn-block '>
          <button type='button' className='btn btn-primary text-left col-xs-10'>All Polls</button>
          <button type='button' className='btn btn-primary col-xs-2 col-xs-offset-10 dropdown-toggle' aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="/polls?sort=alpha">All Polls</a></li>
            <li><a href="polls?sort=newest">Newest Polls</a></li>
            <li><a href="polls?sort=popular">Popular Polls</a></li>
          </ul>
        </div>        
      </div>
    )
  }
});