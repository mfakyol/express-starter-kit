import mongoose from "mongoose";

const dbConnectionString = "connString";

export default {
  version: "/api/v1",
  secret: "jwt-secret",
};

export function connectDb() {
  mongoose.connect(dbConnectionString, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected db"))
  .catch((err) => console.log(err.message))
}
