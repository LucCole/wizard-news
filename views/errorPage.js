const html = require("html-template-tag");

const errorPage = (error) => {
    return html`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
            <div class='news-item'>
                <h1>${error}</h1>
            </div>
        </div>
    </body>
    </html>
    `
}

module.exports = errorPage;