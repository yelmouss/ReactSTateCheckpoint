import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Yassine ELMOUSS',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://yelmouss.vercel.app/img/yass.png',
        profession: 'Web Developer',
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    // Set up an interval to update the timeInterval every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to avoid memory leaks
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}
