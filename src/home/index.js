import React, { Component } from "react";

import CalculPage from "../calcul";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      selectedValue: "",
      pourcentage: "",
      numbreHours: 7
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeRadio = event => {
    console.log(event.target.value);
    this.setState({
      selectedValue: event.target.value
    });
  };
  render() {
    return (
      <div>
        <p>
          <h2>CALCULEZ RAPIDEMENT LE COÛT D’UN SALARIÉ</h2>
        </p>
        <p>Vous voulez savoir combien coûte un salarié ?</p>

        <p>
          Vous pouvez, grâce à ce simulateur, estimer le coût réel d’un salarié
          quelque soit son statut (CDD, CDI, temps partiel etc.)
        </p>
        <p>
          Ex : Vous souhaitez payer votre salarié au salaire médian (2300 €
          bruts / mois en 2019). Cliquez sur la case « Salaire brut de base » et
          sélectionnez « Salaire médian ». Vous retrouvez directement le total
          chargé ainsi que le salaire Net mensuel de votre employé avant et
          après impôts. Vous pouvez calculer ce coût mensuellement ou
          annuellement.
        </p>
        <p>
          Si vous voulez plus d’information sur les différents salaires, il vous
          suffit de cliquer et tout vous est expliqué. Ce simulateur vous
          explique également à quoi servent vos cotisations.
        </p>

        <CalculPage />
      </div>
    );
  }
}

export default HomePage;
