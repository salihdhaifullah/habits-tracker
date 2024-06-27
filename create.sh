#!/bin/bash

cd ./src

create_page() {
  ng generate component pages/$1 --skip-tests=true --inline-style=true
}

create_component() {
  ng generate component components/$1 --skip-tests=true --inline-style=true
}

create_service() {
  ng generate service services/$1 --skip-tests=true
}

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <type> <name>"
  echo "Types: page, component, service"
  exit 1
fi

TYPE=$1
NAME=$2

case $TYPE in
  page)
    create_page $NAME
    ;;
  component)
    create_component $NAME
    ;;
  service)
    create_service $NAME
    ;;
  *)
    echo "Invalid type. Use 'page', 'component', or 'service'."
    exit 1
    ;;
esac

echo "$TYPE $NAME created successfully!"