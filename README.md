# Thumblify

Thumblify is a full-stack web application built for creators to generate AI-powered YouTube thumbnails quickly and efficiently. The platform provides an optimized workflow for generating, recreating, storing, and managing thumbnail concepts using modern AI tools and a MERN stack architecture.

The application integrates Groq for prompt optimization, Pollinations for image generation, JWT authentication for secure access, and MongoDB for persistent storage.

---

## Project Overview

The goal of this project is to simplify the thumbnail creation process for content creators by providing:

- AI-generated thumbnail concepts
- Prompt optimization
- Thumbnail recreation/editing workflow
- Personal thumbnail library
- Community feed
- Credit-based usage system

Users can generate thumbnails from a topic or recreate existing ideas using image references and targeted modifications.

---

## Features

### Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes

### AI Thumbnail Generation
- Generate thumbnails from prompts
- Recreate thumbnails using image references
- Prompt enhancement using Groq AI
- Aspect ratio selection
- Style presets
- Color palette selection

### Thumbnail Management
- Save generated thumbnails
- Personal thumbnail history
- Delete thumbnails
- Download thumbnails

### Community Features
- Public thumbnail feed
- Like system
- Trending ideas section

### Credit System
- New users receive initial credits
- Credits decrease after successful generations

---

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Context API
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Groq SDK

---

## Project Structure

```bash
ai-thumbnail-generator/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Environment Variables

### Backend `.env`

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key

GROQ_MODEL=llama-3.3-70b-versatile

CLIENT_URL=http://localhost:5173

PORT=5000
```

### Frontend `.env`

Create a `.env` file inside the `client` folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Varunvk17/thumblify-ai-thumbnail-generator.git
```

---

### Install Backend Dependencies

```bash
cd server
npm install
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get authenticated user |

---

### AI Generation

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ai/generate-thumbnail` | Generate thumbnail |

---

### Thumbnails

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/thumbnails` | Get user thumbnails |
| DELETE | `/api/thumbnails/:id` | Delete thumbnail |
| GET | `/api/thumbnails/community` | Get community feed |
| POST | `/api/thumbnails/community/:id/like` | Like thumbnail |

---

## Future Improvements

- Payment integration
- AI title generation
- Advanced image editing
- Cloud image storage
- Analytics dashboard
- Drag-and-drop editor

---

## Author

Charan / Varun

GitHub:
https://github.com/Varunvk17

---

## License

This project is licensed under the MIT License.
