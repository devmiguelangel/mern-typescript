const config = {
  port: process.env.PORT || 4000,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.MONGO_INITDB_DATABASE,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

export default config;
