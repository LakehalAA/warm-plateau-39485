"use strict";
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const ReunionSchema = new Schema({
  titre: {
    type: String,
    required: false,
  },
  days: {
    type: Number,
    required: false,
  },
  month: {
    type: Number,
    required: false,
  },
  heureInit: {
    type: Number,
    required: false,
  },
  minuteInit: {
    type: Number,
    required: false,
  },
  heureFin: {
    type: Number,
    required: false,
  },
  minuteFin: {
    type: Number,
    required: false,
  },
  members: {
    type: Array,
    required: false,
  },
  pointsAbord: {
    type: Array,
    required: false,
  },
  rapporteur: {
    type: String,
    required: false,
  },
  chaineId: {
    type: String,
    required: false,
  },
  categNom: {
    type: String,
    required: false,
  },
  coordId: {
    type: String,
    required: false,
  },
});

// create and export model
module.exports = mongoose.model("reunionModel", ReunionSchema);
