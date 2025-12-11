// src/PatientForm.jsx
import { useState } from 'react';

function PatientForm({ onShowBoard, onSubmit }) {
  const [patientName, setPatientName] = useState('');
  const [doctorAssigned, setDoctorAssigned] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      patientName,
      doctorAssigned,
      diagnosis,
    });

    // (opcional) limpar campos
    setPatientName('');
    setDoctorAssigned('');
    setDiagnosis('');
  };

  return (
    <div className="page">
      <header className="page-header">
        <button className="secondary-btn" onClick={onShowBoard}>
          Show Patient Board
        </button>
      </header>

      <main className="form-container">
        <h1>Patient Intake</h1>
        <p>Create new patient record</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Assigned Doctor"
            value={doctorAssigned}
            onChange={(e) => setDoctorAssigned(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Diagnosis / Notes"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
          />

          <button type="submit" className="primary-btn full-width">
            Submit Record
          </button>
        </form>
      </main>
    </div>
  );
}

export default PatientForm;
