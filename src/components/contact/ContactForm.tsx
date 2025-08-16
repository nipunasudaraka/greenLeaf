"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded h-32"
      />

      <Button
        type="submit"
        className="bg-secondary-color hover:bg-primary-color"
      >
        Send Message
      </Button>
    </form>
  );
}
