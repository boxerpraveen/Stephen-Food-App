import axios from "axios";

const API_URL =
  "pR2KuPljuya7J3hbTEWZFF-tDUTkzodYLXFiUwhN1bX2HXGe1ou_teNb8_aLw7EaOZwxCzR9_zozIMsqhYqUMkqZDy2OgkJ9luKH_SAXp9uugKyHWtV7YbRnnLxzYnYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_URL}`,
  },
});
