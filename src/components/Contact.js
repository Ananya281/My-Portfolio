import {useState,useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';


export const Contact=()=>{
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // const config={
    //   Username:'ananya.developer@yopmail.com',
    //   Password:'C40F6F2D3151A5F027DA2C4ACFB03D0A441C',Host:'smtp.elasticemail.com',
    //   Port:2525,
    //   To : 'them@website.com',
    //   From : "you@isp.com",
    //   Subject : "This is the subject",
    //   Body : "And this is the body"
    // };

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };  
      
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      // e8LtshRhwaYHnvAid
      // template_qd4k81q
      // service_1x6dxtn

      emailjs.send(
        'service_1x6dxtn',
        'template_qd4k81q',
        {
          from_name: form.name,
          to_name: "Ananya Chauhan",
          from_email: form.email,
          to_email: "achauhan_be22@thapar.edu",
          message: form.message,
        },
        'e8LtshRhwaYHnvAid'
        )
        .then(()=>{
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error)=>{
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
    };

    return(
        <div id='contacts'
        className={` contacts xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ml-20`}
        >
        <motion.div variants={slideIn('left',"tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
         <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
             <button
            type='submit'
            className='bg-tertiary py-3 px-8 my-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
            {loading ? "Sending..." : "Send"}
          </button>
        </label>
        </form>
        </motion.div>
        <motion.div variants={slideIn('right',"tween",0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas/>
        </motion.div>
        </div>
    )
}