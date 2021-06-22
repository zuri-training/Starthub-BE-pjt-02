# Starthub-BE-pjt-02

## Description

Starthub.com is a website where individuals that have passed through the start.ng program or are currently going through the training can showcase their skills and growth through the course of the program. This would feature a gallery of pages/apps/sites built by members during the program. It will be a repository of the great work being done by start.ng’ members It will be an advertising platform for the organizers of start.ng to showcase the worth of their interns and how the program changes lives.

This is the backend part of the project

---

## Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- multer

## Requirements

For development, you will only need Node.js and a node global package, Yarn or npm, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/zuritraining/Starthub-BE-pjt2
    $ cd Starthub-BE-pjt2
    $ npm install

## Setup

###### create a .env file and add the folling varibles to it

```javascript
 PORT = your desired port
 NODE_ENV = development
 MONGO_URI = your mongodb connection string // xxxx xxxx xxxxx.
 SECRET = your desired secreet
```

## Running the project

    $ npm run dev

## Simple build for production

    $ npm build

## Routes

- ###### <a href="./docs/Readme.md">Routes Docs</a>
- <a href="http://localhost:4000">StartHub</a>
