---
sidebar_position: 3
---

# Posts

## Overview
This documentation provides details on how to use the endpoints for managing posts within the forum application. The endpoints allow you to create, retrieve, update, and delete posts, as well as manage likes and dislikes associated with posts.

## Base URL
```
/api/public/operation/posts
```

## Endpoints

### 1. Create a Post
**Endpoint:** `POST /api/public/operation/posts/`

**Description:** Creates a new post.

**Request Body:**
```json
{
  "authorId": "UUID",
  "communityId": "UUID",
  "title": "string",
  "content": "string",
  "categoriesIds": ["UUID1", "UUID2", ...]
}
```

**Request Parameters:**
- `memberId` (UUID): The ID of the member creating the post.

**Response:**
- `200 OK`: Successfully created the post.
- `400 Bad Request`: Invalid input or member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/posts/?memberId=123e4567-e89b-12d3-a456-426614174000" \
-H "Content-Type: application/json" \
-d '{
  "authorId": "123e4567-e89b-12d3-a456-426614174001",
  "communityId": "123e4567-e89b-12d3-a456-426614174002",
  "title": "New Post",
  "content": "This is the content of the new post.",
  "categoriesIds": ["123e4567-e89b-12d3-a456-426614174003"]
}'
```

### 2. Get All Posts
**Endpoint:** `GET /api/public/operation/posts/all`

**Description:** Retrieves all posts.

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/all"
```

### 3. Get a Post by ID
**Endpoint:** `GET /api/public/operation/posts/{postId}`

**Description:** Retrieves a post by its ID.

**Path Parameters:**
- `postId` (UUID): The ID of the post to retrieve.

**Request Parameters:**
- `memberId` (UUID): The ID of the member retrieving the post.

**Response:**
- `200 OK`: Successfully retrieved the post.
- `403 Forbidden`: Member not part of the community.
- `404 Not Found`: Post not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/{postId}?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 4. Get Posts by Community ID
**Endpoint:** `GET /api/public/operation/posts/community/{communityId}`

**Description:** Retrieves all posts associated with a specific community.

**Path Parameters:**
- `communityId` (UUID): The ID of the community.

**Request Parameters:**
- `memberId` (UUID): The ID of the member retrieving the posts.

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/community/{communityId}?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 5. Get Posts by Author ID
**Endpoint:** `GET /api/public/operation/posts/author/{authorId}`

**Description:** Retrieves all posts by a specific author.

**Path Parameters:**
- `authorId` (UUID): The ID of the author.

**Request Parameters:**
- `memberId` (UUID): The ID of the member retrieving the posts.

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/author/{authorId}?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 6. Get Posts by Category ID
**Endpoint:** `GET /api/public/operation/posts/categorie/{categorieId}`

**Description:** Retrieves all posts associated with a specific category.

**Path Parameters:**
- `categorieId` (UUID): The ID of the category.

**Request Parameters:**
- `memberId` (UUID): The ID of the member retrieving the posts.

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/categorie/{categorieId}?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 7. Get Latest Posts
**Endpoint:** `GET /api/public/operation/posts/latest`

**Description:** Retrieves the most recent posts.

**Request Parameters:**
- `limit` (int, optional): The maximum number of posts to retrieve (default is 10).

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/latest?limit=5"
```

### 8. Get Latest Posts by Community ID
**Endpoint:** `GET /api/public/operation/posts/community/{communityId}/latest`

**Description:** Retrieves the most recent posts for a specific community.

**Path Parameters:**
- `communityId` (UUID): The ID of the community.

**Request Parameters:**
- `limit` (int, optional): The maximum number of posts to retrieve (default is 10).
- `memberId` (UUID): The ID of the member retrieving the posts.

**Response:**
- `200 OK`: Successfully retrieved the posts.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/posts/community/{communityId}/latest?limit=5&memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 9. Update a Post
**Endpoint:** `PUT /api/public/operation/posts/{postId}`

**Description:** Updates an existing post by its ID.

**Path Parameters:**
- `postId` (UUID): The ID of the post to update.

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "categoriesIds": ["UUID1", "UUID2", ...]
}
```

**Request Parameters:**
- `memberId` (UUID): The ID of the member updating the post.

**Response:**
- `200 OK`: Successfully updated the post.
- `403 Forbidden`: Member not part of the community.
- `404 Not Found`: Post not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X PUT "http://localhost:8080/api/public/operation/posts/{postId}?memberId=123e4567-e89b-12d3-a456-426614174000" \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Post Title",
  "content": "Updated post content.",
  "categoriesIds": ["123e4567-e89b-12d3-a456-426614174003"]
}'
```

### 10. Add a Like to a Post
**Endpoint:** `POST /api/public/operation/posts/{postId}/like`

**Description:** Adds a like to a post.

**Path Parameters:**
- `postId` (UUID): The ID of the post to like.

**Request Parameters:**
- `memberId` (UUID): The ID of the member liking the post.

**Response:**
- `200 OK`: Successfully liked the post.
- `400 Bad Request`: Member already liked the post.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/posts/{postId}/like?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 11. Remove a Like from a Post
**Endpoint:** `DELETE /api/public/operation/posts/{postId}/like`

**Description:** Removes a like from a post.

**Path Parameters:**
- `postId` (UUID): The ID of the post to unlike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member unliking the post.

**Response:**
- `200 OK`: Successfully unliked the post.
- `400 Bad Request`: Member did not like the post.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/posts/{postId}/like?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 12. Add a Dislike to a Post
**Endpoint:** `POST /api/public/operation/posts/{postId}/dislike`

**Description:** Adds a dislike to a post.

**Path Parameters:**
- `postId` (UUID): The ID of the post to dislike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member disliking the post.

**Response:**
- `200 OK`: Successfully disliked the post.
- `400 Bad Request`: Member already disliked the post.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/posts/{postId}/dislike?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 13. Remove a Dislike from a Post
**Endpoint:** `DELETE /api/public/operation/posts/{postId}/dislike`

**Description:** Removes a dislike from a post.

**Path Parameters:**
- `postId` (UUID): The ID of the post to undislike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member undisliking the post.

**Response:**
- `200 OK`: Successfully undisliked the post.
- `400 Bad Request`: Member did not dislike the post.
- `403 Forbidden`: Member not part of the community.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/posts/{postId}/dislike?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 14. Delete a Post
**Endpoint:** `DELETE /api/public/operation/posts/{postId}`

**Description:** Deletes a post by marking it as deleted.

**Path Parameters:**
- `postId` (UUID): The ID of the post to delete.

**Request Parameters:**
- `memberId` (UUID): The ID of the member deleting the post.

**Response:**
- `204 No Content`: Successfully deleted the post.
- `403 Forbidden`: Member not part of the community.
- `404 Not Found`: Post not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/posts/{postId}?memberId=123e4567-e89b-12d3-a456-426614174000"
```

## Error Handling
- **400 Bad Request:** Indicates that the request could not be understood or was missing required parameters.
- **403 Forbidden:** Indicates that the member is not part of the community.
- **404 Not Found:** Indicates that the requested resource could not be found.
- **409 Conflict:** Indicates that the request could not be completed due to a conflict with the current state of the resource.
- **500 Internal Server Error:** Indicates that an unexpected error occurred on the server.

## Notes
- Ensure that the `postId`, `communityId`, `authorId`, `categorieId`, and `memberId` provided in the requests are valid UUIDs.
- The `categoriesIds` field in the request body should be an array of valid UUIDs representing the categories associated with the post.

## Contact
For any questions or issues, please contact the development team at [support@forum.com].
