import React, { Component } from "react";
import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Radio from "@material-ui/core/Radio";
var re = /^[0-9.\b]+$/;
class CalculPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salaire_net_impot: "",
      depense_entreprise: "",
      salaire_brut: "",
      salaire_net: "",
      type: "",
      selectedValue: "mois"
    };
  }
  componentDidMount() {
    //   this.setState({ mois: ["1er mois", "2e mois"] });
  }
  handleBlur(event) {
    const name = event.target.name;
    switch (name) {
      case "depense_entreprise":
        this.setState({
          salaire_net_impot: Math.floor(
            (this.state.depense_entreprise / 1.32) * 0.78 * 0.919
          ),
          salaire_brut: Math.floor(this.state.depense_entreprise / 1.32),
          salaire_net: Math.floor((this.state.depense_entreprise * 0.78) / 1.32)
        });
        break;
      case "salaire_brut":
        this.setState({
          salaire_net_impot: Math.floor(
            this.state.salaire_brut * (0.78 * 0.919)
          ),
          depense_entreprise: Math.floor(this.state.salaire_brut * 1.32),
          salaire_net: Math.floor(this.state.salaire_brut * 0.78)
        });
        break;

      case "salaire_net":
        this.setState({
          salaire_net_impot: Math.floor(this.state.salaire_net * 0.919),
          depense_entreprise: Math.floor(
            (this.state.salaire_net * 1.32) / 0.78
          ),
          salaire_brut: Math.floor(this.state.salaire_net / 0.78)
        });
        break;

      case "salaire_net_impot":
        this.setState({
          salaire_net: Math.floor(this.state.salaire_net_impot / 0.919),
          depense_entreprise: Math.floor(
            (this.state.salaire_net_impot * 1.32) / (0.919 * 0.78)
          ),
          salaire_brut: Math.floor(
            this.state.salaire_net_impot / (0.78 * 0.919)
          )
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <Button
          variant="primary"
          value="mois"
          onClick={() => {
            this.setState({ type: "mois", selectedValue: "mois" });
          }}
        >
          <Radio
            checked={this.state.selectedValue === "mois"}
            value="mois"
            name="radio-button-demo"
            inputProps={{ "aria-label": "mois" }}
          />
          $/mois
        </Button>
        <Button
          variant="primary"
          value="an"
          onClick={() => {
            this.setState({ type: "an", selectedValue: "an" });
          }}
        >
          <Radio
            value="an"
            checked={this.state.selectedValue === "an"}
            name="radio-button-demo"
            inputProps={{ "aria-label": "an" }}
          />
          $/an
        </Button>
        <Table style={{ width: "50%", marginTop: 10 }} striped bordered hover>
          <tbody>
            <tr>
              <td>Cout total Dépensé par l'entreprise</td>

              <td>
                <input
                  onBlur={event => this.handleBlur(event)}
                  type="text"
                  name="depense_entreprise"
                  onChange={event => {
                    if (
                      event.target.value === "" ||
                      re.test(event.target.value)
                    )
                      this.setState({ depense_entreprise: event.target.value });
                  }}
                  value={this.state.depense_entreprise}
                />
              </td>
            </tr>

            <tr>
              <td>Salaire brut</td>

              <td>
                <input
                  type="text"
                  onBlur={event => this.handleBlur(event)}
                  name="salaire_brut"
                  onChange={event => {
                    if (
                      event.target.value === "" ||
                      re.test(event.target.value)
                    )
                      this.setState({ salaire_brut: event.target.value });
                  }}
                  value={this.state.salaire_brut}
                />
              </td>
            </tr>

            <tr>
              <td>Salaire Net</td>

              <td>
                <input
                  type="text"
                  name="salaire_net"
                  onBlur={event => this.handleBlur(event)}
                  onChange={event => {
                    if (
                      event.target.value === "" ||
                      re.test(event.target.value)
                    )
                      this.setState({ salaire_net: event.target.value });
                  }}
                  value={this.state.salaire_net}
                />
              </td>
            </tr>

            <tr>
              <td>Salaire net aprés impot</td>

              <td>
                <input
                  type="text"
                  name="salaire_net_impot"
                  onBlur={event => this.handleBlur(event)}
                  onChange={event => {
                    if (
                      event.target.value === "" ||
                      re.test(event.target.value)
                    )
                      this.setState({ salaire_net_impot: event.target.value });
                  }}
                  value={this.state.salaire_net_impot}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CalculPage;
