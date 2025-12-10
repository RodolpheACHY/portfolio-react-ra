"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "react-toastify";  // for notifications
import emailjs from "@emailjs/browser";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description : "(+33) 6 49 58 36 10",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description : "rod23_reseaux@yahoo.fr",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description : "Noisy-le-Grand, 93160",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérification AVANT d'appeler EmailJS
    if (!formData.message.trim()) {
      toast.error("Le message ne peut pas être vide.");
      return;
    }

    // EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID)

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.log("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.")
    }
  };

  return (
    <motion.section 
      initial={{ opacity:0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Intéressé par mon profil ? Je suis disponible et motivé pour rejoindre une équipe ou collaborer sur vos projets. N’hésitez pas à me contacter : je vous répondrai rapidement.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="firstname" 
                  type="text" 
                  placeholder="Firstname" 
                  value={formData.firstname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  name="lastname" 
                  type="text" 
                  placeholder="Lastname" 
                  value={formData.lastname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Email address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  name="phone" 
                  type="tel" 
                  placeholder="Phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              {/* textarea */}
              <Textarea 
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message} 
                onChange={handleChange}
                
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact