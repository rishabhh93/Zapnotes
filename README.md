# Zapnotes 📚✍️

[Live Demo](https://zapnotes.onrender.com)

Zapnotes is a **full-featured Notes Buying platform** built with the **MERN stack**. It allows students to seamlessly browse, upload, and purchase academic notes. The platform integrates secure file storage, fast retrieval, and a smooth payment experience.  

---

## 🚀 Features
- 📄 **Browse & Purchase Notes** – Explore and buy academic notes easily.  
- ☁️ **Cloudinary Integration** – High-performance file storage with fast upload & retrieval.  
- 💳 **Secure Payments with Stripe** – Reliable, secure, and fast checkout experience.  
- 🔐 **Authentication** – User login & registration with secure JWT-based authentication.  
- 🛒 **Shopping Cart & Checkout** – Add notes to cart and purchase seamlessly.  
- 📱 **Responsive UI** – Clean and responsive design for desktop & mobile.  

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Cloud Storage**: Cloudinary  
- **Payments**: Stripe  

---

## 📸 Screenshots  
*(Add screenshots of your app here for better presentation)*  

---

## ⚙️ Installation & Setup
Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/zapnotes.git
cd zapnotes

# Install server dependencies
cd backend
npm install

# Install client dependencies
cd ../frontend
npm install

# Create a .env file in the backend with the following:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret

# Run backend
cd backend
npm start

# Run frontend
cd ../frontend
npm start
