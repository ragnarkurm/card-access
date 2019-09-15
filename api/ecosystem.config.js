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
      env_prod: {
        API_PORT: "4000",
        // GRAPHQL_BROWSER: "true",
        NODE_ENV: "prod"
      },
      env_stg: {
        API_PORT: "4000",
        GRAPHQL_BROWSER: "true",
        NODE_ENV: "stg"
      },
      env_dev: {
        API_PORT: "4000",
        GRAPHQL_BROWSER: "true",
        NODE_ENV: "dev"
      },
      env_local: {
        API_PORT: "4400",
        GRAPHQL_BROWSER: "true",
        NODE_ENV: "local"
      }
    }
  ]
}
