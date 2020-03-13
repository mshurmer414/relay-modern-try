import React, { useState } from "react";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";
import List from "../src/List";

const query = `{
  continents {
    name
  }
}`;

const ContinentsList = () => {
  const [result] = useQuery({ query: query, variables: {} });
  console.log({ result });
  let loading;

  if (result.fetching || !result.data) {
    loading = true;
  }

  if (result.error) {
    return null;
  }

  if (result.data) {
    loading = false;
  }

  const { data } = result;

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
      <h3>URQL</h3>
      {loading ? <p>Loading ...</p> : <List items={items} />}
      <button onClick={handleClick}>Reverse order</button>
    </React.Fragment>
  );

  // return (
  //   <ul>
  //     {result.data.continents.map(({ name }) => (
  //       <li>{name}</li>
  //     ))}
  //   </ul>
  // );
};

const Root = () => (
  <div>
    <ContinentsList />
  </div>
);

export default withUrqlClient({ url: "https://countries.trevorblades.com/" })(
  Root
);
