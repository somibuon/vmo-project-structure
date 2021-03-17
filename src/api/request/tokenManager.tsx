type LogoutFunction = () => void;

interface TokenManager {
  token: string;
  logout: Array<LogoutFunction>;
  setToken: (token: string) => void;
  setLogoutMethod: (logout: LogoutFunction) => void;
  doLogout: () => void;
}

export const tokenManager: TokenManager = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Njc1ODk0OTM3MiIsIl9pZCI6IjVmNzZmOGUwMmE1ZjFmM2Y0ZjE5MWZjNyIsImVtYWlsIjoiZHV5LnRyYW5Adm1vZGV2LmNvbSIsImlhdCI6MTYzNDYxNDUwMn0.bNTtNyY8kgaqR4_39tz3pVQ9BFOHw6Q9Oc7yXFzcsic', // hard code token
  logout: [],
  setToken(t: string) {
    this.token = t;
  },
  setLogoutMethod(m) {
    this.logout = [m];
  },
  doLogout() {
    this.logout.forEach((i: LogoutFunction) => i());
  },
};
