---
sidebar_position: 2
---

The endpoints allow you to create, retrieve, update, and delete categories, as well as manage posts associated with categories.

### Base URL
```
/api/public/operation/categories
```

### 1. Create a Category
**Endpoint:** `POST /api/public/operation/categories/{communityId}`

**Description:** Creates a new category within the specified community.

**Path Parameters:**
- `communityId` (UUID): The ID of the community to which the category will be added.

**Request Body:**
```json
{
  "categorieName": "string",
  "postsIds": ["UUID1", "UUID2", ...]
}
```

**Response:**
- `200 OK`: Successfully created the category.
- `400 Bad Request`: Invalid input or community does not exist.
- `409 Conflict`: Category with the same name already exists.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/categories/{communityId}" \
-H "Content-Type: application/json" \
-d '{
  "categorieName": "New Category",
  "postsIds": ["123e4567-e89b-12d3-a456-426614174000"]
}'
```

### 2. Get a Category by ID
**Endpoint:** `GET /api/public/operation/categories/{categorieId}`

**Description:** Retrieves a category by its ID.

**Path Parameters:**
- `categorieId` (UUID): The ID of the category to retrieve.

**Response:**
- `200 OK`: Successfully retrieved the category.
- `404 Not Found`: Category not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/categories/{categorieId}"
```

### 3. Get Categories by Community ID
**Endpoint:** `GET /api/public/operation/categories/community/{communityId}`

**Description:** Retrieves all categories associated with a specific community.

**Path Parameters:**
- `communityId` (UUID): The ID of the community.

**Response:**
- `200 OK`: Successfully retrieved the categories.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/categories/community/{communityId}"
```

### 4. Update a Category
**Endpoint:** `PUT /api/public/operation/categories/{categorieId}`

**Description:** Updates an existing category by its ID.

**Path Parameters:**
- `categorieId` (UUID): The ID of the category to update.

**Request Body:**
```json
{
  "categorieName": "string",
  "postsIds": ["UUID1", "UUID2", ...]
}
```

**Response:**
- `200 OK`: Successfully updated the category.
- `404 Not Found`: Category not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X PUT "http://localhost:8080/api/public/operation/categories/{categorieId}" \
-H "Content-Type: application/json" \
-d '{
  "categorieName": "Updated Category",
  "postsIds": ["123e4567-e89b-12d3-a456-426614174000", "123e4567-e89b-12d3-a456-426614174001"]
}'
```

### 5. Delete a Category
**Endpoint:** `DELETE /api/public/operation/categories/{categorieId}`

**Description:** Deletes a category by its ID by marking it as deleted.

**Path Parameters:**
- `categorieId` (UUID): The ID of the category to delete.

**Response:**
- `204 No Content`: Successfully deleted the category.
- `404 Not Found`: Category not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/categories/{categorieId}"
```

:::tip
Ensure that the `communityId` and `categorieId` provided in the requests are valid UUIDs.
:::

:::warning
The `postsIds` field in the request body should be an array of valid UUIDs representing the posts associated with the category.
:::
