import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import formatElapsedTime from './utils';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: '00:00:00',
      millisenconds: 0,
      stopped: false,
      laps: [],
      disabled: false
    }
    this.initialState = this.state;
  }

  count = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        millisenconds: prevState.millisenconds + 1,
        elapsedTime: formatElapsedTime(prevState.millisenconds + 1),
        disabled: true
      }));
    }, 1);
  }

  start = () => this.count();

  reset = () => {
    clearInterval(this.interval);
    this.setState(this.initialState)
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  saveLap = () => {
    this.setState(prevState => ({
      laps: prevState.laps.concat([prevState.elapsedTime])
    }))
  }

  manage = () => {
    if (this.state.stopped) {
      this.count();
    } else {
      clearInterval(this.interval);
    }

    this.setState(prevState => ({
      stopped: !prevState.stopped
    }))
  }

  render() {
    const {millisenconds, stopped, disabled, laps} = this.state;
    const savedLaps = laps.map(lap => <li>{lap}</li>);

    return (
      <div>
        <h1>{this.state.elapsedTime}</h1>
        <button onClick={this.start} disabled={disabled}>Start</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.manage} disabled={millisenconds === 0}>{stopped ? 'Resume' : 'Stop'}</button>
        <button onClick={this.saveLap}>Lap</button>

        <ul>
          {laps}
        </ul>
      </div>
    );
  }
}

export default App;
