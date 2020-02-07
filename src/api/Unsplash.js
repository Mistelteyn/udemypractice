import axios from "axios";

export default axios.create({
  headers: {
    Authorization:
      "Client-ID 87dbbcae8385b07e17f42079e78c93b050649e6a0c7b7e5e35ed14666a224517"
  },
  baseURL: "https://api.unsplash.com"
});
