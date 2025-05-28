import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import bgVideo from "./assets/bg-video.mp4";
import devenderImage from "./assets/devender-kadyan.jpg";



const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    subject: '',
    message: '',
    file: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', address: '', subject: '', message: '', file: null });
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      <video autoPlay muted loop className="background-video">
  <source src={bgVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <div className="bg-black/60 min-h-screen px-6 py-10 flex flex-col items-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          🙏 सेवा आपका लक्ष्य — समाधान हमारा वादा
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-center max-w-2xl mb-8"
        >
          यह प्लेटफॉर्म गन्नौर विधानसभा के नागरिकों को आपकी शिकायतें और सुझाव सीधे श्री देवेंद्र काद्यान जी तक पहुँचाने के लिए बनाया गया है।
        </motion.p>
        <div className="flex flex-col items-center my-6">
  <img src={devenderImage} alt="Devender Kadyan" className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-2 object-cover" />

  <p  className="text-sm text-white text-center max-w-sm">
    “जनसेवा मेरा धर्म है। आपकी समस्याओं को दूर करना मेरी ज़िम्मेदारी है।” <br />
    <span className="font-semibold">— देवेंद्र काद्यान, विधायक (गन्नौर)</span>
  </p>
</div>


        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-white/90 text-black p-6 rounded-xl shadow-2xl w-full max-w-xl backdrop-blur"
        >
          <h2 className="text-2xl font-semibold mb-4">📝 शिकायत या सुझाव भेजें</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="आपका नाम" className="input" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="मोबाइल नंबर" className="input" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="पता" className="input" />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="विषय" className="input" />
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="समस्या का विवरण" className="input h-24 resize-none" />
            <input type="file" name="file" onChange={handleChange} className="input p-1 file:bg-indigo-600 file:text-white file:rounded file:px-3 file:py-1" />
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white py-2 font-semibold">
              सबमिट करें
            </button>
          </form>
          {submitted && <p className="text-green-700 mt-3">✅ आपकी शिकायत/सुझाव सफलतापूर्वक भेज दिया गया है!</p>}
        </motion.div>

        <footer className="mt-10 text-sm text-gray-200 text-center">
          <p>© 2025 MLA Help Desk • प्रस्तावक: हर्ष, शाहजादपुर</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
