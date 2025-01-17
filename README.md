# Full Stack Chat Application

## Overview
This is a feature-rich chat application built using modern web technologies, designed to provide a seamless and responsive user experience for real-time communication.

## Features

### User Features
- **Real-Time Messaging**: Users can chat with their contacts in real-time.
- **Notifications**: Users can see the number of unseen messages received.
- **Search Functionality**: Easily search for contacts within the application.
- **Profile Management**:
  - Upload a new profile image.
  - Remove or change the current profile image.

### Frontend
- Built with **React**.
- **Responsive Design**: Optimized for various screen sizes, ensuring accessibility across devices.
- **Dynamic Data**: Contacts dynamically from the database and  messages are updated in real-time using WebSocket technology.

### Backend
- **Authentication**: Secure user authentication implemented using **JWT (JSON Web Tokens)**.
- **File Uploads**:
  - Profile images are uploaded using **Multer**.
  - Uploaded images are stored securely on **Cloudinary**.
- **Database Management**:
  - Data for contacts and messages is stored in **MongoDB** using **Mongoose**.

- **Real-Time Updates**: Integrated **Socket.IO** for instant communication.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **CSS**: For styling and ensuring responsive design.

### Backend
- **Node.js** and **Express.js**: For creating RESTful APIs.
- **Mongoose**: For interacting with the MongoDB database.
- **Socket.IO**: For real-time communication.
- **Jose**: For secure authentication by JWT.
- **Multer** and **Cloudinary**: For handling and storing user-uploaded images.

### Database
- **MongoDB**: For storing user data, contacts, and message history.

## Getting Started

### Prerequisites
- **Node.js** and **npm** (or **Yarn**) installed on your system.
- **MongoDB** database set up and running.
- A **Cloudinary** account for managing image uploads.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd chat-application
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   Or if you're using Yarn:
   ```bash
   yarn install
   ```

### Environment Variables
Create a `.env` file in the root directory and include the following variables:
```env
MONGO_DB_PASSWORD=<your-mongodb-password>
MONGO_DB_URL=<your-mongodb-connection-string>
PORT=<your-empty-port>
JWT_SECRET=<your-jwt-secret>

CLOUDINARY_URL=<your-cloudinary-url>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

### Running the Application
1. Start the backend server:
   ```bash
   npm run server
   ```
   Or:
   ```bash
   yarn server
   ```
2. Start the frontend development server:
   ```bash
   npm start
   ```
   Or:
   ```bash
   yarn start
   ```

### Usage
- Open the application in your browser at `http://localhost:3000`.
- Register or log in to your account.
- Start chatting, searching for contacts, and managing your profile.


