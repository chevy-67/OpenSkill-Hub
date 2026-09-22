# OpenSkill-Hub

  In colleges, during hackathons or team projects, students often struggle to find peers with the right skill sets for collaboration. To address this, we’ve developed a unified platform where students can post their project requirements and the roles they’re looking to fill. This allows students from different technical domains to connect and work together effectively.

---

## Features

- User authentication (Signup / Login)
- Create and browse project posts
- Comment and interact on posts
- Responsive React frontend
- REST API built with Express.js

---

## Tech Stack

**Frontend:** React, Vite  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**Deployment:** AWS (EC2 / S3 planned)  

---

## Installation

Follow these steps to run the project locally

1. Clone the repository:
   ```bash
   https://github.com/chevy-67/OpenSkill-Hub.git
   ```

2. Navigate to the project folder:
   ```bash
   cd OpenSkill-Hub
   ```

3. Install dependencies for both backend and frontend:
   ```bash
   npm install
   cd frontend
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB Atlas URL and other secrets.

5. Start the development servers:
   ```bash
   # backend
   node server.js

   # frontend
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` (or whatever port Vite shows).

---

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/users/signup` | Register new user |
| POST | `/api/users/login` | Login existing user |
| GET | `/api/generic/getpost` | Fetch all posts |
| POST | `/api/users/create_post` | Add a new post |

---

## Contributing

Contributions, feature requests, and feedback are welcome!  
If you’d like to improve this project, feel free to fork the repo and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

**Bharath** **Akilandeshwaran**  
_Building OpenSkill-Hub to make student collaboration easier and smarter._

---

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
