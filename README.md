# SIH1516 - AI-Based Grievance Lodging & Tracking System

This workspace is scaffolded as a three-part monorepo:

- `client/` - Next.js citizen, officer, and admin portal
- `server/` - Express API and orchestration layer
- `ai-engine/` - FastAPI-based NLP service for complaint classification and priority scoring

## Structure

- `client/` contains the UI shell, dashboard placeholders, and shared components.
- `server/` contains the API entrypoint, route folders, controllers, middleware, and services.
- `ai-engine/` contains the AI microservice entrypoint and model-related modules.
- `docs/` contains architecture and API documentation placeholders.

## Next steps

1. Install dependencies for the frontend and backend.
2. Connect the backend to PostgreSQL or MongoDB.
3. Implement complaint submission, routing, and notification flows.
4. Replace the AI service stubs with the chosen NLP model or API provider.
