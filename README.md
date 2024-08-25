# Secure Messaging Web App

## Overview

This is a secure messaging web app built using ReactJS, and Typescript. The app features user registration and authentication using JWT with private/public key cryptography, real-time messaging using WebSockets, and encrypted storage for messages.

## Features

- **User Registration and Authentication**: Users can sign up with a name, email, and password. Existing users can log in using email and password. JWT is used for authentication.
- **Contact Management**: Users can view their contacts in a sidebar and start or continue chat sessions.
- **Real-Time Messaging**: Messages are transported in real-time using WebSockets.
- **Message Encryption**: Messages are stored encrypted using symmetric encryption.

## Getting Started

Follow these steps to run the app locally:

### 1. Clone the Repository

```bash
git clone https://github.com/reemanshi0794/secure-messaging-app.git
npm i
npm start


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
