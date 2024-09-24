#!/bin/bash

# Go to the app directory
cd /var/www/findtute

# Pull the latest changes from Git
git pull origin master

# Install dependencies
npm install

# Build the Next.js app
npm run build

# Restart the PM2 process for the app
pm2 restart all
