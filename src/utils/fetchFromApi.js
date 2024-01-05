let baseUrl = "https://fakestoreapi.com";

async function fetchFromApi(path) {
  const res = await fetch(`${baseUrl}/${path}`);
  const data = await res.json();
  return data;
}

export default fetchFromApi;
