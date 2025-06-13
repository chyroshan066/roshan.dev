import { PORT } from "./schemas/env.schema.js";
import { app } from "./server/app.js";
app.use((req, res) => {
    res.send("Page not found");
});
app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map