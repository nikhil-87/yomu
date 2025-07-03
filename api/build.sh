#!/bin/bash
# Build script for Render deployment

# Install dependencies using npm
npm ci

# Create images directory if it doesn't exist
mkdir -p images

echo "Build completed successfully"
