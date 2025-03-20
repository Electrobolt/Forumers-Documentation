---
sidebar_position: 3
---

# API Endpoints

The Forumers API provides various endpoints to manage communities, categories, posts, and comments. Below is a detailed list of available endpoints along with their methods, descriptions, and parameters.

### 1. Authentication

- **Endpoint**: `/api/public/auth`
- **Method**: POST
- **Description**: Handles user authentication.
- **Sub-endpoints**:
  - `/login`: Log in a user.
  - `/register`: Register a new user.

**Example Request**
```http
POST https://api.forumers.com/v1/api/public/auth/login
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "token": "your_jwt_token"
  }
}
```

---

### 2. Communities

- **Endpoint**: `/api/public/operation/communities`
- **Method**: POST, GET, PUT, DELETE
- **Description**: Manages communities.
- **Sub-endpoints**:
  - `/`: POST request to create a new community.
  - `/{communityId}`: GET, PUT, DELETE requests for managing a community.
  - `/{communityId}/name`: GET request to fetch the name of a specific community.
  - `/key/{keyId}`: GET request to fetch communities associated with a specific key.

**Example Request**
```http
POST https://api.forumers.com/v1/api/public/operation/communities
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "New Community",
  "type": "PUBLIC",
  "description": "Description of the new community",
  "creatorId": "user1",
  "members": ["user1", "user2"]
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "name": "New Community",
    "type": "PUBLIC",
    "description": "Description of the new community",
    "creatorId": "user1",
    "members": [],
    "creationDate": "2025-02-10T12:00:00Z",
    "keyId": "key123"
  }
}
```

---

### 3. Categories

- **Endpoint**: `/api/public/operation/categories`
- **Method**: POST, GET, PUT, DELETE
- **Description**: Manages categories within communities.
- **Sub-endpoints**:
  - `/community/{communityId}`: GET request to fetch all categories associated with a specific community.
  - `/{communityId}`: POST request to create a new category within a specified community.
  - `/{categoryId}`: PUT request to update an existing category. DELETE request to delete a category.

**Example Request**
```http
POST https://api.forumers.com/v1/api/public/operation/categories/community/communityId123
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "New Category"
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "name": "New Category",
    "communityId": "communityId123"
  }
}
```

---

### 4. Posts

- **Endpoint**: `/api/public/operation/posts`
- **Method**: POST, GET, PUT, DELETE
- **Description**: Manages posts within communities.
- **Sub-endpoints**:
  - `/`: POST request to create a new post.
    - `?memberId={userId}`: To verify the membership if the community is private.
  - `/latest`: GET request to fetch the latest posts.
    - `?limit={number}`: To fetch a specific number of latest posts.
  - `/all`: GET request to fetch all posts.
  - `/community/{communityId}`: GET request to fetch all posts for a specific community.
  - `/author/{userId}`: GET request to fetch all posts created by a specific user.
  - `/{postId}`: GET, PUT, DELETE requests for managing a post.
  - `/{postId}/like`: POST request to like a post.
  - `/{postId}/dislike`: POST request to dislike a post.

**Example Request**
```http
POST https://api.forumers.com/v1/api/public/operation/posts
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "title": "New Post",
  "content": "Content of the new post",
  "authorId": "user123",
  "communityId": "community123",
  "categoriesId": ["category1", "category2"]
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "title": "New Post",
    "content": "Content of the new post",
    "authorId": "user123",
    "communityId": "community123",
    "categoriesId": ["category1", "category2"],
    "creationDate": "2025-02-10T12:00:00Z",
    "modificationDate": null,
    "suppressionDate": null,
    "numberOfLikes": 0,
    "numberOfDislikes": 0,
    "postLikes": [],
    "postDislikes": []
  }
}
```

---

### 5. Comments

- **Endpoint**: `/api/public/operation/comments`
- **Method**: POST, GET, PUT, DELETE
- **Description**: Manages comments on posts.
- **Sub-endpoints**:
  - `/`: POST request to add a new comment.
    - `?memberId={userId}`: To verify the membership if the community is private.
  - `/post/{postId}`: GET request to fetch all comments for a specific post.
  - `/author/{userId}`: GET request to fetch all comments made by a specific user.
  - `/{commentId}`: PUT request to update an existing comment. DELETE request to delete a comment.
  - `/{commentId}/like`: POST request to like a comment.
  - `/{commentId}/dislike`: POST request to dislike a comment.

**Example Request**
```http
POST https://api.forumers.com/v1/api/public/operation/comments
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "content": "This is a comment",
  "authorId": "user123",
  "postId": "post123"
}
```

**Example Response**
```json
{
  "status": "success",
  "data": {
    "id": "1",
    "content": "This is a comment",
    "authorId": "user123",
    "postId": "post123",
    "creationDate": "2025-02-10T12:00:00Z",
    "modificationDate": null,
    "suppressionDate": null,
    "numberOfLikes": 0,
    "numberOfDislikes": 0,
    "commentLikes": [],
    "commentDislikes": []
  }
}
```

This section provides a comprehensive overview of the available API endpoints for managing communities, categories, posts, and comments. Refer to the [Getting Started](/docs/welcome/get-started) page for information on setting up and authenticating your API requests.