# expenseTracker

A full-stack Expense Tracker application built with a React front-end and a Node.js/Express backend.  
Track income, expenses, categories, and maintain a clean financial overview — all in one place.

---

## 🧱 Tech Stack

- **Frontend**: React, React Router, Vite  
- **Backend**: Node.js, Express, MongoDB  
- **Auth**: JWT / Cookie-based authentication  
- **API**: RESTful API for all expense operations  
- **Misc**: ESLint / Prettier, dotenv, Toastify notifications  

---

## 🚀 Features

- User Registration, Login & Logout  
- JWT Authentication with secure cookies  
- Add / Edit / Delete transactions  
- Categorize transactions (Food, Travel, Bills, etc.)  
- View total income, total expenses, and remaining balance  
- Filter transactions by category or date  
- Responsive UI for mobile + desktop  
- Clean, fast, modern React interface  

---

## 🗂️ Folder Structure

root/
│
├─ frontend/
│ ├─ src/
│ ├─ public/
│ ├─ package.json
│
├─ server/
│ ├─ controller/
│ ├─ model/
│ ├─ routes/
│ ├─ utils/
│ ├─ server.js
│ ├─ package.json
│
├─ .gitignore
└─ README.md


---

## 📦 Getting Started (Local Setup)

1. Clone the repository:
   ```bash
   git clone https://github.com/kaishavgupta/expenseTracker.git
   cd expenseTracker


Install backend dependencies:

cd server
npm install
npm run dev   # or npm start


Install frontend dependencies:

cd ../frontend
npm install
npm run dev   # start React dev server


Now open your browser at:

http://localhost:3000

🧪 Running Tests

(Only if tests are configured)

# Backend tests
cd server
npm test

# Frontend tests
cd ../frontend
npm test

📝 Deployment

Build the frontend using:

npm run build


Host backend on services like Render, Heroku, or AWS.

Configure database + production settings accordingly.

🤝 Contributing

Fork the repo

Create your feature branch:

git checkout -b feature/MyFeature


Commit your changes:

git commit -m "Add my feature"


Push the branch:

git push origin feature/MyFeature


Open a Pull Request