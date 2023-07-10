
# Auth with Express and React

This project implements a basic authentication system using Express.js on the server side and React.js on the client side. It provides functionalities for user sign-up, login, and user profile management.


## Features

- User Sign-up: Allows users to create a new account by providing their name, username, email, password, and bio.

- User Login: Provides a login form for existing users to authenticate with their username and password.

- User Profile: Displays user details and allows users to view and update their profile information.


## Prerequisites

**Client:** React

**Server:** Node, Express


## Installation

Clone the repository:

```javascript
git clone https://github.com/your-username/auth-with-express-react.git
```

1. Change into the project directory:

```javascript
cd auth-with-express-react
```

2. Install the dependencies for the server:

```javascript
cd server
npm install
```

3. Configure the server:

- Create a .env file in the server directory.
- Define the following environment variables in the .env file:
    - PORT: The port number on which the server will run.
    - MONGODB_URL: The connection URL for your MongoDB database.
    - SECRET_TOKEN: A secret key used for JWT token generation.

4. Install the dependencies for the client:

```javascript
cd ../client
npm install
```
    
## Usage/Examples

1. Start the server:
```javascript
cd server
npm start
```
The server will start running on the specified port.

2. Start the client:
```javascript
cd client
npm start
```
The client application will be served on http://localhost:3000 and automatically open in your default browser
3. Use the application:
- Open the client application in your browser.
- Sign up with a new account or log in with an existing account.
- Explore the user profile page and update your profile information.



## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request on GitHub.

