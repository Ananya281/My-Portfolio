import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn, textVariant, fadeIn } from "../utils/motion";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1x6dxtn",
        "template_qd4k81q",
        {
          from_name: form.name,
          to_name: "Ananya Chauhan",
          from_email: form.email,
          to_email: "achauhan_be22@thapar.edu",
          message: form.message,
        },
        "e8LtshRhwaYHnvAid"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contacts"
      className="contacts flex flex-col-reverse xl:flex-row gap-8 px-6 sm:px-12 lg:px-24"
    >
      {/* Contact Form Section */}
      <motion.div
        variants={textVariant()}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl min-h-[40] mb-5"
      >
        <p className="text-secondary text-sm uppercase tracking-wide">
          Get in touch
        </p>
        <h2 className="text-white text-5xl font-bold mt-2">Contact.</h2>
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-base sm:text-lg leading-relaxed max-w-3xl"
        >
          If you have any questions or just want to connect, feel free to send a
          message using the form below. I’ll get back to you as soon as
          possible!
        </motion.p> */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-6 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[650px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
