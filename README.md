# Node.js Checkpoint Exercises

This repository contains 5 Node.js exercises demonstrating various core concepts.

## Setup

1. Install Node.js dependencies:
```bash
npm install
```

## Exercises

### 1. Hello World (`hello-world.js`)
A simple program that prints "HELLO WORLD" to the console.

**Run:**
```bash
node hello-world.js
```

### 2. HTTP Server (`server.js`)
Creates a web server that runs on port 3000 and responds with HTML content.

**Run:**
```bash
node server.js
```
Then visit: http://localhost:3000

### 3. File System Operations (`file-system.js`)
Demonstrates file system operations:
- Creates a `welcome.txt` file with "Hello Node"
- Reads and displays content from `hello.txt`

**Run:**
```bash
node file-system.js
```

### 4. Password Generator (`password-generator.js`)
Uses the `generate-password` package to create random passwords.

**Run:**
```bash
node password-generator.js
```

### 5. Email Sender (`email-sender.js`)
Uses `nodemailer` to send emails. 

**⚠️ Important:** Before running this, you need to:
1. Replace `your-email@gmail.com` with your actual email
2. Replace `your-app-password` with your Gmail app password (not your regular password)
3. Enable 2-factor authentication and generate an app password in your Google account

**Run:**
```bash
node email-sender.js
```

## Files Created

- `hello-world.js` - Basic console output
- `server.js` - HTTP server
- `file-system.js` - File operations
- `password-generator.js` - Password generation
- `email-sender.js` - Email functionality
- `package.json` - Dependencies configuration
- `hello.txt` - Sample file for reading
- `welcome.txt` - File created by file-system.js

## Dependencies

- `generate-password` - For generating random passwords
- `nodemailer` - For sending emails

