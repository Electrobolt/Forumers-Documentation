**1. Authentication**

- **/api/public/auth**

    - **/login**: POST request to log in a user.
    - **/register**: POST request to register a new user.

**2. Communities**

- **/api/public/operation/communities**

    - **/**: POST request to create a new community.
    - **/{communityId}**: GET, PUT, DELETE requests for managing a community.
    - **/{communityId}/name**: GET request to fetch the name of a specific community.
    - **/key/{keyId}**: GET request to fetch communities associated with a specific key.

    ```json
    {
        "id": "string",
        "name": "string",
        "description": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime",
        "keyId": "string"
    }
    ```

**3. Categories**

- **/api/public/operation/categories**

    - **/community/{communityId}**: GET request to fetch all categories associated with a specific community.
    - **/{communityId}**: POST request to create a new category within a specified community.
    - **/{categoryId}**: PUT request to update an existing category. DELETE request to delete a category.

    ```json
    {
        "id": "string",
        "name": "string",
        "description": "string",
        "communityId": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime"
    }
    ```

**4. Posts**

- **/api/public/operation/posts**

    - **/**: POST request to create a new post.
      - **?memberId={userId}**: To verify the membership if the community is private.
    - **/latest**: GET request to fetch the latest posts.
      - **?limit={number}**: To fetch a specific number of latest posts.
    - **/all**: GET request to fetch all posts.
    - **/community/{communityId}**: GET request to fetch all posts for a specific community.
    - **/author/{userId}**: GET request to fetch all posts created by a specific user.
    - **/{postId}**: GET, PUT, DELETE requests for managing a post.
    - **/{postId}/like**: POST request to like a post.
    - **/{postId}/dislike**: POST request to dislike a post.

    ```json
    {
        "id": "string",
        "title": "string",
        "content": "string",
        "authorId": "string",
        "communityId": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime",
        "likes": "number",
        "dislikes": "number"
    }
    ```

**5. Comments**

- **/api/public/operation/comments**

    - **/**: POST request to add a new comment.
      - **?memberId={userId}**: To verify the membership if the community is private.
    - **/post/{postId}**: GET request to fetch all comments for a specific post.
    - **/author/{userId}**: GET request to fetch all comments made by a specific user.
    - **/{commentId}**: PUT request to update an existing comment. DELETE request to delete a comment.
    - **/{commentId}/like**: POST request to like a comment.
    - **/{commentId}/dislike**: POST request to dislike a comment.

    ```json
    {
        "id": "string",
        "content": "string",
        "authorId": "string",
        "postId": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime",
        "likes": "number",
        "dislikes": "number"
    }
    ```