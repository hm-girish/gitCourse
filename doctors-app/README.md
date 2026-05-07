# Doctors Clinic Management App

A production-ready web application for doctors' private clinics with comprehensive patient management features.

## Features

- **Login via Phone Number and OTP**: Secure authentication for doctors
- **Patient Management**: Add and manage patient details (name, age, gender, address)
- **Medical Records**: Add prescriptions, medical conditions, evaluations, and vaccinations
- **Patient Search**: Search patients by phone number and retrieve old details
- **Phone Number Updates**: Update patient phone numbers while linking to existing records
- **Family Management**: Support multiple patients per phone number (e.g., family members)

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: [To be configured - e.g., PostgreSQL with Prisma]
- **Authentication**: [To be configured - e.g., NextAuth.js with custom phone OTP]
- **SMS Service**: [To be configured - e.g., Twilio for OTP]

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (create `.env.local`):
   ```
   # Database
   DATABASE_URL="your-database-url"

   # Authentication
   NEXTAUTH_SECRET="your-secret"
   NEXTAUTH_URL="http://localhost:3000"

   # SMS (Twilio)
   TWILIO_ACCOUNT_SID="your-twilio-sid"
   TWILIO_AUTH_TOKEN="your-twilio-token"
   TWILIO_PHONE_NUMBER="your-twilio-phone"
   ```
4. Run database migrations (if using Prisma):
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions
```

## Development

- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This app can be deployed to Vercel, Netlify, or any platform supporting Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

[Add license information]
