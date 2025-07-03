# Yomu

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-brightgreen?style=for-the-badge&logo=vercel)](https://yomu-rho.vercel.app)
[![API Status](https://img.shields.io/badge/API-Render-blue?style=for-the-badge&logo=render)](https://yomu.onrender.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-green?style=for-the-badge&logo=mongodb)](https://mongodb.com)

A modern blog application built with the MERN stack, where stories come to life through the art of reading and writing.

## 🚀 Live Demo

- **Frontend**: [https://yomu-rho.vercel.app](https://yomu-rho.vercel.app) - Main blog application
- **Backend API**: [https://yomu.onrender.com](https://yomu.onrender.com) - REST API server

### API Endpoints
- **Health Check**: [https://yomu.onrender.com/api](https://yomu.onrender.com/api)
- **Posts**: [https://yomu.onrender.com/api/posts](https://yomu.onrender.com/api/posts)
- **Users**: [https://yomu.onrender.com/api/users](https://yomu.onrender.com/api/users)
- **Categories**: [https://yomu.onrender.com/api/categories](https://yomu.onrender.com/api/categories)

### 🧪 Test the App
1. Visit the [live demo](https://yomu-rho.vercel.app)
2. Register a new account or login
3. Create your first blog post
4. Upload images and explore categories
5. Update your profile settings

> **Note**: The backend may take 30-60 seconds to wake up on first visit (Render free tier limitation)

## 🛠️ Tech Stack

### Frontend
- **React 17** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client with centralized configuration
- **CSS3** - Custom styling
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment & Infrastructure
- **Frontend**: Vercel (CDN, automatic deployments)
- **Backend**: Render (container hosting)
- **Database**: MongoDB Atlas (cloud database)
- **File Storage**: Server filesystem (via Multer)

## 📁 Project Structure

```
yomu/
├── api/                 # Backend (Express.js API)
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── images/         # Uploaded images
│   ├── index.js        # Server entry point
│   └── package.json
├── client/             # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── context/    # React context
│   │   └── App.js
│   └── package.json
├── DEPLOYMENT.md       # Deployment guide
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/yomu.git
cd yomu
```

### 2. Setup Backend
```bash
cd api
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm run dev
```

### 3. Setup Frontend
```bash
cd ../client
npm install
cp .env.example .env
# Edit .env if needed
npm start
```

### 4. Open your browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🔧 Environment Variables

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017/yomu
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_IMAGES_URL=http://localhost:5000/images
REACT_APP_NAME=Yomu
```

## 📦 Deployment

### 🌐 Live Hosting

**Frontend (Vercel)**
- **URL**: [https://yomu-rho.vercel.app](https://yomu-rho.vercel.app)
- **Platform**: Vercel
- **Auto-deploy**: Connected to GitHub main branch
- **Build Command**: `npm run build`
- **Output Directory**: `build`

**Backend (Render)**
- **URL**: [https://yomu.onrender.com](https://yomu.onrender.com)
- **Platform**: Render
- **Auto-deploy**: Connected to GitHub main branch
- **Build Command**: `npm install`
- **Start Command**: `node index.js`

**Database**
- **Platform**: MongoDB Atlas
- **Connection**: Secure connection string via environment variables

### 🚀 Deployment Guide

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Deploy:**
1. **Fork this repository**
2. **Frontend (Vercel):**
   - Connect your GitHub repo to Vercel
   - Set root directory to `client`
   - Add environment variables for API URLs
3. **Backend (Render):**
   - Connect your GitHub repo to Render
   - Set root directory to `api`
   - Add environment variables for MongoDB and CORS
4. **Database:**
   - Create MongoDB Atlas cluster
   - Add connection string to backend environment variables

## ✨ Features

- 🔐 User authentication (register/login)
- ✍️ Create, edit, and delete blog posts
- 🖼️ Image upload for posts and profile pictures
- 📱 Responsive design
- 🏷️ Category system
- 👤 User profiles and settings
- 🔍 Search and filter posts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Create React App
- Icons from Font Awesome
- Fonts from Google Fonts
