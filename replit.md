# WordPress Developer Portfolio

## Overview

This is a modern, full-stack WordPress developer portfolio application built with React, Express, and PostgreSQL. The application showcases Muhammad Zeeshan Khan's professional portfolio, featuring a clean, responsive design with comprehensive contact functionality and project showcase capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture  
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Middleware**: Express JSON parsing, URL encoding, and custom logging

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Backend Bundler**: esbuild for production builds
- **Development**: Hot Module Replacement (HMR) via Vite
- **TypeScript**: Shared configuration across client/server/shared modules

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: 
  - Users table for potential authentication
  - Contact messages table for form submissions
- **Migrations**: Drizzle-kit for schema management

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-messages` - Retrieve all contact messages (admin)

### Storage Implementation
- **Interface**: IStorage defining data access methods
- **Implementation**: MemStorage for development (in-memory storage)
- **Production**: Ready for database integration via Drizzle ORM

### UI Components
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA compliant components from Radix UI
- **Theme**: Neutral color palette with blue primary and yellow accent colors

### Portfolio Sections
- Hero section with professional introduction
- About section with skills showcase
- Portfolio grid with project filtering
- Services section with detailed offerings
- Testimonials carousel
- Contact form with validation
- Responsive navigation with smooth scrolling

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. React Hook Form handles client-side validation via Zod schema
3. Form data sent to `/api/contact` endpoint
4. Server validates data using shared Zod schema
5. Data stored via storage interface (MemStorage/Database)
6. Success/error response sent back to client
7. Toast notification displayed to user

### Portfolio Data
- Static portfolio data defined in `client/src/lib/data.ts`
- Includes projects, services, testimonials, and skills
- Structured with TypeScript interfaces for type safety

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS class composition
- **framer-motion**: Animation library for React

### Form Handling
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation

### Data Management
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **wouter**: Minimal routing library

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds client code to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Shared Code**: TypeScript modules shared between client and server

### Environment Configuration
- **Development**: `npm run dev` - TSX for server, Vite for client HMR
- **Production**: `npm run build` followed by `npm start`
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle ORM
- **Migrations**: `npm run db:push` to sync schema changes
- **Validation**: Shared Zod schemas between client and server

### Production Considerations
- Server configured for static file serving in production
- Environment-specific database connections
- Error handling with proper HTTP status codes
- Request logging and monitoring capabilities

The application is structured as a modern full-stack TypeScript application with clear separation of concerns, type safety throughout, and professional development practices. The modular architecture allows for easy feature additions and maintenance while providing a solid foundation for a professional portfolio website.