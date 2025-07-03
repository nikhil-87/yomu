#!/bin/bash
# Build script for Render deployment

# Install dependencies
npm install

# Create images directory if it doesn't exist
mkdir -p images

# Start the application
npm start
