const express = require("express");
const app = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");
const PORT =
  process.env.PORT || 4000;
mongoose
.connect(
  "mongodb://localhost:27017/ManagersPanel",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}
)
  .then(() => {
    console.log(
      "Connected to Database"
    );
  })
  .catch((err) =>
    console.error(err)
  );

app.use(express.json());
app.use("/api/Manager", routes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `server is Runinng at ${PORT}`
  );
});
