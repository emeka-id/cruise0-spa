# Cruise0 SPA

Cruise0 is a Single Page Application (SPA) built with React to allow users to book cruise destinations. It features Auth0 authentication (social and username/password), email verification, and profile-based booking functionality.

## Features

- React SPA with Auth0 authentication
- Social login (Google) and email/password sign-up
- Email verification with auto-login after confirmation
- Profile page with cruise search functionality
- Fully responsive landing page UI
- Logout and reauthentication support

## Technologies Used

- React
- Auth0 React SDK
- React Router DOM
- React DatePicker
- Vite
- Tailored CSS styles (tourly.css)

## Auth0 Setup

To configure Auth0 for the app:

1. Create an Auth0 application (Single Page Application).
2. Add the following to your application settings:
   - **Allowed Callback URLs**: `http://localhost:3000`
   - **Allowed Logout URLs**: `http://localhost:3000`
   - **Allowed Web Origins**: `http://localhost:3000`
3. Enable social login (e.g., Google).
4. Enable email verification in Auth0 dashboard.
5. Set up a [Post-Registration Action](https://auth0.com/docs/customize/actions/flows-and-triggers/post-user-registration-flow) to send verification emails.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:3000