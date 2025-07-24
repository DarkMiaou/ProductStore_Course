# Product Store

A full‑stack web application for managing and showcasing products.

## Tech Stack

* **Frontend:** React.js, Chakra UI
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Styling & UI:** Chakra UI
* **Deployment Ready:** Easily deployable to platforms like Heroku, Vercel, or your own server

## Features

* 🔥 **RESTful API** for creating, reading, updating, and deleting products
* 📱 **Responsive UI** built with React.js and Chakra UI
* 🐞 **Comprehensive Error Handling** on both client and server
* 🚀 **Deployment Guide** included to get your app online in minutes
* ⚙️ **Environment‑based Configuration** via a `.env` file

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+ recommended)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
* A running MongoDB instance (local or hosted)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DarkMiaou/ProductStore_Course.git
   ```

2. **Setup `.env` file** in the root directory with the following entries:

   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5001
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

* **Build the frontend**

  ```bash
  npm run build
  ```

* **Start the server**

  ```bash
  npm run start
  ```

Your API will be available at `http://localhost:5001` and the frontend at `http://localhost:5001` (or `http://localhost:3000` if running React in development mode).

## Deployment

1. Ensure your `.env` variables are set in your deployment platform.
2. Run the build script and start command as above.
3. Follow your platform’s guide to connect and deploy (Heroku, Vercel, etc.).

---