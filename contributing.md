# Contributing

Suggestions and pull requests are highly encouraged!

## Workflow

First clone:

```sh
git clone https://github.com/dutiyesh/devtodo.git
cd devtodo
npm install
```

### Extension

When working on the extension, use this to have it constantly build your changes:

```sh
npm run extension:dev
```

Then load or reload it into the browser to see the changes.

### Loading into the browser

Once built, load it in the browser by:
- Open `chrome://extensions`
- Check the **Developer mode** checkbox
- Click on the **Load unpacked extension** button
- Select the folder `devtodo/dist/extension`

---

### Web

When working on the web, use this to have it constantly build your changes:

```sh
npm run web:dev
```

Then open the browser with url:

```sh
http://localhost:9000/
```
