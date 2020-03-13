import useSWR from "swr";
import { request } from "graphql-request";
import React, { useState } from "react";
import List from "../src/List";

const API = "https://countries.trevorblades.com/";

const fetcher = query => request(API, query);

export default function App() {
  const query = `{
    continents {
      name
    }
  }`;

  const { data, error } = useSWR(query, fetcher);
  if (error) {
    console.log(error);
    return null;
  }
  let loading;

  if (!data) {
    loading = true;
  }

  if (data) {
    loading = false;
  }

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
      <h3>GraphQl Request</h3>
      {loading ? <p>Loading ...</p> : <List items={items} />}
      <button onClick={handleClick}>Reverse order</button>
    </React.Fragment>
  );
}
