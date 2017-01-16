var Poll = React.createClass({
  getInitialState() {
    return(
      {
        candidates: []      
      }
    )
  },
  componentDidMount() {
    var pollId = this.props.pollId;
    
  },
  render(){
    return (
      <div className='col-xs-10 col-xs-offset-1'>
        <h3>poll details here</h3>
      </div>
    )
  }
});