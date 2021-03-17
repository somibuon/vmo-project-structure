export function login(username: string, password: string) {
  return fetch('http://some-url/auth/login', {
    body: JSON.stringify({
      username,
      password,
    }),
  });
}
