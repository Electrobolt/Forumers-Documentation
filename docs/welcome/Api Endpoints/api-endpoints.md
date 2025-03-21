---
sidebar_position: 3
---

# API Endpoints

The Forumers API provides various endpoints to manage discussions, questions, experiences, and interactions. Below is a detailed list of available endpoints along with their methods, descriptions, and parameters.

### 1. Create Discussion

- **Endpoint**: `/discussions`
- **Method**: POST
- **Description**: Initiates a new discussion on a specified topic.
- **Parameters**:
  - `title`: string (required) - The title of the discussion.
  - `content`: string (required) - The content of the discussion.
  - `tags`: array (optional) - Tags associated with the discussion for categorization.

**Example Request**
```http
POST https://api.forumers.com/v1/discussions
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "title": "Introduction to API Development",
  "content": "Let's discuss the basics of API development.",
  "tags": ["API", "Development"]
}
```

#### Example Response
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "title": "Introduction to API Development",
    "created_at": "2025-02-10T12:00:00Z",
    "author": "JohnDoe"
  }
}
```

---

### 2. Ask Question

- **Endpoint**: `/questions`
- **Method**: POST
- **Description**: Allows users to pose questions to the community.
- **Parameters**:
  - `question`: string (required) - The question being asked.
  - `tags`: array (optional) - Tags associated with the question for better visibility.

**Example Request**
```http
POST https://api.forumers.com/v1/questions
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "question": "What are the best practices for API security?",
  "tags": ["API", "Security"]
}
```

#### Example Response
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "question": "What are the best practices for API security?",
    "created_at": "2025-02-10T12:30:00Z",
    "author": "JaneSmith"
  }
}
```

---

### 3. Share Experience

- **Endpoint**: `/experiences`
- **Method**: POST
- **Description**: Users can share their testimonials and experiences.
- **Parameters**:
  - `experience`: string (required) - The content of the experience being shared.

**Example Request**
```http
POST https://api.forumers.com/v1/experiences
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "experience": "I learned a lot about API development through this community!"
}
```

#### Example Response
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "experience": "I learned a lot about API development through this community!",
    "created_at": "2025-02-10T13:00:00Z",
    "author": "JohnDoe"
  }
}
```

---

### 4. Engage Constructively

- **Endpoint**: `/interactions`
- **Method**: POST
- **Description**: Facilitates constructive interactions among users.
- **Parameters**:
  - `message`: string (required) - The message or comment being sent.
  - `discussionId`: string (required) - The ID of the discussion where the interaction is taking place.

**Example Request**
```http
POST https://api.forumers.com/v1/interactions
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "message": "Great insights! I totally agree with your points.",
  "discussionId": "1"
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "message": "Great insights! I totally agree with your points.",
    "created_at": "2025-02-10T14:00:00Z",
    "author": "JaneSmith"
  }
}
```




This section provides a comprehensive overview of the available API endpoints for managing discussions, questions, experiences, and interactions. Refer to the [Getting Started](/docs/welcome/get-started) page for information on setting up and authenticating your API requests.
