# Yomu

A modern blog application built with the MERN stack, where stories come to life through the art of reading and writing.

## 🚀 Live Demo

- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API**: [https://your-api.onrender.com](https://your-api.onrender.com)

## 🛠️ Tech Stack

### Frontend
- React 17
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (file uploads)
- bcrypt (password hashing)

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

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for Vercel (frontend) and Render (backend).

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
