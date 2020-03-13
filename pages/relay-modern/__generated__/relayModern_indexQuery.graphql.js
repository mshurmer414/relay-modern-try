/**
 * @flow
 * @relayHash 91f7119be83c63295cac513869b42e98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Continents_continents$ref = any;
export type relayModern_indexQueryVariables = {||};
export type relayModern_indexQueryResponse = {|
  +continents: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Continents_continents$ref
  |}>
|};
export type relayModern_indexQuery = {|
  variables: relayModern_indexQueryVariables,
  response: relayModern_indexQueryResponse,
|};
*/


/*
query relayModern_indexQuery {
  continents {
    ...Continents_continents
  }
}

fragment Continents_continents on Continent {
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "relayModern_indexQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "continents",
        "storageKey": null,
        "args": null,
        "concreteType": "Continent",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Continents_continents",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "relayModern_indexQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "continents",
        "storageKey": null,
        "args": null,
        "concreteType": "Continent",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "relayModern_indexQuery",
    "id": null,
    "text": "query relayModern_indexQuery {\n  continents {\n    ...Continents_continents\n  }\n}\n\nfragment Continents_continents on Continent {\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '1b7fd9c1a95efaee2f542cbdb2a6d0c7';

module.exports = node;
