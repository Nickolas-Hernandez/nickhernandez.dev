import { ContactForm } from "./contactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="contact-section" >
      <div className="contain">
        <div className="contact-text-wrapper">
          <strong className="opacity-70 mb-5 text-sm lg:text-base uppercase inline-block font-medium">Get In Touch</strong>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            assumenda suscipit sit, pariatur minus rem dolores alias sunt
            temporibus voluptates!
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:px-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
