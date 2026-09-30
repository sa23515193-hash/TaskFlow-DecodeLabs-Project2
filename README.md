TaskFlow — Full Stack Backend API
DecodeLabs Industrial Training Kit — Project 2

A professional RESTful Task Management API built with Node.js and Express.js, featuring structured backend architecture, input validation, HTTP status handling, error management, and a responsive frontend interface.

🌐 Project Overview

TaskFlow is a full-stack task management application developed as part of the DecodeLabs Industrial Training Kit — Project 2: Backend API Development.

The primary objective of this project is to demonstrate how a frontend application communicates with a backend server through RESTful API endpoints.

Rather than focusing only on visual design, TaskFlow focuses on the application's backend logic — receiving requests, processing user input, validating data, generating structured responses, handling errors, and returning appropriate HTTP status codes.

The project demonstrates the complete flow:

User Interaction
       ↓
Frontend Interface
       ↓
Fetch API Request
       ↓
Express.js Server
       ↓
API Routes
       ↓
Controllers
       ↓
Validation & Application Logic
       ↓
JSON Response
       ↓
Frontend Update

This project was designed to strengthen practical understanding of server-side development and API architecture.

🎯 Project Objectives

The project was developed around the core objectives of DecodeLabs Project 2:

Build a functional backend API
Create GET endpoints
Create POST endpoints
Handle user input
Return structured API responses
Perform basic data validation
Implement HTTP status codes
Handle invalid requests
Implement server-side error handling
Connect a frontend interface with backend APIs
Follow a clean and maintainable project structure

According to the project brief, the goal is to develop a simple backend API capable of handling application logic, user input, responses, and basic validation.

✨ Key Features
🧩 Task Management

TaskFlow provides a simple and interactive task management interface where users can:

Create new tasks
View existing tasks
View individual task details
Select task status
Submit task information to the backend
Receive API responses
See validation feedback
Handle API errors gracefully
🔌 RESTful API

The backend exposes structured REST API endpoints.

Available Endpoints
Method	Endpoint	Purpose
GET	/api/health	Check server health
GET	/api/tasks	Retrieve all tasks
GET	/api/tasks/:id	Retrieve a specific task
POST	/api/tasks	Create a new task
📡 API Documentation
1. Health Check
GET /api/health

Used to verify that the backend server is running correctly.

Example Response
{
  "success": true,
  "message": "TaskFlow API is running successfully"
}
📋 Get All Tasks
GET /api/tasks

Returns all available tasks from the application's data source.

Example Response
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Complete DecodeLabs Project",
      "description": "Build and test the backend API",
      "status": "pending"
    },
    {
      "id": 2,
      "title": "Prepare Documentation",
      "description": "Create professional project documentation",
      "status": "completed"
    }
  ]
}
🔎 Get Single Task
GET /api/tasks/:id

Retrieves a specific task using its ID.

Example:

GET /api/tasks/1

If the requested task exists, the API returns its information.

If it does not exist, the server responds with an appropriate 404 Not Found response.

➕ Create a New Task
POST /api/tasks

Creates a new task using data submitted from the client.

Request Body
{
  "title": "Complete API Documentation",
  "description": "Write detailed documentation for TaskFlow",
  "status": "pending"
}
Successful Response
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": 3,
    "title": "Complete API Documentation",
    "description": "Write detailed documentation for TaskFlow",
    "status": "pending"
  }
}
🛡️ Input Validation

TaskFlow validates incoming data before processing it.

Validation includes:

Required task title
Valid title length
Valid description
Valid task status
Proper request body structure

For example, submitting an empty title will not be accepted by the backend.

Example Error Response
{
  "success": false,
  "message": "Task title is required"
}

This prevents invalid data from being processed by the application.

🚦 HTTP Status Codes

The application demonstrates the use of standard HTTP status codes.

Status Code	Meaning	Example
200	OK	Successful GET request
201	Created	Successful task creation
400	Bad Request	Invalid user input
404	Not Found	Task does not exist
500	Internal Server Error	Unexpected server-side error

Using appropriate status codes makes APIs easier to understand, debug, integrate, and maintain.

🏗️ Project Architecture

TaskFlow follows a structured backend architecture rather than placing the entire application inside one JavaScript file.

TaskFlow
│
├── 📁 controllers
│   └── taskController.js
│
├── 📁 data
│   └── tasks.js
│
├── 📁 middleware
│   └── errorMiddleware.js
│
├── 📁 routes
│   └── taskRoutes.js
│
├── 📁 public
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── 📄 server.js
├── 📄 package.json
├── 📄 README.md
└── 📄 .gitignore
🧠 Backend Architecture
server.js

The main entry point of the application.

Responsibilities include:

Starting the Express server
Configuring middleware
Serving frontend files
Registering API routes
Handling API errors
Starting the application
routes/taskRoutes.js

Defines the application's task-related API routes.

GET  /api/tasks
GET  /api/tasks/:id
POST /api/tasks

Keeping routes separate makes the application easier to maintain and extend.

controllers/taskController.js

Contains the application's task-related logic.

The controller is responsible for:

Retrieving tasks
Finding individual tasks
Creating tasks
Validating incoming information
Returning structured responses
middleware/errorMiddleware.js

Provides centralized error handling.

Instead of repeating error-handling logic throughout the application, errors can be processed through dedicated middleware.

data/tasks.js

Contains the application's initial task data.

This project intentionally keeps the data layer simple so the main learning focus remains on API development, routing, request handling, validation, and server-side logic.

🎨 Frontend

TaskFlow also includes a responsive frontend interface that communicates with the backend API.

Frontend Technologies
HTML5
CSS3
JavaScript
Fetch API

The frontend is responsible for:

Displaying tasks
Collecting user input
Sending API requests
Processing JSON responses
Displaying success messages
Displaying validation errors
Updating the interface dynamically
🔄 Frontend ↔ Backend Communication

The application demonstrates real client-server communication.

For example:

User fills task form
        ↓
JavaScript captures form data
        ↓
POST /api/tasks
        ↓
Express receives request
        ↓
Controller validates data
        ↓
Task is processed
        ↓
JSON response returned
        ↓
Frontend displays result

This demonstrates one of the fundamental concepts of full-stack development:

The frontend handles user interaction while the backend handles application logic and data processing.

🛠️ Technology Stack
Frontend
Technology	Purpose
HTML5	Application structure
CSS3	Responsive interface
JavaScript	Client-side functionality
Fetch API	Backend communication
Backend
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Backend/API framework
REST API	Client-server communication
JSON	Data exchange
Middleware	Request/response processing
Development Tools
Visual Studio Code
Git
GitHub
Node.js
npm
🚀 Getting Started
Prerequisites

Before running the project, make sure you have installed:

Node.js
npm
Git
Visual Studio Code

You can verify Node.js:

node --version

Verify npm:

npm --version
📥 Installation

Clone the repository:

git clone https://github.com/sa23515193-hash/TaskFlow-DecodeLabs-Project2.git

Move into the project directory:

cd TaskFlow-DecodeLabs-Project2

Install dependencies:

npm install
▶️ Run the Application

Start the server:

npm start

The application runs locally at:

http://localhost:5000

Open the URL in your browser.

🧪 Testing the API

You can test the API using:

Browser
Postman
Thunder Client
VS Code REST Client
Frontend interface
Health Check
GET http://localhost:5000/api/health
Get Tasks
GET http://localhost:5000/api/tasks
Get Single Task
GET http://localhost:5000/api/tasks/1
Create Task
POST http://localhost:5000/api/tasks

Request body:

{
  "title": "Learn REST APIs",
  "description": "Practice GET and POST requests",
  "status": "pending"
}
🔐 Error Handling

TaskFlow includes structured error responses instead of allowing unexpected errors to break the application.

Examples include:

Missing Input
{
  "success": false,
  "message": "Task title is required"
}
Invalid Task
{
  "success": false,
  "message": "Task not found"
}
Server Error
{
  "success": false,
  "message": "Internal server error"
}

This provides predictable responses for frontend developers and API consumers.

📱 Responsive Design

The frontend interface is designed to work across different screen sizes.

The interface adapts to:

Desktop
Laptop
Tablet
Mobile

The objective is to combine a clean user interface with the primary focus of the project: backend functionality.

🎓 Learning Outcomes

Through this project, the following concepts were practiced:

Backend Development
Node.js fundamentals
Express.js
REST APIs
API routing
Controllers
Middleware
Request handling
Response handling
JSON data
Server-side validation
Error handling
Full Stack Concepts
Client-server architecture
HTTP requests
HTTP methods
HTTP status codes
Frontend/backend communication
API integration
Asynchronous JavaScript
Development Practices
Modular project structure
Separation of responsibilities
Meaningful API responses
Basic input validation
Error management
Git version control
GitHub project management
📌 Project Requirements Covered
Requirement	Implementation
Backend API	✅ Express.js
GET Endpoint	✅ Implemented
POST Endpoint	✅ Implemented
User Input	✅ Supported
API Responses	✅ JSON responses
Basic Validation	✅ Implemented
Error Handling	✅ Implemented
HTTP Status Codes	✅ Implemented
Frontend Integration	✅ Fetch API
Project Documentation	✅ README
GitHub Repository	✅ Published
💡 Future Improvements

TaskFlow provides a foundation that can be expanded into a production-level task management platform.

Potential future improvements include:

MongoDB/PostgreSQL integration
User authentication
JWT authorization
User-specific tasks
Edit and delete functionality
Task search
Task filtering
Task sorting
Pagination
Admin dashboard
API rate limiting
API documentation with Swagger/OpenAPI
Automated testing
Deployment with a production backend
Cloud database integration
🔮 Possible Production Architecture

A future production version could evolve into:

                    ┌──────────────────┐
                    │     Frontend     │
                    │ HTML/CSS/JS      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    REST API      │
                    │   Express.js     │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        Authentication   Controllers    Validation
              │              │              │
              └──────────────┼──────────────┘
                             ▼
                    ┌──────────────────┐
                    │    Database      │
                    │ MongoDB/Postgres │
                    └──────────────────┘
👩‍💻 Developer
Sawaira Ijaz

Computer Science Undergraduate | Full Stack Web Developer | AI & Data Enthusiast

This project was developed as part of the DecodeLabs Industrial Training Program — Full Stack Development Track.

Areas of Interest
Full Stack Web Development
Backend Engineering
REST API Development
Artificial Intelligence
Data Science
Machine Learning
Technical Content Writing
Software Engineering
🏆 DecodeLabs Project 2

Industrial Training Kit — Batch 2026

Project

Project 2 — Backend API Development

Focus

Building a reliable backend engine capable of receiving requests, processing application logic, validating information, and returning structured API responses.

The official project brief describes this milestone as the integration phase focused on backend API development and the connection between user interaction and server-side processing.

📂 Repository

🔗 GitHub Repository

https://github.com/sa23515193-hash/TaskFlow-DecodeLabs-Project2

⭐ Project Highlights
✔ RESTful API
✔ Express.js Backend
✔ GET & POST Endpoints
✔ Input Validation
✔ JSON Responses
✔ HTTP Status Codes
✔ Error Handling
✔ Modular Architecture
✔ Frontend API Integration
✔ Responsive UI
✔ GitHub Version Control
✔ Professional Documentation
📜 License

This project was developed for educational and portfolio purposes as part of the DecodeLabs Industrial Training Program.

🚀 Built with curiosity, consistency, and hands-on development.

TaskFlow — Turning frontend interactions into reliable backend operations.
