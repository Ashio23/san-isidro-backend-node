#  CencoPay BFF mobile - NodeJs - Nest

## Index

- [CencoPay BFF mobile - NodeJs - Nest](#cencopay-bff-mobile---nodejs---nest)
  - [Index](#index)
  - [Architecture](#architecture)
  - [Branching Model](#branching-model)
    - [How to name branches?](#how-to-name-branches)
    - [Creating and merging branches](#creating-and-merging-branches)
  - [Approval process Pull Request](#approval-process-pull-request)
  - [Code review process](#code-review-process)
  - [Launch project with docker](#launch-project-with-docker)
  - [Launch project without docker](#launch-project-without-docker)
  - [Run test with docker](#run-test-with-docker)
  - [Launch project with serverless](#launch-project-with-serverless)
## Architecture

![alt Architecture image](docs/code-architecture-bff.png)

This project uses hexagonal architecture and implements it as the image shows.

At the core of the project is the [domain](src/domain) where the entities, the ports (these are interfaces which will later be implemented by the infrastructure layer adapters) and use cases with their respective business rules are found.

In the [infrastructure layer](src/infrastructure/) we use the [NestJs](https://nestjs.com/) framework through which adapters are implemented that are injected into the domain so that it can perform its functions by connecting with external systems and exposing an api to our clients.

## Branching Model

### How to name branches?

* Development type `
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  style,
  'test'
`
* Jira card id `For example: WC-123`
* Feature friendly name `this-is-a-feature`

The name of a branch is for example: **feat/WC-123/a-feature**

### Creating and merging branches

* `git checkout` to develop and update local branch with remote branch.
* To add a development we always leave with a develop branch, named as explained before.
* Once the development is finished, create an auxiliary branch, create a Pull Request to merge it with **dev**
* Tested in the development environment and passed to the QA team, any further modifications should be done in the original branch and then merged into the auxiliary branch
* Once the development has been validated by the QA team, a Pull Request is sent to **master**

## Approval process Pull Request

Each Pull Request that is created must comply with the [template](pull_request_template.md).

The [code review process](#code-review-process) is carried out following the corresponding guidelines, once it has at least one approval, the Pull Request can be merged.

## Code review process

When performing code review, the following must be validated:

- It has coupled logic between technology-specific things and system-specific things.
domain?
- Is the code scalable?
- Is the code performant?
- Is the code easy to maintain?
- Are the interfaces well modeled?
- Add test to new functionality?
- The code should be able to be understood without having to do an analysis
thorough of it.
- Does not contain sensitive or confidential information (credentials, links to
environments, etc.).
- Errors are validated and a correct response is given in cases of failure?
- No temporary code used only at development time? for example console logs meaningless
- If a discussion is opened, it must be closed by the person who started it.

## Launch project with docker

1. Clone repository

```
git clone git@github.com:Cencosud-Cencopay/cw-cl-template-node.git
```

2. Clone file `.env.example` to `.env` and modify the variables if necessary

3. Run project like so:

```
npm run docker:up
```

6. If project working you will see the documentation here `http://localhost:3000/api/v1`

## Launch project without docker

1. Clone repository

```
git clone git@github.com:Cencosud-Cencopay/cw-cl-template-node.git
```

2. Install dependencies

```
npm i
```

3. Clone file `.env.example` to `.env` and modify the variables if necessary

4. Run the tests to validate that everything is OK

```
npm test
```

5. Run project like so:

```
npm run dev
```

6. If project working you will see the documentation here `http://localhost:3000/api/v1`

## Run test with docker

1. Clone repository

```
git clone git@github.com:Cencosud-Cencopay/cw-cl-template-node.git
```
2. Clone file `.env.example` to `.env` and modify the variables if necessary

3. Execute the following command

```
npm run docker-test:up
```
```This will display on the console the results of all the tests.```

## Launch project with serverless

1. Execute the following command
```
npm run up-sl-off
```
Note: in this case the file dev was chosen, but put the file that you want to run

2. if everything went well, it will run on port 4000 and the host is as follows

```
http://localhost:4000/dev/cw-cl-template/api/v1
```
