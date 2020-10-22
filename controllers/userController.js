const db = require("../models"),
  axios = require("axios");
module.exports = (a) => {
  function b() {
    axios
      .get("https://api.namefake.com/english-united-states/female/")
      .then(function (a) {
        db.Ghost.create({
          fullName: a.data.name,
          deadFor: 170,
          homeTown: "Atlanta, Georgia",
          faveSport: a.data.sport,
        })
          .then(() => {
            c();
          })
          .catch(() => {
            console.log();
          });
      })
      .catch(() => {
        console.log();
      });
  }
  function c() {
    axios
      .get("https://api.namefake.com/english-united-states/female/")
      .then(function (a) {
        db.Ghost.create({
          fullName: a.data.name,
          deadFor: 65,
          homeTown: "Arno, Virginia",
          faveSport: a.data.sport,
        })
          .then(() => {
            d();
          })
          .catch(() => {
            console.log();
          });
      })
      .catch(() => {
        console.log();
      });
  }
  function d() {
    axios
      .get("https://api.namefake.com/english-united-states/male/")
      .then(function (a) {
        db.Ghost.create({
          fullName: a.data.name,
          deadFor: 9,
          homeTown: "Cleveland, Ohio",
          faveSport: a.data.sport,
        })
          .then(() => {
            e();
          })
          .catch(() => {
            console.log();
          });
      })
      .catch(() => {
        console.log();
      });
  }
  function e() {
    axios
      .get("https://api.namefake.com/english-united-states/male/")
      .then(function (a) {
        db.Ghost.create({
          fullName: a.data.name,
          deadFor: 272,
          homeTown: "Liverpool, England",
          faveSport: a.data.sport,
        })
          .catch(() => {
            console.log();
          })
          .catch(() => {
            console.log();
          });
      });
  }
  a.get("/home/1", (a, b) => {
    db.Ghost.findOne({ where: { deadFor: 170 }, raw: !0 })
      .then((a) => {
        let b = { fullName: a.fullName, deadFor: a.deadFor };
        return b;
      })
      .then((a) => {
        b.render("home", { entryGhost: a });
      })
      .catch((a) => {
        console.log(a);
      });
  }),
    a.post("/api/users", (a, b) => {
      console.log(a.body),
        db.User.create(a.body).then((a) => {
          b.json(a);
        });
    }),
    a.put("/api/users", function (a, b) {
      console.log(a.data),
        db.User.update(
          { age: a.body.age, gender: a.body.gender },
          { where: { identifier: 1 } }
        ).then((a) => {
          b.json(a);
        });
    }),
    a.get("/room1/2", (a, b) => {
      db.Ghost.findOne({ where: { deadFor: 65 }, raw: !0 })
        .then((a) => {
          let b = {
            fullName: a.fullName,
            deadFor: a.deadFor,
            homeTown: a.homeTown,
            faveSport: a.faveSport,
          };
          return b;
        })
        .then((a) => {
          db.User.findOne({ where: { identifier: 1 }, raw: !0 })
            .then((c) => {
              let d = { fullName: c.fullName };
              b.render("room1", { entryGhost: a, viewUser: d });
            })
            .catch((a) => {
              console.log(a);
            });
        });
    }),
    a.get("/room2/3", (a, b) => {
      db.Ghost.findOne({ where: { deadFor: 9 }, raw: !0 })
        .then(function (a) {
          let b = {
            fullName: a.fullName,
            deadFor: a.deadFor,
            homeTown: a.homeTown,
            faveSport: a.faveSport,
          };
          return b;
        })
        .then((a) => {
          db.User.findOne({ where: { identifier: 1 }, raw: !0 })
            .then((a) => {
              let b = { fullName: a.fullName };
              return b;
            })
            .then((c) => {
              db.Ghost.findOne({ where: { deadFor: 170 }, raw: !0 }).then(
                (d) => {
                  let e = { fullName: d.fullName };
                  b.render("room2", {
                    entryGhost: a,
                    viewUser: c,
                    frontGhost: e,
                  });
                }
              );
            })
            .catch((a) => {
              console.log(a);
            });
        });
    }),
    a.get("/room3/4", (a, b) => {
      3,
        db.Ghost.findOne({ where: { deadFor: 272 }, raw: !0 })
          .then(function (a) {
            let b = {
              fullName: a.fullName,
              deadFor: a.deadFor,
              homeTown: a.homeTown,
              faveSport: a.faveSport,
            };
            return b;
          })
          .then((a) => {
            db.Ghost.findOne({ where: { deadFor: 170 }, raw: !0 }).then((c) => {
              let d = { fullName: c.fullName };
              b.render("room3", { entryGhost: a, frontGhost: d });
            });
          })
          .catch((a) => {
            console.log(a);
          });
    }),
    a.delete("/api/ghosts", function () {
      db.Ghost.destroy({ where: { deadFor: [170, 65, 9, 272] } })
        .then(() => {
          b();
        })
        .catch(() => {
          console.log();
        });
    }),
    a.delete("/api/users", function () {
      db.User.destroy({ where: { identifier: 1 } })
        .then(() => {})
        .catch(() => {
          console.log();
        });
    }),
    b();
};
