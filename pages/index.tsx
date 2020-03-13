import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Testing the different options for GraphQL client</h1>
      <ul>
        <li>
          <Link href="/react-query">
            <a>React Query</a>
          </Link>
        </li>
        <li>
          <Link href="/urql">
            <a>urql</a>
          </Link>
        </li>
        <li>
          <Link href="/graphql-request">
            <a>Graphql Request</a>
          </Link>
        </li>
        <li>
          <Link href="/relay-modern">
            <a>Relay Modern</a>
          </Link>
        </li>
        <li>
          <Link href="/apollo-client">
            <a>Apollo Client</a>
          </Link>
        </li>
        <li>
          <Link href="/fetch">
            <a>Fetch</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
