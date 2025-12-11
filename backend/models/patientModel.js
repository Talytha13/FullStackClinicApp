// models/patientModel.js
const mongoose = require('mongoose');

// >>> TROCA pelo teu ID e primeiro nome:
const COLLECTION_NAME = '300394605-talytha';

const patientSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorAssigned: { type: String, required: true },
  diagnosis: { type: String }
});

// o 3º parâmetro força o nome exato da coleção
const Patient = mongoose.model('Patient', patientSchema, COLLECTION_NAME);

module.exports = Patient;
