const express = require("express");
const app = express();
const managerRoutes = require("./routes/index");
const projectRoutes = require("./routes/project");
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
app.use("/api/Manager", managerRoutes);
app.use("/api/Project", projectRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `server is Runinng at ${PORT}`
  );
});
