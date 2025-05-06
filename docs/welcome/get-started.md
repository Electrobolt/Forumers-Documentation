---
sidebar_position: 2
---

# Getting started

To begin using the Forumers API, you'll need to sign up for an account on the api key manager service (KeyZ) and obtain an API key.

### Sign up for an Account on KeyZ

- Open the **[KeyZ page](https://keyz-delta.vercel.app/)**.
- Click on signup and fill in the required fields, including your name, email address, and password.

### Obtain your API Key
- Log in to your KeyZ account.
- click on "Créer une clé d'API".
- Fill in the required informations and validate .
- Copy your API key and your userId

:::tip
**Keep your key secure.** You will need it for authentication.
:::

### Fundamentals of Making Requests
#### Mandatory Header: X-API-KEY
The request must contain an HTTP header named X-API-KEY.
If this header is missing, the request fails with a 401 Unauthorized error and the message "Invalid or missing API Key".

#### Mandatory Parameter: userid
The request must include a non-empty Userid parameter in the URL (e.g., ?userid=123).
If the parameter is missing or empty, the request fails with a 400 Bad Request error and the message "Missing or empty ID parameter".

##### Example: 
GET /api/public/operation/some-resource?userid=12345 HTTP/1.1
Host: api.example.com
X-API-KEY: your-api-key-value

