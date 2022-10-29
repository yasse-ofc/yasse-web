# Yasse Web <!-- omit in toc -->

The web app to search for the most up-to-date series sources using Yasse API.

## Table of Contents <!-- omit in toc -->

- [Want to contribute to Yasse?](#want-to-contribute-to-yasse)
- [Run with Docker Compose](#run-with-docker-compose)
- [Install with Docker](#install-with-docker)

## Want to contribute to Yasse?

[Read this](https://github.com/yasse-ofc/.github/blob/main/CONTRIBUTING.md) and follow our [Code of Conduct](https://github.com/yasse-ofc/.github/blob/main/CODE_OF_CONDUCT.md).


## Run with Docker Compose

1. Clone the repository

```bash
git clone https://github.com/yasse-ofc/yasse-web.git
```

2. Build the project

```bash
docker-compose build
```

3. Run the project

```bash
docker-compose up
```

4. Open your browser and go to `http://localhost:3000`

---

## Install with Docker

1. Clone the repository

```bash
git clone https://github.com/yasse-ofc/yasse-web.git
```

2. Build the image

```bash
docker build -t yasse-web . --no-cache --arg NODE_ENV=development
```

3. Run the container

```bash
docker run --rm -p 3000:3000 --name yasse-web yasse-web --arg NODE_ENV=development
```

4. Open your browser and go to `http://localhost:3000`

---
