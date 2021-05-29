'use strict';

// create App function
module.exports = function (app) {
  var meetings = require("../controllers/botControllers");

  // todoList Routes

  // get and post request for /todos endpoints
  app
    .route("/meetings")
    .get(meetings.meetingsList)
    .post(meetings.createMeeting);

  app
  .route("/meetings/:id")
  .delete(meetings.deleteMeeting);
};
