module.exports = {

  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   *
   * Usage: pm2 start ecosystem.config.js --env stg
   */

  apps : [
    {
      name: "CardAccessApi",
      script: "api.js",
      node_args: "-r babel-register",
      autorestart: !process.env.API_MODE,
      env_prod: {
        API_PORT: "4000",
        // GRAPHQL_INTROSPECTION: "true",
        // GRAPHQL_PLAYGROUND: "true",
        NODE_ENV: "production"
      },
      env_stg: {
        API_PORT: "4000",
        GRAPHQL_INTROSPECTION: "true",
        GRAPHQL_PLAYGROUND: "true",
        NODE_ENV: "stg"
      },
      env_dev: {
        API_PORT: "4000",
        GRAPHQL_INTROSPECTION: "true",
        GRAPHQL_PLAYGROUND: "true",
        NODE_ENV: "dev"
      },
      env_local: {
        API_PORT: "4400",
        DB_NAME: "ca",
        DB_USER: "ca",
        DB_PASS: "ca",
        DB_HOST: "localhost",
        DB_PORT: "32200",
        GRAPHQL_INTROSPECTION: "true",
        GRAPHQL_PLAYGROUND: "true",
        NODE_ENV: "local",
      }
    }
  ]
};
