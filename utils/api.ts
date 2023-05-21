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

export const register = (user) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
  });
}

export const signin = (user) => {
  return fetcher({
    url: '/api/signin',
    method: 'POST',
    body: user,
  });
}

export const createNewProject = (name) => {
  return fetcher({
    url: '/api/projects',
    method: 'POST',
    body: { name },
    json: true,
  });
}
