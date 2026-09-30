# TaskFlow API — DecodeLabs Project 2

A beginner-friendly Full Stack Development project built for **DecodeLabs Industrial Training Kit — Project 2: Backend API Development**.

## Requirements covered
- GET API endpoint
- POST API endpoint
- User input and JSON responses
- Basic input validation
- HTTP status codes: 200, 201, 400, 404, 500
- Express server and REST-style routing
- Frontend connected to the API when running locally
- GitHub Pages-safe frontend fallback for the static UI

## Tech stack
- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- Fetch API

## Run locally
1. Install Node.js 18+.
2. Open this project folder in VS Code.
3. Open Terminal and run:

```bash
npm install
npm start
```

4. Open http://localhost:5000

## API endpoints

### Health
`GET /api/health`

### Get all tasks
`GET /api/tasks`

### Get one task
`GET /api/tasks/:id`

### Create a task
`POST /api/tasks`

Example JSON:

```json
{
  "title": "Build DecodeLabs API",
  "description": "Create and test the backend API.",
  "status": "pending"
}
```

## Validation
- Title is required.
- Title must contain at least 3 characters.
- Title maximum: 100 characters.
- Description maximum: 500 characters.
- Status must be `pending`, `in-progress`, or `completed`.

## Important deployment note
GitHub Pages hosts static files and does not execute a Node/Express server. The repository therefore keeps the complete backend source for evaluation and makes the frontend gracefully switch to browser localStorage when it is opened on a static GitHub Pages URL. The API itself should be demonstrated locally at `http://localhost:5000` or deployed to a Node-compatible host if a public API URL is required.
