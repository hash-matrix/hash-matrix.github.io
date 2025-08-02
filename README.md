# RIVET Website

India's only job portal for Civil, Mechanical, Electrical and core engineering professionals.

## Environment Variables Setup

Create a `.env` file in the project root with the following variables:

```env
# EmailJS Configuration
# Get these from https://www.emailjs.com/
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Email Configuration
# The email address where form submissions will be sent
REACT_APP_TO_EMAIL=kaushalayush3095@gmail.com

# Industry Videos Configuration
# YouTube video IDs for the "We provide Workforce from" section
# Get these from YouTube URLs: https://youtube.com/watch?v=VIDEO_ID
REACT_APP_MECHANICAL_VIDEO_ID=your_mechanical_video_id
REACT_APP_ELECTRICAL_VIDEO_ID=your_electrical_video_id
REACT_APP_CIVIL_VIDEO_ID=your_civil_video_id

# Hero Section Video (optional)
# YouTube video ID for the main hero section video
REACT_APP_HERO_VIDEO_ID=your_hero_video_id
```

## How to Get YouTube Video IDs

1. Upload your video to YouTube
2. Copy the video URL: `https://youtube.com/watch?v=dQw4w9WgXcQ`
3. The video ID is the part after `v=`: `dQw4w9WgXcQ`
4. Add this ID to your `.env` file

## Features

- **Progressive Video Loading**: Videos load with beautiful gradient fallbacks
- **Environment-based Configuration**: Easy to manage video content
- **Responsive Design**: Works on all devices
- **Fast Performance**: Lazy loading and optimized YouTube embeds
- **Professional Contact Forms**: EmailJS integration
- **Mobile Optimized**: Perfect for Indian mobile users

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with the variables above
4. Start development server: `npm start`

## Deployment

Make sure to set all environment variables in your hosting provider:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Heroku: Config Vars

Never commit your `.env` file to version control! 