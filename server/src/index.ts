import { PORT } from "./schemas/env.schema.js";
import { app } from "./server/app.js";
import { Request, Response } from "express";

app.use((req: Request, res: Response) => {
    res.send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
})