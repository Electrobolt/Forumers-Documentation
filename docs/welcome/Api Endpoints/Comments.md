---
sidebar_position: 4
---

The endpoints allow you to create, retrieve, update, and delete comments, as well as manage likes and dislikes associated with comments.

### Base URL
```
/api/public/operation/commentaires
```

### 1. Create a Comment

**Endpoint:** `POST /api/public/operation/commentaires/`

**Description:** Creates a new comment.

**Request Body:**
```json
{
  "content": "string",
  "authorId": "UUID",
  "postId": "UUID",
  "commentaireParentId": "UUID (optional)"
}
```

**Response:**
- `200 OK`: Successfully created the comment.
- `400 Bad Request`: Invalid input or missing required fields.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/commentaires/" \
-H "Content-Type: application/json" \
-d '{
  "content": "This is a comment.",
  "authorId": "123e4567-e89b-12d3-a456-426614174000",
  "postId": "123e4567-e89b-12d3-a456-426614174001",
  "commentaireParentId": "123e4567-e89b-12d3-a456-426614174002"
}'
```

### 2. Get Comments by Post

**Endpoint:** `GET /api/public/operation/commentaires/post/{postId}`

**Description:** Retrieves all comments associated with a specific post, including nested replies.

**Path Parameters:**
- `postId` (UUID): The ID of the post.

**Response:**
- `200 OK`: Successfully retrieved the comments.
- `400 Bad Request`: Invalid post ID.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/commentaires/post/{postId}"
```

### 3. Get Comments by Author

**Endpoint:** `GET /api/public/operation/commentaires/author/{authorId}`

**Description:** Retrieves all comments made by a specific author.

**Path Parameters:**
- `authorId` (UUID): The ID of the author.

**Response:**
- `200 OK`: Successfully retrieved the comments.
- `400 Bad Request`: Invalid author ID.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/commentaires/author/{authorId}"
```

### 4. Update a Comment

**Endpoint:** `PUT /api/public/operation/commentaires/{commentaireId}`

**Description:** Updates an existing comment by its ID.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to update.

**Request Body:**
```json
{
  "content": "string"
}
```

**Response:**
- `200 OK`: Successfully updated the comment.
- `400 Bad Request`: Invalid input or comment not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X PUT "http://localhost:8080/api/public/operation/commentaires/{commentaireId}" \
-H "Content-Type: application/json" \
-d '{
  "content": "Updated comment content."
}'
```

### 5. Add a Like to a Comment

**Endpoint:** `POST /api/public/operation/commentaires/{commentaireId}/like`

**Description:** Adds a like to a comment.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to like.

**Request Parameters:**
- `memberId` (UUID): The ID of the member liking the comment.

**Response:**
- `200 OK`: Successfully liked the comment.
- `400 Bad Request`: Member already liked the comment.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/commentaires/{commentaireId}/like?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 6. Remove a Like from a Comment

**Endpoint:** `DELETE /api/public/operation/commentaires/{commentaireId}/like`

**Description:** Removes a like from a comment.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to unlike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member unliking the comment.

**Response:**
- `200 OK`: Successfully unliked the comment.
- `400 Bad Request`: Member did not like the comment.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/commentaires/{commentaireId}/like?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 7. Add a Dislike to a Comment

**Endpoint:** `POST /api/public/operation/commentaires/{commentaireId}/dislike`

**Description:** Adds a dislike to a comment.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to dislike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member disliking the comment.

**Response:**
- `200 OK`: Successfully disliked the comment.
- `400 Bad Request`: Member already disliked the comment.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/commentaires/{commentaireId}/dislike?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 8. Remove a Dislike from a Comment

**Endpoint:** `DELETE /api/public/operation/commentaires/{commentaireId}/dislike`

**Description:** Removes a dislike from a comment.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to undislike.

**Request Parameters:**
- `memberId` (UUID): The ID of the member undisliking the comment.

**Response:**
- `200 OK`: Successfully undisliked the comment.
- `400 Bad Request`: Member did not dislike the comment.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/commentaires/{commentaireId}/dislike?memberId=123e4567-e89b-12d3-a456-426614174000"
```

### 9. Delete a Comment

**Endpoint:** `DELETE /api/public/operation/commentaires/{commentaireId}`

**Description:** Deletes a comment by marking it as deleted.

**Path Parameters:**
- `commentaireId` (UUID): The ID of the comment to delete.

**Response:**
- `204 No Content`: Successfully deleted the comment.
- `400 Bad Request`: Comment not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/commentaires/{commentaireId}"
```

:::tip
Ensure that the `commentaireId`, `postId`, `authorId`, `commentaireParentId`, and `memberId` provided in the requests are valid UUIDs.
:::

:::warning
The `commentLikes` and `commentDislikes` fields in the request body should be arrays of valid UUIDs representing the users who liked or disliked the comment.
:::