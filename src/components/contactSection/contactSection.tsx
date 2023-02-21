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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name" {...register("firstName")} />
          {errors.firstName && "First name is required"}
          <input type="text" defaultValue="Last Name" {...register("firstName")} />
          {errors.lastName && "Last name is required"}
          <input type="email" defaultValue="Email Address" {...register("email")} />
          {errors.email && "Email is required"}
          <textarea id="" cols={30} rows={10} {...register("message")}></textarea>
          {errors.message && "Message is required"}
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
