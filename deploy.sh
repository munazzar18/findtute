#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Go to the app directory
cd ~/findtute || { echo "Failed to change directory"; exit 1; }

# Pull the latest changes from Git
echo "Pulling latest changes from Git..."
git pull origin master || { echo "Git pull failed"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install || { echo "NPM install failed"; exit 1; }

# Build the Next.js app
echo "Building the Next.js app..."
npm run build || { echo "Build failed"; exit 1; }

# Restart the PM2 process for the app
echo "Restarting PM2 process..."
pm2 restart findtute || { echo "PM2 restart failed"; exit 1; }
