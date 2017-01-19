var PollChart = React.createClass({
  getInitialState: function(){
    return (
      {
        poll_results: {}
      }
    )
  },
  componentDidMount: function(){
    $.ajax(
      { url: '/poll_results/' + this.props.poll_id, 
        type: 'GET',
        success: (data) => { 
          console.log('it worked!', data); 
          this.setState(
            {
              poll_results: data
            },
            this.drawCharts
          )
        },
        error: (response) => {
          console.log('failed!', response);
        }
      });        
  },
  drawCharts: function(){
    var data = this.state.poll_results;
    new Chartkick.PieChart('chart2', data, {legend: 'bottom'});
  },
  render: function(){
    return (
      React.DOM.div({id: 'chart2'})
    );
  },
});