const fetcher = async ({ url, method, body, json = true }) => {
  if (!body) throw new Error('Body is required');
  const res = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Something went wrong');
  if (json) {
    const data = await res.json();
    return data.data;
  }
}

export const register = async (user) => {
  return await fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
  });
}

export const signin = async (user) => {
  return await fetcher({
    url: '/api/signin',
    method: 'POST',
    body: user,
  });
}
