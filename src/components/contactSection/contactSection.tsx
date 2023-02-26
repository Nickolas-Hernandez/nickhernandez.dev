import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
};

export const ContactSection = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <section id="contact" className="contact-section" >
      <div className="contain">
        <div className="contact-text-wrapper">
          <h5>Get In Touch!</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            assumenda suscipit sit, pariatur minus rem dolores alias sunt
            temporibus voluptates!
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="half-input" type="text" placeholder="First Name" {...register("firstName")} />
            {errors.firstName && "First name is required"}
            <input className="half-input" type="text" placeholder="Last Name" {...register("firstName")} />
            {errors.lastName && "Last name is required"}
            <input type="email" placeholder="Email Address" {...register("email")} />
            {errors.email && "Email is required"}
            <textarea id="" placeholder="Message" {...register("message")}></textarea>
            {errors.message && "Message is required"}
            <button className="w-full" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
