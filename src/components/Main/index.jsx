import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import hooshopLogo from './images/hooshop-logo.JPG';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Main = () => {
  const generateUniqueId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    workplace: '',
    contact: '',
    clientemail: '',
    demoApproved: 'No',
    nextMeetingDate: '',
    specialPrice: '',
    meetingOutput: '',
    
    uniqueId: generateUniqueId(),
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('it-IT', { hour12: false }),
  });
  const [error, setError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('useremail');
    const employeeId = localStorage.getItem('employeeId'); // Retrieve employeeId from local storage
    if (loggedInUserEmail) {
      setFormData((prevData) => ({
        ...prevData,
        clientemail: loggedInUserEmail,
        employeeId: employeeId, // Set employeeId in form data
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://msmetrackserver-6.onrender.com/api/submit'; // Adjust the API endpoint
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form submitted successfully:', response.data);
      setSubmissionSuccess(true);
      setError(''); // Clear error message on successful submission
    } catch (err) {
      console.error('Error submitting the form:', err.response ? err.response.data : err.message);
      setError('Error submitting the form. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('useremail');
    localStorage.removeItem('employeeId');
    window.location.reload();
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Innovation at Your Fingertips</h1>
        <a className={styles.white_btn} href="/Rates" target="_blank">Rates</a>
        <div className={styles.nav_buttons}>
          <button className={styles.menu_btn} onClick={toggleProfile}>
            <FaBars />
          </button>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
        {showProfile && (
          <div className={styles.profile_info}>
            <FaUserCircle />
            <span>{formData.clientemail}</span>
           
          </div>
          
        )}
        
      </nav>
      <img src={hooshopLogo} alt="Hooshop Logo" className={styles.company_logo} />
      <h2 className={styles.slogan}>
        📈 Digital Bnega Bharat: Save Trees, Embrace Digitalization with Our Menu Card 🌳
      </h2>
      {submissionSuccess ? (
        <div className={styles.thankYou}>
          <h2>🎉 Congratulations!</h2>
          <p>Thank you, MSME Mitra, for submitting the form! We will contact you by email within 2-3 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>📝 Client Information Form</h2>
          <label>
            👤 Name and Profession
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            👤 Owner Name
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            🏢 Workplace and Address
            <input
              type="text"
              name="workplace"
              value={formData.workplace}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            📞 Contact Details 
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            📧 Client Email 
            <input
              type="text"
              name="clientemail"
              value={formData.clientemail}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            ✅ Demo Approved
            <select
              name="demoApproved"
              value={formData.demoApproved}
              onChange={handleChange}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            📅 Next Meeting Date
            <input
              type="datetime-local"
              name="nextMeetingDate"
              value={formData.nextMeetingDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            💰 Special Price
            <input
              type="number"
              name="specialPrice"
              value={formData.specialPrice}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            🗒️ Meeting Output
            <textarea
              name="meetingOutput"
              value={formData.meetingOutput}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <footer className={styles.footer}>
        <p>Contact us at: msmemitratushar@gmail.com</p>
        <p>Phone: 981-740-9607</p>
        <p>Address: Rohtak, Gohana Rd</p>
        <p>&copy; 2022 Hooshop, digital menucard service by MSME Mitra</p>
      </footer>
    </div>
  );
};

export default Main;
