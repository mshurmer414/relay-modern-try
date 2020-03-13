import React, { useState } from "react";
import { NextPage } from "next";
import { query as gqquery, ApiResponse } from "../src/utils";
import List from "../src/List";
import { request } from "graphql-request";

const fetcher = query => request("https://countries.trevorblades.com/", query);

const Swr: NextPage<ApiResponse> = data => {
  const { continents } = data;

  const [items, setItems] = useState(continents);

  const handleClick = async () => {
    console.log("click");
    setItems([]);
    const res = await useSWR(gqquery, fetcher);
    const reversedList = res.continents.reverse();
    setItems(reversedList);
  };

  return (
    <React.Fragment>
      <List items={items} />
      <button onClick={handleClick}>Reverse order</button>
    </React.Fragment>
  );
};

Swr.getInitialProps = async () => {
  return await useSWR(gqquery, fetcher);
};

export default Swr;
