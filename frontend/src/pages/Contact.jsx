import React, { useState } from 'react'
import Container from '../components/Container'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold mb-3">Contact Us</h1>
          <p className="text-slate-600 mb-6">
            Have a question about your order, delivery area, or menu options? Send us a message and our support team will get back to you.
          </p>

          <div className="space-y-4 text-slate-700">
            <div>
              <h2 className="font-semibold text-slate-900">Company Information</h2>
              <p>Tomato Food Delivery</p>
              <p>Downtown Branch, Cairo, Egypt</p>
              <p>support@tomatofood.com</p>
              <p>+20 100 123 4567</p>
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">Business Hours</h2>
              <p>Sunday - Thursday: 9:00 AM - 11:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
            </div>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-4"
        >
          {submitted && (
            <div className="p-3 rounded-lg bg-green-100 text-green-700">
              Thanks for reaching out. We will contact you soon.
            </div>
          )}

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </Container>
  )
}

export default Contact
