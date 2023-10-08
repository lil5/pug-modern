# Pug Modern

Pug but simple and just works in the browser.
Built with typescript, tested in jsdom and node, environments.

With a simple example:

```javascript
import Pug from "pug-modern";

const func = Pug.compile("h1 Hello #{name}");
let result1 = func({ name: "Anna" });
//-> <h1>Hello Anna</h1>

let result2 = Pug.render("h1 Hello #{name}", { name: "John" });
//-> <h1>Hello John</h1>
```

## License

MIT
