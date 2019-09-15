# Install

1. `cd api`
1. Edit `.lando.yml`, the port
1. `lando start`
1. `export ENVIRONMENT_TYPE=local`
1. Edit `ecosystem.config.js`, the db port for local
1. `make db_create db_populate`
1. `make start`
1. `http://localhost:4400/`
