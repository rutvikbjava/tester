# 📚 COMPLETE WEBSITE DOCUMENTATION
## MAGIC Startup Incubation Management System

**Version**: 1.0.0  
**Author**: CMIA Marathwada  
**Type**: Full-Stack Web Application  
**Architecture**: Monorepo (Frontend + Backend)

---

## 🏗️ ARCHITECTURE OVERVIEW

### Technology Stack:
```
Frontend: React 18 + Vite + Tailwind CSS
Backend: Express.js + Prisma ORM
Database: PostgreSQL (Supabase)
Deployment Target: Vercel (Serverless)
```

### Project Structure:
```
magic-incubation-system/
├── Frontend (Root)
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── package.json
│
└── Backend (backend/)
    ├── routes/
    ├── middleware/
    ├── models/
    ├── prisma/
    ├── utils/
    └── package.json
```

---

## 📦 FRONTEND DEPENDENCIES

### Production Dependencies:
```json
{
  "framer-motion": "^10.16.4",      // Animations
  "jspdf": "^2.5.1",                // PDF generation
  "jspdf-autotable": "^3.8.2",      // PDF tables
  "lucide-react": "^0.294.0",       // Icons
  "react": "^18.2.0",               // UI framework
  "react-dom": "^18.2.0",           // React DOM
  "xlsx": "^0.18.5"                 // Excel export
}
```

### Development Dependencies:
```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.31",
  "tailwindcss": "^3.3.5",
  "vite": "^7.2.7"
}
```

### Frontend Scripts:
```json
{
  "dev": "vite",                    // Development server
  "build": "vite build",            // Production build
  "preview": "vite preview",        // Preview build
  "vercel-build": "cd backend && npm install && npx prisma generate && cd .. && npm run build"
}
```

---

## 🔧 BACKEND DEPENDENCIES

### Production Dependencies:
```json
{
  "@prisma/client": "5.22.0",           // Prisma ORM client
  "@supabase/supabase-js": "^2.87.3",   // Supabase client
  "bcryptjs": "^2.4.3",                 // Password hashing
  "compression": "^1.7.4",              // Response compression
  "cors": "^2.8.5",                     // CORS middleware
  "dotenv": "^16.3.1",                  // Environment variables
  "express": "^4.18.2",                 // Web framework
  "express-rate-limit": "^7.1.5",       // Rate limiting
  "express-validator": "^7.0.1",        // Input validation
  "helmet": "^7.1.0",                   // Security headers
  "jsonwebtoken": "^9.0.2",             // JWT authentication
  "morgan": "^1.10.0",                  // HTTP logging
  "multer": "^1.4.5-lts.1",             // File uploads
  "prisma": "5.22.0"                    // Prisma CLI
}
```

### Development Dependencies:
```json
{
  "nodemon": "^3.0.2"                   // Auto-restart server
}
```

### Backend Scripts:
```json
{
  "start": "node server.js",
  "dev": "nodemon server.js",
  "build": "prisma generate",
  "postinstall": "prisma generate",
  "seed": "node scripts/seed.js",
  "prisma:migrate": "npx prisma migrate dev",
  "prisma:generate": "npx prisma generate",
  "prisma:studio": "npx prisma studio",
  "prisma:seed": "node prisma/seed.js",
  "db:setup": "npx prisma migrate dev --name init && node prisma/seed.js",
  "db:test": "node test-database.js",
  "db:migrate-data": "node migrate-localstorage-to-db.js"
}
```

---

## 🎨 FRONTEND STRUCTURE

### Main Files:
```
src/
├── main.jsx              // Entry point
├── App.jsx               // Main app component
└── index.css             // Global styles
```

### Components (34 total):
```
src/components/
├── AchievementManager.jsx          // Manage startup achievements
├── AdminAuthModal.jsx              // Admin authentication modal
├── AdminCredentialsModal.jsx       // Update admin credentials
├── AllStartups.jsx                 // View all startups
├── ConfirmationModal.jsx           // Confirmation dialogs
├── Dashboard.jsx                   // Main dashboard
├── EditStartupProfile.jsx          // Edit startup details
├── ExportMenu.jsx                  // Export data menu
├── GenerateReportButton.jsx        // Generate reports
├── Graduated.jsx                   // Graduated startups view
├── GuestManagement.jsx             // Manage guest users
├── GuestRestrictedButton.jsx       // Guest access control
├── ImportStartups.jsx              // Import startup data
├── InactiveStartupNotifications.jsx // Inactive startup alerts
├── InactiveStartups.jsx            // Inactive startups view
├── LandingPage.jsx                 // Public landing page
├── LandingPageEditor.jsx           // Edit landing page
├── Login.jsx                       // Login page
├── MagicBackground.jsx             // Animated background
├── Onboarded.jsx                   // Onboarded startups view
├── OnboardingModal.jsx             // Onboarding dialog
├── OneOnOne.jsx                    // One-on-one meetings view
├── OneOnOneScheduling.jsx          // Schedule one-on-one
├── RegistrationForm.jsx            // Startup registration
├── Rejected.jsx                    // Rejected startups view
├── RejectionModal.jsx              // Rejection dialog
├── Settings.jsx                    // App settings
├── Sidebar.jsx                     // Navigation sidebar
├── SMCScheduling.jsx               // SMC meeting scheduling
├── StartupCard.jsx                 // Startup card component
├── StartupDetailModal.jsx          // Startup details modal
├── StartupGridCard.jsx             // Grid view card
├── StartupProgressModal.jsx        // Progress tracking modal
└── ViewToggle.jsx                  // Toggle view modes
```

### Hooks:
```
src/hooks/
└── useAuth.js                      // Authentication hook
```

### Utilities:
```
src/utils/
├── api.js                          // API client
├── exportUtils.js                  // Export utilities
├── landingPageData.js              // Landing page data
├── reportGenerator.js              // Report generation
└── storage.js                      // Local storage utils
```

---

## 🔙 BACKEND STRUCTURE

### Main Server:
```
backend/
└── server.js                       // Express server entry point
```

### Routes (10 API endpoints):
```
backend/routes/
├── achievements.js                 // Achievement management
├── auth.js                         // Authentication
├── guests.js                       // Guest user management
├── landingPage.js                  // Landing page API
├── migration.js                    // Data migration
├── oneOnOne.js                     // One-on-one meetings
├── settings.js                     // App settings
├── smc.js                          // SMC meetings
├── startups.db.js                  // Startups (Prisma)
├── startups.js                     // Startups (legacy)
└── startups.prisma.js              // Startups (Prisma alt)
```

### Middleware:
```
backend/middleware/
├── auth.js                         // JWT authentication
├── supabase-upload.js              // Supabase file upload
├── upload.js                       // Multer file upload
└── validate.js                     // Input validation
```

### Models (6 data models):
```
backend/models/
├── LandingPage.js                  // Landing page model
├── OneOnOneSession.js              // One-on-one session model
├── Settings.js                     // Settings model
├── SMCSchedule.js                  // SMC schedule model
├── Startup.js                      // Startup model
└── User.js                         // User model
```

### Prisma (Database):
```
backend/prisma/
├── schema.prisma                   // Main schema
├── schema.supabase.prisma          // Supabase schema
├── seed.js                         // Database seeding
└── migrations/                     // Migration files
```

### Utilities:
```
backend/utils/
├── db.js                           // JSON database (legacy)
├── email.js                        // Email utilities
├── logger.js                       // Logging utility
├── prisma.js                       // Prisma client
└── validators.js                   // Custom validators
```

### Scripts:
```
backend/scripts/
└── seed.js                         // Database seeding script
```

### Data Storage:
```
backend/data/                       // JSON file storage (legacy)
├── landing-page.json
├── one-on-one-sessions.json
├── settings.json
├── smc-schedules.json
├── startups.json
└── users.json
```

---

## 🗄️ DATABASE SCHEMA

### Tables (8 total):

#### 1. User
```prisma
model User {
  id          String    @id @default(cuid())
  username    String    @unique
  password    String
  email       String?   @unique
  role        String    @default("guest")
  isActive    Boolean   @default(true)
  lastLogin   DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

#### 2. Startup
```prisma
model Startup {
  id                    String              @id @default(cuid())
  name                  String
  founderName           String
  email                 String
  phone                 String
  sector                String
  stage                 String              @default("registered")
  registrationDate      DateTime            @default(now())
  description           String?
  website               String?
  fundingReceived       Float?
  employeeCount         Int?
  documents             Json?
  achievements          Achievement[]
  progressHistory       ProgressHistory[]
  oneOnOneMeetings      OneOnOneMeeting[]
  smcMeetings           SMCMeeting[]
  agreements            Agreement[]
  createdAt             DateTime            @default(now())
  updatedAt             DateTime            @updatedAt
}
```

#### 3. Achievement
```prisma
model Achievement {
  id          String    @id @default(cuid())
  startupId   String
  startup     Startup   @relation(fields: [startupId], references: [id], onDelete: Cascade)
  title       String
  description String?
  date        DateTime  @default(now())
  category    String?
  createdAt   DateTime  @default(now())
}
```

#### 4. ProgressHistory
```prisma
model ProgressHistory {
  id          String    @id @default(cuid())
  startupId   String
  startup     Startup   @relation(fields: [startupId], references: [id], onDelete: Cascade)
  fromStage   String
  toStage     String
  notes       String?
  changedBy   String?
  changedAt   DateTime  @default(now())
}
```

#### 5. OneOnOneMeeting
```prisma
model OneOnOneMeeting {
  id          String    @id @default(cuid())
  startupId   String
  startup     Startup   @relation(fields: [startupId], references: [id], onDelete: Cascade)
  date        DateTime
  agenda      String?
  notes       String?
  status      String    @default("scheduled")
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

#### 6. SMCMeeting
```prisma
model SMCMeeting {
  id          String    @id @default(cuid())
  startupId   String
  startup     Startup   @relation(fields: [startupId], references: [id], onDelete: Cascade)
  date        DateTime
  agenda      String?
  decision    String?
  status      String    @default("scheduled")
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

#### 7. Agreement
```prisma
model Agreement {
  id          String    @id @default(cuid())
  startupId   String
  startup     Startup   @relation(fields: [startupId], references: [id], onDelete: Cascade)
  type        String
  signedDate  DateTime?
  expiryDate  DateTime?
  document    String?
  status      String    @default("pending")
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

#### 8. Settings
```prisma
model Settings {
  id          String    @id @default(cuid())
  key         String    @unique
  value       Json
  updatedAt   DateTime  @updatedAt
}
```

---

## 🎨 STYLING & DESIGN

### CSS Framework:
- **Tailwind CSS 3.3.5**
- **Custom theme with MAGIC brand colors**
- **Dark mode support**

### Custom Colors:
```javascript
colors: {
  magic: {
    50: '#f5f7ff',
    100: '#ebf0ff',
    200: '#d6e0ff',
    300: '#b8c9ff',
    400: '#8fa3ff',
    500: '#667eea',    // Primary
    600: '#5568d3',
    700: '#4553b8',
    800: '#3a4694',
    900: '#2d3670',
    950: '#1f2654',
  },
  purple: {
    // Full purple palette
  }
}
```

### Fonts:
- **Primary**: Anton, Inter, system-ui, sans-serif

### Custom Shadows:
```javascript
boxShadow: {
  'magic': '0 10px 40px -10px rgba(102, 126, 234, 0.6)',
  'magic-lg': '0 20px 60px -15px rgba(102, 126, 234, 0.7)',
}
```

---

## 🔐 AUTHENTICATION & SECURITY

### Authentication:
- **JWT (JSON Web Tokens)**
- **Bcrypt password hashing**
- **30-day token expiration**
- **Role-based access control (RBAC)**

### Roles:
1. **Admin** - Full access
2. **Guest** - Limited access

### Security Middleware:
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - 100 requests per 15 minutes
- **Input Validation** - Express-validator
- **Compression** - Response compression

### Default Credentials:
```
Admin:
  Username: admin
  Password: magic2024

Guest:
  Username: guest
  Password: guest123
```

---

## 📡 API ENDPOINTS

### Authentication:
```
POST   /api/auth/login                    // Login
GET    /api/auth/me                       // Get current user
POST   /api/auth/refresh                  // Refresh token
POST   /api/auth/change-password          // Change password
POST   /api/auth/verify-admin             // Verify admin
PUT    /api/auth/update-admin-credentials // Update admin
```

### Startups:
```
GET    /api/startups                      // List all startups
GET    /api/startups/:id                  // Get startup by ID
POST   /api/startups                      // Create startup
PUT    /api/startups/:id                  // Update startup
DELETE /api/startups/:id                  // Delete startup
GET    /api/startups/stats/overview       // Get statistics
```

### SMC Meetings:
```
GET    /api/smc                           // List meetings
POST   /api/smc                           // Create meeting
PUT    /api/smc/:id/complete              // Complete meeting
DELETE /api/smc/:id                       // Delete meeting
```

### One-on-One Meetings:
```
GET    /api/one-on-one                    // List meetings
POST   /api/one-on-one                    // Create meeting
PUT    /api/one-on-one/:id/complete       // Complete meeting
DELETE /api/one-on-one/:id                // Delete meeting
```

### Guests:
```
GET    /api/guests                        // List guests
POST   /api/guests                        // Create guest
PUT    /api/guests/:id                    // Update guest
DELETE /api/guests/:id                    // Delete guest
```

### Settings:
```
GET    /api/settings                      // List settings
GET    /api/settings/:key                 // Get setting
PUT    /api/settings/:key                 // Update setting
```

### Landing Page:
```
GET    /api/landing-page                  // Get landing page
PUT    /api/landing-page                  // Update landing page
```

### Achievements:
```
POST   /api/achievements/:startupId       // Add achievement
DELETE /api/achievements/:startupId/:achievementId // Delete achievement
```

---

## 🚀 BUILD & DEPLOYMENT

### Vite Configuration:
```javascript
{
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
```

### Vercel Configuration:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "backend/server.js",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/$1"
    }
  ]
}
```

### Build Process:
1. **Frontend**: `vite build` → `dist/`
2. **Backend**: `prisma generate` → Prisma Client
3. **Deploy**: Upload to Vercel

---

## 📊 FEATURES

### Core Features:
1. **Startup Management**
   - Registration
   - Profile editing
   - Stage tracking
   - Document management

2. **Meeting Scheduling**
   - One-on-one sessions
   - SMC meetings
   - Calendar integration

3. **Progress Tracking**
   - Stage transitions
   - Achievement logging
   - History tracking

4. **User Management**
   - Admin accounts
   - Guest accounts
   - Role-based access

5. **Reporting**
   - PDF export
   - Excel export
   - Statistics dashboard

6. **Landing Page**
   - Public-facing page
   - Customizable content
   - Admin editor

### Additional Features:
- Dark mode support
- Responsive design
- File uploads
- Data import/export
- Search & filtering
- Notifications
- Activity logging

---

## 🔧 CONFIGURATION FILES

### Root Level:
```
.gitignore                  // Git ignore rules
index.html                  // HTML entry point
jsconfig.json               // JavaScript config
package.json                // Frontend dependencies
postcss.config.js           // PostCSS config
tailwind.config.js          // Tailwind config
vercel.json                 // Vercel deployment
vite.config.js              // Vite config
```

### Backend Level:
```
backend/.env                // Environment variables
backend/.env.example        // Example env file
backend/.env.supabase       // Supabase config
backend/.gitignore          // Backend git ignore
backend/package.json        // Backend dependencies
backend/Dockerfile          // Docker config
backend/docker-compose.yml  // Docker compose
```

---

## 📝 ENVIRONMENT VARIABLES

### Backend (.env):
```
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Supabase
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_KEY=...

# Authentication
JWT_SECRET=...
JWT_EXPIRE=30d
ADMIN_USERNAME=admin
ADMIN_PASSWORD=magic2024

# Server
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:5173

# File Upload
MAX_FILE_SIZE=5242880
```

### Frontend (.env.production):
```
VITE_API_URL=https://your-app.vercel.app/api
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
```

---

## 📦 FILE STRUCTURE SUMMARY

### Total Files:
- **Frontend Components**: 34
- **Backend Routes**: 10
- **Backend Middleware**: 4
- **Backend Models**: 6
- **Backend Utils**: 5
- **Database Tables**: 8

### Total Dependencies:
- **Frontend Production**: 6
- **Frontend Dev**: 7
- **Backend Production**: 14
- **Backend Dev**: 1

### Lines of Code (Estimated):
- **Frontend**: ~8,000 lines
- **Backend**: ~5,000 lines
- **Total**: ~13,000 lines

---

## 🎯 KEY TECHNOLOGIES

### Frontend:
- React 18.2.0
- Vite 7.2.7
- Tailwind CSS 3.3.5
- Framer Motion 10.16.4
- Lucide React 0.294.0

### Backend:
- Express.js 4.18.2
- Prisma 5.22.0
- PostgreSQL (Supabase)
- JWT (jsonwebtoken 9.0.2)
- Bcrypt (bcryptjs 2.4.3)

### DevOps:
- Vercel (Deployment)
- GitHub (Version Control)
- Supabase (Database Hosting)
- Docker (Containerization)

---

## 📚 DOCUMENTATION FILES

### Deployment Guides:
- FRESH_VERCEL_DEPLOYMENT.md
- START_FRESH_DEPLOYMENT.md
- DEPLOYMENT_STEPS_CHECKLIST.md
- ENV_VARIABLES_COPY_PASTE.txt

### Technical Docs:
- FINAL_SOLUTION.md
- CRITICAL_FIX.md
- CHANGES_MADE.md
- DEPLOYMENT_FLOW.md

### Reference:
- README_DEPLOYMENT.md
- VERIFY_DEPLOYMENT.md
- DEPLOYMENT_FILES_INDEX.md

---

## 🔄 DATA FLOW

### Request Flow:
```
User Browser
    ↓
React Frontend (Vite)
    ↓
API Client (src/utils/api.js)
    ↓
Express Backend (backend/server.js)
    ↓
Route Handler (backend/routes/*.js)
    ↓
Middleware (auth, validation)
    ↓
Prisma Client (backend/utils/prisma.js)
    ↓
PostgreSQL Database (Supabase)
```

### Authentication Flow:
```
Login Request
    ↓
POST /api/auth/login
    ↓
Validate Credentials (bcrypt)
    ↓
Generate JWT Token
    ↓
Return Token + User Data
    ↓
Store in LocalStorage
    ↓
Include in API Headers
    ↓
Verify on Protected Routes
```

---

## 🎨 UI/UX FEATURES

### Design System:
- Custom MAGIC brand colors
- Consistent spacing (Tailwind)
- Responsive breakpoints
- Dark mode support
- Smooth animations (Framer Motion)

### Components:
- Modals & Dialogs
- Cards & Grids
- Forms & Inputs
- Tables & Lists
- Buttons & Icons
- Navigation & Sidebar

### User Experience:
- Loading states
- Error handling
- Success notifications
- Confirmation dialogs
- Keyboard shortcuts
- Accessibility features

---

## 📊 PERFORMANCE

### Optimization:
- Code splitting (Vite)
- Lazy loading
- Image optimization
- Response compression
- Database indexing
- Connection pooling

### Caching:
- Browser caching
- API response caching
- Static asset caching
- CDN caching (Vercel)

---

## 🔒 SECURITY FEATURES

### Backend Security:
- Helmet (security headers)
- CORS protection
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection

### Authentication Security:
- Password hashing (bcrypt)
- JWT tokens
- Token expiration
- Secure cookies
- HTTPS only

### Data Security:
- Encrypted connections
- Environment variables
- No sensitive data in code
- Secure file uploads
- Access control

---

## 🧪 TESTING

### Test Files:
```
backend/test-database.js    // Database connection test
backend/test.html           // API testing page
test-auth.html              // Authentication test
test-auth-fix.html          // Auth fix test
test-auth-system.bat        // Auth system test
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints:
```
xs:  475px
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
3xl: 1920px
```

### Mobile Support:
- Touch-friendly UI
- Mobile navigation
- Responsive tables
- Adaptive layouts
- Mobile-first approach

---

## 🎓 LEARNING RESOURCES

### Documentation:
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Express: https://expressjs.com
- Prisma: https://www.prisma.io
- Supabase: https://supabase.com

---

## 📞 SUPPORT & MAINTENANCE

### Logs:
- Server logs (Morgan)
- Error logs (backend/logs/)
- Vercel logs (Dashboard)
- Database logs (Supabase)

### Monitoring:
- Vercel Analytics
- Supabase Dashboard
- Error tracking
- Performance metrics

---

## 🎯 PROJECT METADATA

**Project Name**: MAGIC Startup Incubation Management System  
**Version**: 1.0.0  
**License**: ISC  
**Author**: CMIA Marathwada  
**Type**: Full-Stack Web Application  
**Status**: Production Ready  
**Last Updated**: December 2024

---

**END OF DOCUMENTATION**

This document provides a complete overview of your website's structure, components, dependencies, and architecture. No changes have been made to any files.
