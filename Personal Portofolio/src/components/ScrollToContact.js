const ScrollToContact = () => {
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  }
};

export default ScrollToContact;
