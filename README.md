# Help Me With Linux Distro

This application helps you choose the perfect Linux distribution based on your preferences and experience level. Answer a series of questions, and we'll provide a personalized recommendation.

## Core Features

- **Dynamic Questionnaire**: A series of questions to understand your needs.
- **Distribution Matching**: An algorithm suggests the most suitable Linux distribution.
- **Customization**: Personalize your experience with settings for animations.
- **Result Display**: A clear, visual presentation of your recommended distributions.

---

## Security and Deployment

This application is built with Next.js, which provides a solid security foundation. For a secure deployment, consider the following best practices:

### Environment Variables
- Never commit sensitive information (like API keys or database credentials) directly into your source code.
- Use environment variables for all configuration. Create a `.env.local` file for local development.
- For production, use your hosting provider's system for setting environment variables (e.g., Firebase App Hosting environment variables, Vercel Environment Variables, etc.).

### Security Headers
- It is recommended to configure security headers to protect against common attacks like Cross-Site Scripting (XSS) and Clickjacking. You can add these using a `next.config.ts` file or middleware. A common set of headers includes:
  - `Content-Security-Policy`
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Strict-Transport-Security`
  - `X-XSS-Protection`
  - `Referrer-Policy`

Example in `next.config.ts`:
```ts
import type {NextConfig} from 'next';

const securityHeaders = [
  // ... your headers here
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  // ... other config
};

export default nextConfig;
```

### Dependencies
- Regularly audit your dependencies for known vulnerabilities using tools like `npm audit`.
- Keep your dependencies up to date, especially major frameworks like Next.js and React.

### License

- GPL 3.0 Only
