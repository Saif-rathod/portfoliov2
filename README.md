# Saif's Portfolio

My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Deployment Instructions

### Prerequisites
- Node.js 18+ installed
- A Resend account for email functionality
- A Netlify account for hosting

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Saif-rathod/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your Resend API key to the `.env` file

5. Run the development server:
   ```bash
   npm run dev
   ```

### Netlify Deployment
1. Push your code to GitHub

2. Connect your repository to Netlify

3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

4. Add environment variables in Netlify:
   - Go to Site settings > Environment variables
   - Add `RESEND_API_KEY` with your Resend API key

### Important Notes
- Never commit your `.env` file or expose your API keys
- The contact form requires a valid Resend API key to function
- For production, consider verifying your domain with Resend

## 🛠️ Built With
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend for email

## 📧 Contact Form Setup
The contact form uses Resend for email functionality. To make it work:
1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Add it to your environment variables
4. Optional: Verify your domain for custom sending address
