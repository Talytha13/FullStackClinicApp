// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Patient = require('./models/patientModel'); // importa o modelo

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(' Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(' API rodando na porta ' + PORT);
    });
  })
  .catch((err) => console.error('Erro MongoDB:', err));


// ====== ROTAS (CRUD) ======

// GET ALL
app.get('/api/v1/patient', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pacientes' });
  }
});

// GET BY ID
app.get('/api/v1/patient/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
});

// POST - CREATE
app.post('/api/v1/patient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const saved = await newPatient.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar paciente' });
  }
});

// PUT - UPDATE
app.put('/api/v1/patient/:id', async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar paciente' });
  }
});

// DELETE
app.delete('/api/v1/patient/:id', async (req, res) => {
  try {
    const deleted = await Patient.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json({ message: 'Paciente deletado' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar paciente' });
  }
});
