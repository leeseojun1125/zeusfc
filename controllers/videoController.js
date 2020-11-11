import routes from "../routes";
import Video from "../models/Video";

export const home = (req, res) =>
  res.render("index.html", { pageTitle: "Home" });
