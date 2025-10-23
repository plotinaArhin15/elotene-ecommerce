# MTN Mobile Money API Setup Guide

This guide will help you set up MTN Mobile Money integration for your Eloténe e-commerce application.

## Prerequisites

1. **MTN MoMo Developer Account**

   - Sign up at [MTN MoMo Developer Portal](https://momodeveloper.mtn.com/)
   - Subscribe to the **Collections** product in sandbox mode

2. **Get Your Subscription Key**
   - Go to your profile/subscriptions
   - Copy your **Primary Key** (Ocp-Apim-Subscription-Key)

## Setup Steps

### 1. Configure Environment Variables

Create a `.env.local` file in your project root:

\`\`\`bash
OCP_APIM_SUBSCRIPTION_KEY=your_primary_key_from_mtn_dashboard
CALLBACK_URL=https://elotene.com
\`\`\`

### 2. Install Dependencies

Make sure you have the required packages:

\`\`\`bash
npm install axios uuid
\`\`\`

### 3. Run the Setup Script

Execute the automated setup script:

\`\`\`bash
npm run mtn:setup
\`\`\`

This script will:

- ✅ Create an API User with a unique UUID
- ✅ Generate an API Key for that user
- ✅ Save credentials to your .env.local file
- ✅ Verify the credentials work

### 4. Generate Access Token

Generate an OAuth access token:

\`\`\`bash
npm run mtn:token
\`\`\`

This script will:

- ✅ Generate a fresh OAuth access token
- ✅ Save it to your .env.local file
- ✅ Verify the token works
- ✅ Display token expiration time

**Important:** Access tokens expire after **1 hour**. You'll need to regenerate them periodically:

\`\`\`bash

# Regenerate token when expired

npm run mtn:token
\`\`\`

### 5. Restart Your Application

After setup completes:

\`\`\`bash
npm run dev
\`\`\`

## What Gets Generated

### After `npm run mtn:setup`:

\`\`\`
MTN_MOMO_API_USER=<generated-uuid>

# MTN Mobile Money Integration Removed

This project previously included MTN Mobile Money (MoMo) integration. The implementation and
setup scripts have been deprecated and replaced with placeholders to avoid accidental execution.

If you need to restore MTN support, retrieve the original files from the project's git history.

### After `npm run mtn:token`:
