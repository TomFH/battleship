# Battleship

## Installation

### Install nodejs

- Install [nvm][nvm]
- Install the nodejs version:

```
$ nvm install v17
$ nvm alias default v17
$ nvm use v17

# Example of output:
$ node --version
v17.5.0
```

### Check npm

Ensure [npm][npm] is at the right version:

```
# Example of output
$ npm --version
8.4.1
```

If the version is not correct, update it:

```
# Example to install npm 8.5.x:
$ npm install --global npm@^8.5
$ npm --version
8.5.1
```

### Install dependencies

```
# For a fresh clean install (ci as clean install):
$ npm ci

# To take advantage of the already installed pakcages:
$ npm install
```


## Run the app

```
$ npx ts-node --project tsconfig.src.json --require tsconfig-paths/register src/main.ts
```

To compile the app and execute it directly with node:

```
$ npx tsc --project tsconfig.src.json
$ node dist/src/src/main.js
```

To dump the compiled files and execute them:

```
$ npx tsc
$ node --require tsconfig-paths/register dist/main.js
```


### Run the tests

```
$ export NODE_OPTIONS='--enable-source-maps'; npx tsc --project tsconfig.tests.json
$ npx jasmine --config=jasmine.json
```

[npm]: https://www.npmjs.com/
[nvm]: https://github.com/nvm-sh/nvm
