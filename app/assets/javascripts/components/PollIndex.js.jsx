var PollIndex = React.createClass({
  getInitialState(){
    return {
      polls: []
    }
  },
  componentDidMount(){
    $.getJSON('/polls.json', (response) => {
      this.setState({polls: response})});
  },
  render(){
    var polls = this.state.polls.map((p) => {
      return (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.created_at}</p>
        </div>
      )
    });
    return (    
      <div>
        {polls}
      </div>
    )
  }
});