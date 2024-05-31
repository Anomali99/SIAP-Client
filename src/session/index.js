const Session = {
  setItem: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (key) => {
    sessionStorage.removeItem(key);
  },
  clear: () => {
    sessionStorage.clear();
  },
};

export default Session;
