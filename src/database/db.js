import mongoose from "mongoose";

const connetcDatabase = () => {
  console.log("wait connecting to the database");

  mongoose
    .connect(process.env.DATABASE_URL,
      //{ useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Mongo DB atlas Connected"))
    .catch((error) => console.log(error));
};

export default connetcDatabase;