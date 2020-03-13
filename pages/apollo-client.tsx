import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import List from "../src/List";
import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/" // Server URL (must be absolute)
  })
};
interface Continents {
  name: string;
}

interface ContinentsReq {
  continents: Continents[];
}

interface ContinentsVars {}

const GET_COUNTRIES = gql`
  query getCountries {
    continents {
      name
    }
  }
`;
export default withData(config)(() => {
  const { loading, data } = useQuery<ContinentsReq, ContinentsVars>(
    GET_COUNTRIES,
    {
      variables: {}
    }
  );
  const [items, setItems] = useState(data && data.continents);

  const handleClick = async () => {
    console.log("click");
    setItems([]);
    const { continents } = data;
    const reversedList = continents.reverse();
    setItems(reversedList);
  };

  return (
    <React.Fragment>
      <h3>Apollo Client Query</h3>
      {loading ? <p>Loading ...</p> : <List items={items} />}
      <button onClick={handleClick}>Reverse order</button>
    </React.Fragment>
  );

  // return (
  //   <div>
  //     <h3>Apollo Client Query</h3>
  //     {loading ? (
  //       <p>Loading ...</p>
  //     ) : (
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Country</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data &&
  //             data.continents.map(item => (
  //               <tr>
  //                 <td>{item.name}</td>
  //               </tr>
  //             ))}
  //         </tbody>
  //       </table>
  //     )}
  //   </div>
  // );
});
