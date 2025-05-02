import React, { useState } from 'react';
import './Career.css';

const jobs = [
  { title: "Frontend Developer", company: "Google", location: "Bangalore", deadline: "2025-05-10" },
  { title: "Data Analyst", company: "Accenture", location: "Pune", deadline: "2025-05-15" },
  { title: "UI/UX Designer", company: "Zoho", location: "Chennai", deadline: "2025-05-12" },
  { title: "Backend Developer", company: "Infosys", location: "Hyderabad", deadline: "2025-05-20" },
];

const JobCard = ({ job, onApply }) => (
  <div className="job-card">
    <h2>{job.title}</h2>
    <hr />
    <p><strong>Company:</strong> {job.company}</p>
    <p><strong>Location:</strong> {job.location}</p>
    <p><strong>Deadline:</strong> {job.deadline}</p>
    <hr />
    <small>Posted on {job.deadline}</small>
    <br />
    <button onClick={() => onApply(job)}>Apply Now</button>
  </div>
);

function JobSearchBoard() {
  const [keyword, setKeyword] = useState('');
  const [functionalArea, setFunctionalArea] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSearch = () => {
    alert(`Searching:\nKeyword: ${keyword}\nArea: ${functionalArea}\nExperience: ${experience}`);
  };

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}\nName: ${formData.name}`);
    setSelectedJob(null);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div className="Header-head">
        <h1 className="heading">Career</h1>
        <p>Empowering careers through expert training, skill-building, and successful job placements across top companies.</p>
      </div>

      <div className="job-container">
        <h1 className="c-h">Current Jobs</h1>

        <div className="search-bar">
          <div className="field">
            <label>Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="Enter job title or skill"
            />
          </div>

          <div className="field">
            <label>Functional Area</label>
            <select value={functionalArea} onChange={e => setFunctionalArea(e.target.value)}>
              <option value="">Select Functional Area</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          <div className="field">
            <label>Experience</label>
            <select value={experience} onChange={e => setExperience(e.target.value)}>
              <option value="">Select Experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-2">1-2 Years</option>
              <option value="3+">3+ Years</option>
            </select>
          </div>

          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <div className="job-grid">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} onApply={setSelectedJob} />
          ))}
        </div>

        {/* Apply Popup Form */}
        {selectedJob && (
          <div className="apply-popup">
            <form className="apply-form" onSubmit={handleFormSubmit}>
              <button className="close-btn" onClick={() => setSelectedJob(null)}>&times;</button>
              <h2>Apply for {selectedJob.title}</h2>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleFormChange}
              />
              <button type="submit">Submit Application</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSearchBoard;
