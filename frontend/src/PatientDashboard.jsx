// src/PatientDashboard.jsx
import PatientCard from './PatientCard';

function PatientDashboard({ patients, onAddNew, onDeletePatient }) {
  return (
    <div className="page">
      
      <h1 className="page-title">Clinic Daily Board</h1>

      <div className="center-btn-wrapper">
        <button className="primary-btn" onClick={onAddNew}>
          + Add New Patient
        </button>
      </div>

      <div className="divider" />

      <div className="card-grid">
        {patients.map((p) => (
          <PatientCard
            key={p._id}
            patient={p}
            onDelete={() => onDeletePatient(p._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;

