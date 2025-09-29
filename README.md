# 🔐 JWT Authentication App

**JWT Authentication App** is a web application that demonstrates secure user authentication using **JSON Web Tokens (JWT)**. Built with **HTML, CSS, JavaScript, and React**, this project was created as part of a hands-on course on authentication and authorization.

---

## 💡 Overview

This app covers the essential features of JWT-based authentication:  

- **User Registration (Sign Up)**  
- **User Login**  
- **Protected Home Page** accessible only to authenticated users  
- **JWT token storage and validation**  
- **Logout functionality**  

The app shows how to handle user sessions securely without storing sensitive data in the frontend.

---

## 🏠 Pages & Features

### Home Page
- Displays a welcome message to the authenticated user.  
- Shows user-specific information fetched from the backend.  
- Redirects unauthenticated users to the Login page.

### Sign Up Page
- Allows new users to register with a **username/email** and **password**.  
- Validates inputs and shows error messages for invalid data.  
- Sends registration requests to the backend API.

### Login Page
- Allows existing users to log in with their credentials.  
- Receives a **JWT token** from the backend upon successful authentication.  
- Stores the token securely (e.g., in `localStorage` or `httpOnly` cookie).
- Redirects authenticated users to the Home page.

---

## ⚙️ Tech Stack & Highlights

- **Frontend:** HTML, CSS, JavaScript, React  
- **Backend:** Node.js/Express (or your chosen backend)  
- **Authentication:** JSON Web Tokens (JWT)  
- **State Management:** React Hooks  
- **API Calls:** Axios  
- **Routing:** React Router  

---

## 📝 Lessons Learned

- How to implement **JWT-based authentication** in a web app.  
- Handling **protected routes** and redirecting unauthenticated users.  
- Managing **user sessions** securely in the frontend.  
- Working with **async API calls** and error handling in React.  

---

## 📂 Project Structure

```
src/
├── api/          # API helper functions for login/signup
├── components/   # Reusable UI components
├── pages/        # Home, Login, Sign Up pages
├── App.tsx       # Main app component
└── main.tsx      # Entry point
public/
├── index.html    # HTML entry point
└── assets/       # Images, icons, placeholders
```

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/up33anas/JWT-Authentication.git
cd jwt-auth-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env` file and add your backend API URL:
```
REACT_APP_API_URL=https://your-backend-api.com
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
