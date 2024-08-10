# Bot-Assist-AI

AI-powered customer support chatbot built with Next.js and the VertexAI API. This project leverages the power of artificial intelligence to provide efficient, responsive, and intelligent customer support, enhancing user experience and reducing manual support workload.

## Table of Contents

- Features
- Installation
- Usage
- Configuration
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- Contributing
- License

## Features

- **AI-Powered Responses**: Utilizes Vertex AI to generate intelligent and context-aware responses.
- **Multi-Language Support**: Supports translation of messages to and from multiple languages.
- **Seamless Integration**: Built with Next.js for easy integration into web applications.
- **Conversation History**: Maintains conversation history for context-aware interactions.
- **Customizable**: Easily configurable to suit different customer support needs.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/addymwenda12/bot-assist-ai.git
    cd bot-assist-ai
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a [`.env.local`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2F.env.local%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Yang Munene\Desktop\MotileTech\bot-assist-ai\.env.local") file in the root directory and add your OpenAI API key and other necessary configurations:
    ```env
    NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
    GOOGLE_CLOUD_PROJECT_ID=your_google_cloud_project_id
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Start the chatbot**:
    Navigate to the chatbot interface in your application and start interacting with the AI-powered customer support.

2. **Translate messages**:
    The chatbot can automatically translate messages to and from different languages based on user preferences.

## Configuration

To configure the chatbot, you can modify the following files:

- **[`.env.local`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2F.env.local%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Yang Munene\Desktop\MotileTech\bot-assist-ai\.env.local")**: Set environment variables for API keys and other configurations.
- **[`next.config.mjs`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2Fnext.config.mjs%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Yang Munene\Desktop\MotileTech\bot-assist-ai\next.config.mjs")**: Configure Next.js settings.
- **[`tailwind.config.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2Ftailwind.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Yang Munene\Desktop\MotileTech\bot-assist-ai\tailwind.config.js")**: Customize Tailwind CSS settings.
- **[`postcss.config.mjs`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2Fpostcss.config.mjs%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Yang Munene\Desktop\MotileTech\bot-assist-ai\postcss.config.mjs")**: Configure PostCSS settings.

## API Endpoints

### POST /api/chat

Generates a response from the chatbot based on the user's message and conversation history.

- **Request Body**:
    ```json
    {
      "message": "What is your return policy?",
      "conversationHistory": []
    }
    ```
- **Response**:
    ```json
    {
      "response": "Our return policy allows returns within 30 days of purchase."
    }
    ```

### POST /api/translate

Translates text to the specified target language.

- **Request Body**:
    ```json
    {
      "text": "Hello, how can I help you?",
      "targetLanguage": "es"
    }
    ```
- **Response**:
    ```json
    {
      "translatedText": "Hola, ¿cómo puedo ayudarte?"
    }
    ```

## Project Structure

```
.env.local
.eslintrc.json
.gitignore
.next/
    app-build-manifest.json
    build-manifest.json
    cache/
    package.json
    react-loadable-manifest.json
    server/
    static/
    trace
    types/
app/
    api/
    chat/
    layout.js
    login/
    page.js
    register/
client/
    __pycache__/
    .env
    .gitignore
    customer_responses.json
    load_and_export_dataset.py
    package.json
    ...
components/
get_code_context.sh
jsconfig.json
models/
next.config.mjs
package.json
postcss.config.mjs
public/
README.md
styles/
tailwind.config.js
utils/
```

- **app/**: Contains the main application code, including API routes and page components.
- **client/**: Contains client-side code, including server setup and dataset loading.
- **components/**: Contains reusable UI components.
- **models/**: Contains data models and business logic.
- **public/**: Contains static assets like images and fonts.
- **styles/**: Contains global styles and Tailwind CSS configuration.
- **utils/**: Contains utility functions and helper scripts.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch ([`git checkout -b feature-branch`](command:_github.copilot.openSymbolFromReferences?%5B%22git%20checkout%20-b%20feature-branch%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYang%20Munene%5C%5CDesktop%5C%5CMotileTech%5C%5Cbot-assist-ai%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYang%2520Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A99%2C%22character%22%3A29%7D%7D%5D%5D "Go to definition")).
3. Make your changes.
4. Commit your changes ([`git commit -m 'Add new feature'`](command:_github.copilot.openSymbolFromReferences?%5B%22git%20commit%20-m%20'Add%20new%20feature'%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYang%20Munene%5C%5CDesktop%5C%5CMotileTech%5C%5Cbot-assist-ai%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYang%2520Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A101%2C%22character%22%3A29%7D%7D%5D%5D "Go to definition")).
5. Push to the branch ([`git push origin feature-branch`](command:_github.copilot.openSymbolFromReferences?%5B%22git%20push%20origin%20feature-branch%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYang%20Munene%5C%5CDesktop%5C%5CMotileTech%5C%5Cbot-assist-ai%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYang%2520Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYang%20Munene%2FDesktop%2FMotileTech%2Fbot-assist-ai%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A99%2C%22character%22%3A41%7D%7D%5D%5D "Go to definition")).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.