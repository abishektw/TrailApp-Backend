# TrailApp Backend (MVC)

## Project Structure

```
src/
  config/
    database.js
    env.js
  controllers/
    auth.controller.js
    group.controller.js
    health.controller.js
    profile.controller.js
  middlewares/
    auth.middleware.js
    error.middleware.js
  models/
    group.model.js
    health.model.js
    user.model.js
  routes/
    auth.routes.js
    group.routes.js
    health.routes.js
    index.js
    profile.routes.js
  services/
    auth.service.js
    group.service.js
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

3. Configure required environment variables in `.env`:

   - `PORT` - API server port
   - `NODE_ENV` - runtime environment (`development` / `production`)
   - `MONGO_URI` - MongoDB connection string
   - `JWT_SECRET` - secret used to sign JWT tokens
   - `JWT_EXPIRES_IN` - token expiration (example: `7d`)

4. Run in dev mode:

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

## Group endpoints

All group endpoints require:

- header: `Authorization: Bearer <token>`

- `POST /api/groups`
  - description: create a new travel group
  - body: `name` (required), `destination` (required), `description` (optional)
  - behavior:
    - authenticated user becomes `createdBy`
    - authenticated user is added to `members`
    - `inviteCode` is generated automatically

- `POST /api/groups/join`
  - description: join an existing travel group
  - body: `groupId` or `inviteCode` (at least one is required)
  - behavior:
    - prevents duplicate joins
    - adds user to `members` when valid
