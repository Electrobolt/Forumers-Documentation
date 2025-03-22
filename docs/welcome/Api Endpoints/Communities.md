---
sidebar_position: 1
---

The endpoints allow you to create, retrieve, update, and delete communities, as well as manage members associated with communities.

### Base URL
```
/api/public/operation/
```

### 1. Create a community
**Endpoint:** `POST /api/public/operation/communities`

**Description:** Creates a new community.

**Request Body:**
```json
{
  "keyId": "UUID",
  "creatorName": "string",
  "creatorId": "UUID",
  "name": "string",
  "type": "PUBLIC or PRIVATE",
  "description": "string",
  "members": ["UUID1", "UUID2", ...]
}
```

**Response:**
- `200 OK`: Successfully created the community.
- `400 Bad Request`: Invalid input or missing required fields.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/communities" \
-H "Content-Type: application/json" \
-d '{
  "keyId": "123e4567-e89b-12d3-a456-426614174000",
  "creatorName": "John Doe",
  "creatorId": "123e4567-e89b-12d3-a456-426614174001",
  "name": "Tech Enthusiasts",
  "type": "PUBLIC",
  "description": "A community for tech enthusiasts",
  "members": []
}'
```

### 2. Get a community by ID
**Endpoint:** `GET /api/public/operation/communities/{communityId}`

**Description:** Retrieves a community by its ID.

**Path Parameters:**
- `communityId` (UUID): The ID of the community to retrieve.

**Response:**
- `200 OK`: Successfully retrieved the community.
- `404 Not Found`: Community not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/communities/{communityId}"
```

### 3. Get communities by Key ID
**Endpoint:** `GET /api/public/operation/communities/key/{keyId}`

**Description:** Retrieves all communities associated with a specific key.

**Path Parameters:**
- `keyId` (UUID): The key ID associated with the communities.

**Response:**
- `200 OK`: Successfully retrieved the communities.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X GET "http://localhost:8080/api/public/operation/communities/key/{keyId}"
```

### 4. Update a community
**Endpoint:** `PUT /api/public/operation/communities/{communityId}`

**Description:** Updates an existing community by its ID.

**Path Parameters:**
- `communityId` (UUID): The ID of the community to update.

**Request Body:**
```json
{
  "keyId": "UUID",
  "creatorName": "string",
  "creatorId": "UUID",
  "name": "string",
  "type": "PUBLIC or PRIVATE",
  "description": "string",
  "members": ["UUID1", "UUID2", ...]
}
```

**Response:**
- `200 OK`: Successfully updated the community.
- `404 Not Found`: Community not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X PUT "http://localhost:8080/api/public/operation/communities/{communityId}" \
-H "Content-Type: application/json" \
-d '{
  "keyId": "123e4567-e89b-12d3-a456-426614174000",
  "creatorName": "John Doe",
  "creatorId": "123e4567-e89b-12d3-a456-426614174001",
  "name": "Updated Tech Enthusiasts",
  "type": "PUBLIC",
  "description": "An updated description",
  "members": ["123e4567-e89b-12d3-a456-426614174002"]
}'
```

### 5. Delete a community
**Endpoint:** `DELETE /api/public/operation/communities/{communityId}`

**Description:** Deletes a community by its ID by marking it as deleted.

**Path Parameters:**
- `communityId` (UUID): The ID of the community to delete.

**Response:**
- `204 No Content`: Successfully deleted the community.
- `404 Not Found`: Community not found.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X DELETE "http://localhost:8080/api/public/operation/communities/{communityId}"
```

### 6. Add a member to a community
**Endpoint:** `POST /api/public/operation/communities/{communityId}/members`

**Description:** Adds a member to a community.

**Path Parameters:**
- `communityId` (UUID): The ID of the community.

**Request Parameters:**
- `memberId` (UUID): The ID of the member to add.

**Response:**
- `200 OK`: Successfully added the member.
- `400 Bad Request`: Could not add the member.
- `500 Internal Server Error`: Unexpected server error.

**Example Request:**
```bash
curl -X POST "http://localhost:8080/api/public/operation/communities/{communityId}/members?memberId=123e4567-e89b-12d3-a456-426614174003"
```

:::tip
Ensure that the `communityId`, `keyId`, and `memberId` provided in the requests are valid UUIDs.
:::

:::warning
The `members` field in the request body should be an array of valid UUIDs representing the members associated with the community.
:::
