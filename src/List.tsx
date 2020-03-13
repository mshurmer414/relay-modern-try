import * as React from "react";
import { Continent } from "./utils";

type Props = {
  items?: Continent[];
};

const List: React.FunctionComponent<Props> = ({ items = [] }) => {
  if (items.length === 0) {
    return <div>fetching</div>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
