# CTFalcon

A CTF for Poolesville High School

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Contributing](#contributing)
- [Workflows](#workflows)
  - [Staging](#staging)
  - [Production](#production)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning](#cloning)
    - [Branch Access Development](#branch-access-development)
  - [Setting up a local database](#setting-up-a-local-database)
  - [Running the app](#running-the-app)

# Contributing

We welcome all contributions to CTFalcon! We believe this project is a great way to get started with development workflows and web development. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on contributing.

# Workflows
## Staging
This project uses [Neon Branches](https://neon.tech/docs/introduction/branching) and Github Actions to deploy previews for every pull request. This offers a production-like testing environment and should be used to test for bugs.
## Production
This project uses Github Actions to deploy to production. This will be done automatically when a pull request is merged into `main`.
## Linting
This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io) to lint and format files. This will be run automatically on every push, but will block pull requests. Please run it locally with `npm run lint`.

# Getting Started

This section provides a high-level start guide for running this app.
We suggest using VSCode as your IDE, but any text editor will work.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- NPM & NPX (should be installed with Node.js)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

## Cloning

If you don't have branch access to the repository, please follow this guide. If you do, please follow the [Branch Access Development](#branch-access-development) guide.
[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository.
Clone your fork of the repository

```bash
git clone https://github.com/<YOURUSERNAME>/ctfalcon-new.git && cd ctfalcon-new
# or if you want to clone it to the current directory
# git clone https://github.com/Poolesville-Computer-Team/ctfalcon-new.git .
```

### Branch Access Development

Clone the repository

```bash
git clone https://github.com/Poolesville-Computer-Team/ctfalcon-new.git && cd ctfalcon-new
# or if you want to clone it to the current directory
# git clone https://github.com/Poolesville-Computer-Team/ctfalcon-new.git .
```

[Create a new branch](https://github.com/Poolesville-Computer-Team/ctfalcon-new/branches)

Create a new branch locally with the same name.

```bash
git checkout -b <BRANCHNAME>
```

## Setting up a local database

Create a new database

```bash
createdb ctfalcon
```

Enter the database

```bash
psql ctfalcon
```

Check port number

```sql
\conninfo
```

Duplicate and rename `.env.example` to `.env`

Set `DATABASE_URL` and `DIRECT_URL` to `postgres://user:password@localhost:<PORTNUMBER>/ctfalcon`

You should use the user provided by `\conninfo` and there shouldn't be a password by default, so your connection string should look like `postgres://<USER>@localhost:<PORTNUMBER>/ctfalcon`

## Running the app

Install dependencies

```bash
npm install
```

Run migrations on database

```bash
npx prisma migrate dev
```

Seed the database

```bash
npx prisma db seed
```

Run the app

```bash
npm run dev
```

You should be able to find the app at [localhost:5173](http://localhost:5173)

To make changes to production, check out the [Contributing](#contributing) section.