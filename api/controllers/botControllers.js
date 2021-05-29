const Meeting = require("../models/botModels");

exports.createMeeting = (req, res) => {
  let chevMeetings = [];
  let tempsInit = [req.body.heureInit, req.body.minuteInit];
  let tempsFin = [req.body.heureFin, req.body.minuteFin];
  let test = false;
  Meeting.find(
    { days: req.body.days, month: req.body.month },
    (err, meeting) => {
      if (meeting.length == 0) {
        let meeting = new Meeting(req.body);
        meeting.save((err1, meeting) => {
          if (err1) {
            res.status(500).send(err1);
          }
          res.status(200).send(meeting);
        });
      } else {
        Meeting.find(
          { heureInit: { $gte: tempsInit[0], $lt: tempsFin[0] } },
          (err, meetng) => {
            if (meetng && meetng.length != 0) {
              chevMeetings.push(meetng);
              test = true;
              console.log("cas1");
              res
                .status(500)
                .send({ message: "Keyen others meetings : " + chevMeetings });
            }
          }
        );
        if (!test) {
          console.log("KHhiaozdhsoiq");
          let meeting = new Meeting(req.body);
          meeting.save((err1, meeting) => {
            if (err1) {
              res.status(500).send(err1);
            }
          });
        } else {
          res
            .status(500)
            .send({ message: "Keyen others meetings : " + chevMeetings });
        }
      }
    }
  );
};

exports.meetingsList = (req, res) => {
  Meeting.find({}, (err, meeting) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(meeting);
  });
};

exports.deleteMeeting = async (req, res) => {
  await Meeting.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send({ message: "Meeting tSerbess" });
  });
};
