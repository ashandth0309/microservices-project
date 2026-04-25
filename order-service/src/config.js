const isProd = process.env.NODE_ENV === "production";

const USER_URL = isProd
  ? "https://microservices-project-one.vercel.app"
  : "http://localhost:3000";

const PRODUCT_URL = isProd
  ? "https://microservices-project-53aq.vercel.app"
  : "http://localhost:3001";

module.exports = { USER_URL, PRODUCT_URL };