var PollChart = React.createClass({
  getInitialState: function(){
    return (
      {
        poll_results: {}
      }
    )
  },
  componentDidMount: function(){
    var self = this;
    $.ajax(
      { url: '/poll_results/' + this.props.poll_id, 
        type: 'GET',
        success: function(data) { 
          self.setState(
            {
              poll_results: data
            },
            self.drawCharts
          )
        },
        error: function(response) {
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