import express, { Request, Response } from "express";

enum ButtonType {
  Inc = "inc",
  Dec = "dec",
}

const app = express();
enum Port {
  defaultPort = 3000,
}

app.use(express.static("public"));
app.use(express.json());

const database = {
  incCount: 0,
  decCount: 0,
};

app.post("/update", (req: Request, res: Response) => {
  const { type } = req.body;

  switch (type) {
    case ButtonType.Inc:
      database.incCount += 1;
      break;
    case ButtonType.Dec:
      database.decCount += 1;
      break;
    default:
      res.status(400).send({ message: "Error" });
      return;
  }

  res.status(200).json(database);
});

app.listen(Port.defaultPort, () => {
  console.log(`Server is running on http://localhost:${Port.defaultPort}`);
});
