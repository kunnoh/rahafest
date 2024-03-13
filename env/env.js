const prod = {
  production: true,
  endpoint: "https://api.rahafest.com",
  // chatapi "http://192.168.88.172:8000",
  // chatapi: "http://192.168.88.153:8000",
  local: "https://chat.rahafest.com",
  // local: "http://192.168.88.249:8000",
};

export default prod;

export const dev = {
  production: false,
  endpoint: "https://api.rahafest.com",
  // local: "http://localhost:8000",
  local: "https://chat.rahafest.com",
};

// export const prod = {
//   production: true,
//   endpoint: "https://api.rahafest.com",
//   chatapi: "chat.rahafest.com"
// }

// export const firebaseConfig = {}
