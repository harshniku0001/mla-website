import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const text = "यह प्लेटफॉर्म गन्नौर विधानसभा के नागरिकों के लिए बनाया गया है — आपकी शिकायतें और सुझाव सीधे श्री देवेंद्र काद्यान जी तक पहुँचाने के लिए। आपकी आवाज़, हमारा संकल्प।";
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      speechSynthesis.speak(utterance);
    }
  }, []);

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
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', address: '', subject: '', message: '', file: null });
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">

      {/* Background video with opacity overlay */}
      <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0 brightness-50">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center px-6 py-10 min-h-screen max-w-5xl mx-auto">

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight drop-shadow-lg"
          style={{ textShadow: '0 0 10px rgba(79,70,229,0.8)' }}
        >
          🙏 गन्नौर के हर घर तक सेवा, हर दिल में विश्वास<br />
          <span className="text-indigo-400 text-3xl md:text-4xl font-semibold mt-3 block">नेता नहीं बेटा, आपका देवेंद्र काद्यान</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-center max-w-3xl mb-12 bg-indigo-700/70 p-6 rounded-xl shadow-lg font-semibold tracking-wide italic border-l-8 border-indigo-400"
        >
          यह प्लेटफॉर्म गन्नौर विधानसभा के नागरिकों के लिए बनाया गया है — आपकी शिकायतें और सुझाव सीधे <strong>श्री देवेंद्र काद्यान जी</strong> तक पहुँचाने के लिए।  
          <br />
          <span className="text-base italic mt-2 block">आपकी आवाज़, हमारा संकल्प।</span>
        </motion.p>

        <div className="flex flex-col items-center my-8 max-w-xl text-center">
          <img src={devenderImage} alt="Devender Kadyan" className="w-72 h-72 rounded-full border-8 border-indigo-500 shadow-2xl mb-6 object-cover" />
          <p className="text-3xl text-white font-semibold max-w-lg leading-relaxed drop-shadow-md">
            “जनसेवा मेरा धर्म है। आपकी समस्याओं को दूर करना मेरी ज़िम्मेदारी है।”<br />
            <span className="font-bold text-indigo-400 mt-3 block text-xl">— देवेंद्र काद्यान, विधायक (गन्नौर)</span>
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-white/95 text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-xl backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-2">
            📝 शिकायत या सुझाव भेजें
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="आपका नाम" className="input" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="मोबाइल नंबर" className="input" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="पता" className="input" />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="विषय" className="input" />
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="समस्या का विवरण" className="input h-28 resize-none" />
            <input type="file" name="file" onChange={handleChange} className="input p-2 file:bg-indigo-700 file:text-white file:rounded file:px-4 file:py-2" />
            <button type="submit" className="w-full bg-indigo-700 hover:bg-indigo-800 transition rounded-lg text-white py-3 font-semibold text-lg shadow-lg">
              सबमिट करें
            </button>
          </form>

          {submitted && <p className="text-green-700 mt-5 font-semibold text-center text-lg">✅ आपकी शिकायत/सुझाव सफलतापूर्वक भेज दिया गया है!</p>}
        </motion.div>

      </div>
    </div>
  );
};

export default App;
