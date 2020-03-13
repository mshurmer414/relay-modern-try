import React, { Component } from "react";
import { graphql } from "react-relay";
import withData from "./withData";
import Continents from "./Continents";

class Index extends Component {
  static displayName = `Index`;

  static async getInitialProps() {
    return { relayVariables: {} };
  }

  render() {
    return (
      <div>
        <Continents continents={this.props.continents} relayVariables={{}} />
      </div>
    );
  }
}

export default withData(Index, {
  query: graphql`
    query relayModern_indexQuery {
      continents {
        ...Continents_continents
        #                name
      }
    }
  `
});
