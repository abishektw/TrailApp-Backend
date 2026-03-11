# TrailApp Backend (MVC)

## Project Structure

```
src/
  config/
    env.js
  controllers/
    health.controller.js
  middlewares/
    error.middleware.js
  models/
    health.model.js
  routes/
    health.routes.js
    index.js
  services/
    health.service.js
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
