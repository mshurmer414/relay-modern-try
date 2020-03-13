import React, { useState } from "react";
import { NextPage } from "next";
import { query, ApiResponse, gqlQuery } from "../src/utils";
import List from "../src/List";

const Fetch: NextPage<ApiResponse> = data => {
  const { continents } = data;

  const [items, setItems] = useState(continents);

  const handleClick = async () => {
    console.log("click");
    setItems([]);
    const res = await gqlQuery<ApiResponse>({ query });
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

Fetch.getInitialProps = async () => {
  return await gqlQuery<ApiResponse>({
    query
  });
};

export default Fetch;
