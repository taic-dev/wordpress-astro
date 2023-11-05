interface WPGraphQLParams {
  query: string,
  variables?: object
}

export async function wpQuery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_URL}`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables,
    })
  });
  
  if(!res.ok) {
    console.log('error');
    return [];
  }

  const { data } = await res.json();
  return data;
}