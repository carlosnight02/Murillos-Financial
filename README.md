ct Murillo-Financial

Web site for the compagny Murillo's Financial Center Inc.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

Node.js
Angular requires Node.js version 8.x or 10.x.

To check your version, run node -v in a terminal/console window.

To get Node.js, go to nodejs.org.

npm package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This Quick Start uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

### Installing

Step 1:
Configure global Folder for npm to avoid permission error:

On the command line, in your home directory, create a directory for global installations:
 mkdir ~/.npm-global
Configure npm to use the new directory path:
 npm config set prefix '~/.npm-global'
In your preferred text editor, open or create a ~/.profile file and add this line:
 export PATH=~/.npm-global/bin:$PATH
On the command line, update your system variables:
 source ~/.profile

Step 2:

Install the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:

content_copy
npm install -g @angular/cli

Step 3:
Install npm dependencies after clone the project

Go to the project Folder

run npm install

To build the project
run ng build

To start the project
run ng serve --open

## Authors

* **Carlos Murillo** - *Initial work* - [carlosnight02](https://github.com/carlosnight02)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for details
