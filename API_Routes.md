**1. Authentication**

- **/api/public/auth**

    - **/login**: POST request to log in a user.
    - **/register**: POST request to register a new user.

**2. Discussion Groups**

- **/api/public/operation/groups**

    - **/**: POST request to create a new discussion group.
    - **/{groupId}**: GET, PUT, DELETE requests for managing a discussion group.
    - **/{groupId}/name**: GET request to fetch the name of a specific discussion group.
    - **/key/{keyId}**: GET request to fetch discussion groups associated with a specific key.

**3. Categories**

- **/api/public/operation/categories**

    - **/groupe/{groupId}**: GET request to fetch all categories associated with a specific group.
    - **/{groupId}**: POST request to create a new category within a specified group.
    - **/{categoryId}**: PUT request to update an existing category. DELETE request to delete a category.

**4. Posts**

- **/api/public/operation/posts**

    - **/**: POST request to create a new post.
      - **?memberId={userId}**: To verify the membership if the group is a community.
    - **/latest**: GET request to fetch the latest posts.
      - **?limit={number}**: To fetch a specific number of latest posts.
    - **/all**: GET request to fetch all posts.
    - **/groupe/{groupId}**: GET request to fetch all posts for a specific group.
    - **/author/{userId}**: GET request to fetch all posts created by a specific user.
    - **/{postId}**: GET, PUT, DELETE requests for managing a post.
    - **/{postId}/like**: POST request to like a post.
    - **/{postId}/dislike**: POST request to dislike a post.

**5. Comments**

- **/api/public/operation/commentaires**

    - **/**: POST request to add a new comment.
      - **?memberId={userId}**: To verify the membership if the group is a community.
    - **/post/{postId}**: GET request to fetch all comments for a specific post.
    - **/author/{userId}**: GET request to fetch all comments made by a specific user.
    - **/{commentId}**: PUT request to update an existing comment. DELETE request to delete a comment.
    - **/{commentId}/like**: POST request to like a comment.
    - **/{commentId}/dislike**: POST request to dislike a comment.