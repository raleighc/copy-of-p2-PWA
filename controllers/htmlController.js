const express = require("express"),
  html = express.Router();
module.exports = function (a) {
  a.get("/", (a, b) => {
    b.render("index");
  }),
    a.get("/startpage/:id", (a, b) => {
      b.render("startpage");
    }),
    a.get("/home/:id", (a, b) => {
      b.render("home");
    }),
    a.get("/foyer/:id", (a, b) => {
      b.render("foyer");
    }),
    a.get("/ghosts/:id", (a, b) => {
      b.render("ghosts");
    }),
    a.get("/room1/:id", (a, b) => {
      b.render("room1");
    }),
    a.get("rooms/:id", (a, b) => {
      b.render("room2");
    }),
    a.get("rooms/:id", (a, b) => {
      b.render("room3");
    });
};
