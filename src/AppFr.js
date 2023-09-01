import React, { Component } from "react";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Yelmouss",
        bio: "FullStack Web Developer",
        imgSrc: 'https://yelmouss.vercel.app/img/Geek.png',
        profession: "Developer",
      },
      shows: false,
      interval: 0,
    };
  }

  // Méthode pour gérer le clic sur le bouton de bascule
  handleClick = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  // Méthode exécutée après le montage du composant
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  // Méthode exécutée avant la suppression du composant
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, interval } = this.state;

    return (
      <div>
        {/* Bouton pour basculer l'affichage du profil */}
        <button onClick={this.handleClick}>{shows ? 'Masquer le profil' : 'Afficher le profil'}</button>

        {/* Affichage du profil si shows est true */}
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        
        {/* Affichage de l'intervalle */}
        <p>Interval: {interval}</p>
      </div>
    );
  }
}