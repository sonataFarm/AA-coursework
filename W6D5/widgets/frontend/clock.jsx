import React from 'react';

class Clock extends React.Component {

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  constructor() {
    super();

    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }



  tick() {
    let time = new Date();
    this.setState({time});
  }

  timeString() {
    return this.state.time.toTimeString().split(' ')[0];
  }

  render() {
    return (
      <div className="clock">
        <h1>Ticky Tocky the Clock Says:</h1>
        <h2>"The time is { this.timeString() }!"</h2>
      </div>
    )
  }
}

export default Clock;
