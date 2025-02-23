# Opitulare

## What It Does
Opitulare is a website designed to reach, inform, and educate people about abuse. It provides blog posts, global data on abuse, and showcases the project's mission of spreading awareness and offering protection resources. More than just an information hub, it integrates discreet tools that allow individuals in danger to seek help safely.

## Key Features
- **Website:** A platform designed to inform and spread awareness about abuse. It presents information, graphs, and charts to help people understand the scope of abuse worldwide.
- **1 Button, Thousand Lives:** A proposed prototype to integrate a discreet input and button into major websites, allowing individuals experiencing mistreatment to request help subtly.
- **Extend Help:** A prototype for a dummy browser extension disguised as a simple font-changing tool. However, when clicked, it reveals an input field and button that can be used to discreetly request assistance.

## Tech Stack
- **Frameworks & Libraries:** Next.js, React, Tailwind CSS, MUI
- **Languages & Markup:** JavaScript, JSX, HTML, CSS
- **Tools & Deployment:** Manifest, GitHub, Vercel

## Running Opitulare Locally

Follow these steps to set up and run Opitulare on your local machine:

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Git](https://git-scm.com/)

### Installation
```sh
# Clone the repository
git clone https://github.com/yourusername/opitulare.git

# Navigate into the project directory
cd opitulare

# Install dependencies
npm install
```

### Running the Development Server
```sh
npm run dev
```
The application should now be running on `http://localhost:3000/`.

### Building for Production
```sh
npm run build
npm start
```

### Deployment
To deploy on Vercel:
```sh
npm install -g vercel
vercel
```


# Loading Extend Help Chrome Extension Locally

## Prerequisites
- Install **Google Chrome** or **Microsoft Edge (Chromium-based)**
- Ensure the extension contains a valid `manifest.json` file

## Steps to Load the Extension

### 1. Open Chrome and Go to Extensions Page
- Open **Google Chrome**.
- Type `chrome://extensions/` in the address bar and press **Enter**.

### 2. Enable Developer Mode
- In the top right corner, toggle **Developer mode** to **ON**.

### 3. Load the Unpacked Extension
- Click **Load unpacked**.
- In the file selection window, navigate to the folder where your extension files are stored.
- Select the folder containing `manifest.json` and click **Select Folder**.

### 4. Verify the Extension is Loaded
- If successful, the extension will appear in your list of installed extensions.
- You may see a warning if there are issues with `manifest.json`; resolve any errors accordingly.

### 5. Pin and Test the Extension
- Click on the **puzzle piece icon** in Chrome’s toolbar (Extensions).
- Find **Extend Help** and click the **pin icon** to keep it visible.
- Click the extension icon to check if the hidden help request feature is working as expected.

## Updating the Extension
If you make changes to the extension’s code:
- Go to `chrome://extensions/`
- Click **Reload** under your extension.

Would you like instructions for packaging and publishing the extension to the Chrome Web Store?

```
Follow the Vercel CLI instructions to complete the deployment.

## License
This project is licensed under the MIT License.

