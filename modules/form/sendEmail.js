const sendEmail = (formContent) => {
  return emailjs.send("service_nfqu58h", "template_r0i1idw", formContent);
};

export default sendEmail;
