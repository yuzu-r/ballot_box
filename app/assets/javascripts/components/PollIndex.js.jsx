var PollIndex = React.createClass({
  getInitialState(){
    return {
      polls: []
    }
  },
  componentDidMount(){
    $.getJSON('/polls.json', (response) => {
      console.log(response)
      this.setState({polls: response})});
  },
  render(){
    var polls = this.state.polls.map((p) => {
      return (
        <PollItem key={p.id} item = {p} />
      )
    });
    return (    
      <div>
        <PollIndexHeader />
        <div className='clearfix'></div>
        {polls}
      </div>
    )
  }
});