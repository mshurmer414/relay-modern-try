/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Continents_continents$ref: FragmentReference;
declare export opaque type Continents_continents$fragmentType: Continents_continents$ref;
export type Continents_continents = $ReadOnlyArray<{|
  +name: ?string,
  +$refType: Continents_continents$ref,
|}>;
export type Continents_continents$data = Continents_continents;
export type Continents_continents$key = $ReadOnlyArray<{
  +$data?: Continents_continents$data,
  +$fragmentRefs: Continents_continents$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Continents_continents",
  "type": "Continent",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '757c8ec83a72e8ff7744d153af9b124d';

module.exports = node;
