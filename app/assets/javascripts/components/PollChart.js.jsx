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
    var elChartId = 'chart-' + this.props.poll_id;
    var data = this.state.poll_results;
    new Chartkick.PieChart(elChartId, data, {legend: 'bottom'});
  },
  render: function(){
    var elChartId = 'chart-' + this.props.poll_id;
    return (
      React.DOM.div({id: elChartId, className: 'chart'})
    );
  },
});