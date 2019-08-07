const pokemonApiUrl = 'https://pokeapi.co/api/v2'


const safeFetch = async (url: string, fetchOptions?: RequestInit) => {
  const resp = await fetch(url, fetchOptions)
  if (400 <= resp.status) throw Error(`error sending request, recieved HTTP status code: ${resp.status}`);
  return resp;
}


export const getFirstTwenty = async () => {
  try {
    const resp = await safeFetch(`${pokemonApiUrl}/pokemon`)
    const body = await resp.json()
    console.log(body);
    return body.results;
  } catch (error) {
    console.error(error)
  }
}