### README for MERN Authentication Project

# MERN Authentication Project

This project is a basic authentication system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and bcrypt for hashing passwords.

## Features

- User Registration
- User Login
- Password Hashing with bcrypt

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt

## Installation and Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

- Node.js
- MongoDB

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pran2805/mern-authentication.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mern-authentication
   ```

3. **Install the dependencies:**

   For the backend:

   ```bash
   cd Servere
   npm install
   ```

   For the frontend:

   ```bash
   cd Client
   npm install
   ```

### Setting Up Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```
MONGO_URL=your_mongodb_connection_string
PORT=8000
```

### Running the Application

1. **Start MongoDB:**

   Make sure your MongoDB server is running. You can start it using the following command if you have it installed locally:

   ```bash
   mongodb
   ```

2. **Start the backend server:**

   Navigate to the `backend` directory and run:

   ```bash
   npm run dev
   ```

   The backend server will start on `http://localhost:8000`.

3. **Start the frontend server:**

   Navigate to the `frontend` directory and run:

   ```bash
   npm run dev
   ```

   The frontend server will start on `http://localhost:5173`.

### Testing the Application

- **Registration:**  create a new user.
- **Login:** log in with the registered user credentials.
- **Protected Routes:** After logging in, try to access protected routes to ensure the authentication works correctly.

## Benefits of This Project

1. **Secure Authentication:** By using bcrypt, passwords are securely hashed before being stored in the database, protecting user credentials.
2. **Learning Opportunity:** This project is an excellent way to learn and understand the MERN stack and how to integrate frontend and backend technologies.
3. **Reusability:** The authentication system can be reused in other projects that require user authentication, saving development time.
4. **Scalability:** Built with scalability in mind, it can be extended to include more features like email verification, password reset, etc.
5. **Hands-On Experience:** Gain practical experience with modern web development technologies and best practices for authentication and security.

Feel free to reach out if you have any questions or run into any issues!