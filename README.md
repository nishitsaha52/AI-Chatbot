# 🤖 AI Chatbot

## Introduction 📚

Welcome to the **AI Chatbot** project! This application leverages advanced AI technologies to provide a versatile and interactive chatbot experience. Developed using ReactJS, NodeJS, MongoDB, and the OpenAI API, the chatbot features a range of capabilities from identifying image URLs to generating sci-fi images, making it a robust tool for various use cases.

![AI Chatbot](images/banner.png)

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [System Snapshots](#system-snapshots)
- [How to Contribute](#how-to-contribute)
- [License](#license)

---

## Technologies Used 💻

- **ReactJS**: Frontend framework for building user interfaces.
- **NodeJS**: Backend runtime for executing JavaScript code server-side.
- **MongoDB**: NoSQL database for storing user data and chatbot interactions.
- **OpenAI API**: Provides AI models for generating human-like text and images.

---

## Features ✨

- **🔍 Image URL Identifier**: Detects and identifies objects within images from URLs.
- **💼 Professional Chatbot**: Engages in professional conversations suitable for business environments.
- **🗣️ Human-like Chatbot**: Mimics human conversation with advanced natural language processing.
- **🔊 Text to Speech**: Converts chatbot responses into audible speech.
- **🎙️ Speech to Text**: Transcribes spoken input into text for chatbot processing.
- **🌌 Sci-fi Image Generator**: Creates futuristic and sci-fi themed images.
- **🖼️ Image Generator**: Generates images based on user input and prompts.
- **✍️ Paragraph Generator**: Produces coherent paragraphs of text from given prompts.
- **🔐 Integrated Google and GitHub Login**: Allows users to log in using their Google or GitHub accounts for a seamless experience.

---

## Installation 🛠️

### Prerequisites

- NodeJS (v14 or higher)
- MongoDB
- OpenAI API Key

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the Application**
   ```bash
   npm run dev
   ```

---

## Usage 🚀

1. **Open the Application**
   Navigate to `http://localhost:5000` in your web browser.

2. **Login**
   Use Google or GitHub to log in.

3. **Interact with the Chatbot**
   - Type or speak your questions and commands.
   - Use features like image generation, text to speech, and more.

---

## System Snapshots 📸

1. **Login Page**
   ![Login Page](images/login_page.png)
   - Integrated Google and GitHub login for user authentication.

2. **Chat Interface**
   ![Chat Interface](images/chat_interface.png)
   - Engage with the chatbot through text or speech.

3. **Image Generation**
   ![Image Generation](images/image_generation.png)
   - Generate images based on user prompts.

4. **Sci-fi Image Generator**
   ![Sci-fi Image Generator](images/sci_fi_image_generator.png)
   - Create futuristic sci-fi themed images.

---

## How to Contribute 🤝

1. **Fork the Repository**
   Click the "Fork" button on the top right of the repository page.

2. **Clone the Forked Repository**
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes and Commit**
   ```bash
   git add .
   git commit -m "Add your message here"
   ```

5. **Push to Your Forked Repository**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   Go to the original repository and click "New Pull Request".

---
