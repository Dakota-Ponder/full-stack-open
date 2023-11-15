```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User navigates to the single-page app version of the notes app.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML document for SPA

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
    server-->>browser: the CSS file for SPA

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.js
    server-->>browser: the JavaScript file for SPA

    Note right of browser: The browser executes the SPA JavaScript code, which may involve additional API calls to fetch data.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/data.json (optional)
    server-->>browser: JSON data of notes (optional)

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico (optional)
    server-->>browser: Favicon file (optional)

    Note over browser: The browser renders the SPA version of the notes app, potentially updating the view dynamically.```
