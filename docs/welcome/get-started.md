---
sidebar_position: 2
---

# Getting started

To begin using the Forumers API, you'll need to sign up for an account and obtain an API key.

### Sign up for an Account

To access the Forumers API, you must first create an account. Follow these steps:

- Visit the **[Forumers registration page](#)**.
- Fill in the required fields, including your name, email address, and password.
- Log in to your account.

### Obtain your API Key

Once you have created your account, you will need to generate an API key:

- Log in to your Forumers account.
- Navigate to the **API Keys** section in your account dashboard.
- Click on the Generate API Key button.
- Copy your API key

:::tip
**Keep your key secure.** You will need it for authentication.
:::


### Base URL

All API requests should be made to the following base URL:

```bash
https://api.forumers.com/v1/
```

### Authentication

All API requests require an API key for authentication. You must include your API key in the header of each request. Here’s how to do it:

**Exemple request**
```bash
GET /posts HTTP/1.1
Host: api.forumers.com
Authorization: Bearer YOUR_API_KEY
```

### Making your First Request

Once you have your API key, you can make your first request. For example, to retrieve a list of discussions, you can use the following endpoint:

- Endpoint: `/posts`
- Method: GET
- Description: Retrieves a list of all discussions available on the platform.

**Example Request**
```bash
GET https://api.forumers.com/v1/posts
Authorization: Bearer YOUR_API_KEY
```
### Handling Responses

The API will respond with JSON-formatted data. Here’s an example of a successful response when retrieving discussions:

**Example Response**
```json
{
  "status": "success",
  "data": [
    {
      "id": "1",
      "title": "Introduction to API Development",
      "created_at": "2025-02-10T12:00:00Z",
      "author": "JohnDoe"
    },
    {
      "id": "2",
      "title": "Best Practices for Forum Management",
      "created_at": "2025-02-10T13:00:00Z",
      "author": "JaneSmith"
    }
  ]
}
```

