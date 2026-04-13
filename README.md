# TrailApp Backend (MVC)

## Project Structure

```
src/
  config/
    env.js
  controllers/
    auth.controller.js
    health.controller.js
    profile.controller.js
  middlewares/
    auth.middleware.js
    error.middleware.js
  models/
    health.model.js
    user.model.js
  routes/
    auth.routes.js
    health.routes.js
    index.js
    profile.routes.js
  services/
    auth.service.js
    health.service.js
    profile.service.js
    user.store.js
  app.js
  server.js
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create env file:

   ```bash
   copy .env.example .env
   ```

3. Run in dev mode:

   ```bash
   npm run dev
   ```

## Test endpoint

- `GET /api/health`

## Auth endpoints

- `POST /api/auth/register`
  - body: `email`, `password`, `fullName` (optional)
- `POST /api/auth/login`
  - body: `email`, `password`
- `GET /api/profile`
  - header: `Authorization: Bearer <token>`
- `PUT /api/profile`
  - header: `Authorization: Bearer <token>`
  - body (optional): `fullName`, `phone`, `country`, `preferredLanguage`, `bio`, `photoUrl`, `emergencyContact`, `touristMode`
