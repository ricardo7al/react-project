const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://localhost:27017/postManageDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("MongoDB connection succeeded");
    else
      console.log(
        "Error while connecting mongoDB : " + JSON.stringify(err, undefined, 2)
      );
  }
);
