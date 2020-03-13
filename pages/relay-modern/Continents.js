import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Continents = ({ error, continents }) => {
  const header = <h1>Continents</h1>;

  if (error) {
    return (
      <React.Fragment>
        {header}
        <div>{error.message}</div>
      </React.Fragment>
    );
  }

  if (continents) {
    return (
      <React.Fragment>
        {header}
        <table>
          <thead>
            <tr>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {continents.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  return (
    <>
      {header}
      <div>Loading</div>
    </>
  );
};

export default createFragmentContainer(Continents, {
  continents: graphql`
    fragment Continents_continents on Continent @relay(plural: true) {
      name
    }
  `
});
