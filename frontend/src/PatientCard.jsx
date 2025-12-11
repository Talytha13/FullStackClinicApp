// src/PatientCard.jsx
function PatientCard({ patient, onDelete }) {
  return (
    <div className="patient-card">
      {/* Aqui você poderia colocar a imagem que o prof deu */}
      <div className="patient-image" />

      <div className="patient-body">
        <div className="patient-header">
          <a href="#" className="patient-name">
            {patient.patientName}
          </a>
          <button className="delete-btn" onClick={onDelete}>
            X
          </button>
        </div>

        <p className="patient-doctor">Dr. {patient.doctorAssigned}</p>
        <p className="patient-diagnosis">{patient.diagnosis}</p>
      </div>
    </div>
  );
}

export default PatientCard;
