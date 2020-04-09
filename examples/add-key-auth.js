const hivejs = require('../lib');

/* Generate private active WIF */
const username = process.env.HIVE_USERNAME;
const password = process.env.HIVE_PASSWORD;
const privActiveWif = hivejs.auth.toWif(username, password, 'active');

/** Add posting key auth */
hivejs.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'STM88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
