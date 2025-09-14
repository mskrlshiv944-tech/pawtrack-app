import React, { useState } from 'react';
import './ReportPage.css';

const ReportPage = () => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Abhi ke liye console mein data dikhayenge
    console.log('Submitted Data:', formData);
    alert('Report submitted! Check console for details.');
    // Reset form
    setFormData({ location: '', description: '', photo: null });
  };

  return (
    <div className="report-container">
      <h1>Report Aggressive Dog</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location (e.g., Connaught Place, Delhi)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the dog and behavior"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Upload Photo (Optional):</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportPage;