// src/App.jsx
import { useEffect, useState } from 'react';
import { API_BASE_URL } from './apiConfig';
import PatientDashboard from './PatientDashboard';
import PatientForm from './PatientForm';
import './App.css';

function App() {
  const [page, setPage] = useState('dashboard'); // 'dashboard' ou 'form'
  const [patients, setPatients] = useState([]);

  // Carregar pacientes da API
  const fetchPatients = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/patient`);
      const data = await res.json();
      setPatients(data);
    } catch (err) {
      console.error('Erro ao buscar pacientes', err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Adicionar paciente
  const handleAddPatient = async (patientData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/patient`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patientData),
      });

      if (res.ok) {
        await fetchPatients();
        setPage('dashboard'); // volta pro board
      } else {
        alert('Erro ao salvar paciente');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Deletar paciente
  const handleDeletePatient = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/v1/patient/${id}`, {
        method: 'DELETE',
      });
      fetchPatients();
    } catch (err) {
      console.error('Erro ao deletar paciente', err);
    }
  };

  return (
    <div className="app-container">
      {page === 'dashboard' ? (
        <PatientDashboard
          patients={patients}
          onAddNew={() => setPage('form')}
          onDeletePatient={handleDeletePatient}
        />
      ) : (
        <PatientForm
          onShowBoard={() => setPage('dashboard')}
          onSubmit={handleAddPatient}
        />
      )}
    </div>
  );
}

export default App;
