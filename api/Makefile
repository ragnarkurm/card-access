SERVICE=CardAccessApi

start: ensure_pm2 ensure_env stop
	pm2 startOrRestart ecosystem.config.js --env '$(ENVIRONMENT_TYPE)'

stop: ensure_pm2
	-pm2 delete $(SERVICE)

install: ensure_pm2
	npm install

install_global:
	npm install -g pm2

db:
	lando ssh -u root -c 'mysql ca'

db_drop:
	API_MODE=drop make start

db_create: stop
	API_MODE=create make start

db_populate: stop
	API_MODE=populate make start

ensure_env:
	@if [ -z $(ENVIRONMENT_TYPE) ]; then \
	  echo "Expecting environment variable ENVIRONMENT_TYPE." ; \
	  echo "Use one of the following:" ; \
	  echo ; \
	  echo "$$ export ENVIRONMENT_TYPE=local" ; \
	  echo "$$ export ENVIRONMENT_TYPE=dev" ; \
	  echo "$$ export ENVIRONMENT_TYPE=stg" ; \
	  echo "$$ export ENVIRONMENT_TYPE=prod" ; \
	  echo ; \
	  exit 1 ; \
	fi

ensure_pm2:
	@if ! type pm2 >/dev/null 2>&1 ; then \
	  echo "pm2 not installed." ; \
	  echo "Run following commands:" ; \
	  echo ; \
	  echo "$$ sudo mkdir -pv /usr/local/lib/node_modules" ; \
	  echo "$$ sudo chown -R $$(id -u):$$(id -g) /usr/local/lib/node_modules" ; \
	  echo "$$ npm -g install pm2" ; \
	  echo ; \
	  exit 1 ; \
	fi
