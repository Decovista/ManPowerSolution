import { useState } from 'react';
import './Career.css';

const jobs = [
  { title: "Electrical Engineering", company: "L&T", location: "Delhi", deadline: "2025-05-30", experience: "Fresher" },
  { title: "Solar Energy Technician", company: "Adani Solar", location: "Rajasthan", deadline: "2025-06-01", experience: "Fresher" },
  { title: "Electronic Technician", company: "Siemens", location: "Mumbai", deadline: "2025-06-05", experience: "1-2" },
  { title: "Welder Training", company: "TATA Steel", location: "Jamshedpur", deadline: "2025-06-10", experience: "Fresher" },
  { title: "Fitter", company: "BHEL", location: "Bhopal", deadline: "2025-06-12", experience: "1-2" },
  { title: "Animal Husbandry & Artificial Insemination (AI)", company: "AgroVet", location: "Punjab", deadline: "2025-06-15", experience: "1-2" },
  { title: "Rural Medical Practitioner (RMP)", company: "Rural Health Mission", location: "UP", deadline: "2025-06-20", experience: "3+" },
  { title: "Mobile Repair", company: "Samsung", location: "Noida", deadline: "2025-06-25", experience: "Fresher" },
  { title: "Automobile Technician", company: "Maruti Suzuki", location: "Gurgaon", deadline: "2025-07-01", experience: "1-2" },
  { title: "Agriculture", company: "ICAR", location: "Lucknow", deadline: "2025-07-05", experience: "Fresher" },
  { title: "Accounting and Finance", company: "Deloitte", location: "Pune", deadline: "2025-07-15", experience: "3+" },
  { title: "Hotel Management", company: "Taj Group", location: "Mumbai", deadline: "2025-07-20", experience: "3+" },
  { title: "Marketing and Sales", company: "HUL", location: "Chennai", deadline: "2025-07-10", experience: "1-2" }
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

  // Filter the jobs based on the criteria
  const filteredJobs = jobs.filter(job => {
    return (
      (!keyword || job.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (!functionalArea || job.title === functionalArea) &&
      (!experience || job.experience === experience)
    );
  });

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
            <label>Trade Category</label>
            <select value={functionalArea} onChange={e => setFunctionalArea(e.target.value)}>
              <option value="">Select Trade Category</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Solar Energy Technician">Solar Energy Technician</option>
              <option value="Electronic Technician">Electronic Technician</option>
              <option value="Fitter">Fitter</option>
              <option value="Automobile Technician">Automobile Technician</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Accounting and Finance">Accounting and Finance</option>
              <option value="Marketing and Sales">Marketing and Sales</option>
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

          <button className="search-button">Search</button>
        </div>

        <div className="job-grid">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} onApply={setSelectedJob} />
          ))}
        </div>

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
