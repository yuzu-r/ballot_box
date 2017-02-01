var PollIndexHeader = React.createClass({
  render(){
    var buttonText;
    switch(this.props.sortBy) {
      case 'alpha':
        buttonText = 'All polls (a-z)';
        break;
      case 'newest':
        buttonText = 'Newest polls first';
        break;
      case 'popular':
        buttonText = 'Popular polls first';
        break;
      default:
        buttonText = '';
      }
    return (
      <div className='col-xs-8 col-xs-offset-2'>
        <div className="btn-group poll-sort-button">
          <button type='button' className='btn btn-primary'>{buttonText}</button>
          <button type='button' className='btn btn-primary dropdown-toggle' aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
            <span className='glyphicon glyphicon-sort' aria-hidden="true"></span><span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="/polls?sort=alpha">All Polls (A-Z)</a></li>
            <li><a href="polls?sort=newest">Newest Polls First</a></li>
            <li><a href="polls?sort=popular">Popular Polls First</a></li>
          </ul>
        </div>
      </div>
    )
  }
});