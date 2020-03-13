import fetch from "isomorphic-unfetch";

export const gqlQuery = async <T>({ query }: { query: string }): Promise<T> => {
  try {
    const res = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ query })
    });

    const resJson: any = await res.json();

    console.log("fetch", resJson);

    return resJson.data;
  } catch (e) {
    return ({ menu: { children: [] } } as unknown) as T;
  }
};

export const query = `{
  continents {
    name
  }
}`;

export type Continent = {
  name: string;
};

export type ApiResponse = {
  continents: Continent[];
};
