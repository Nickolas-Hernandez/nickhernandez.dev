import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
};

export const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email"));
  console.log("error: ", errors);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      className="half-input"
      type="text"
      placeholder="First Name"
      {...register("firstName", { required: true, maxLength: 20 })}
      />
      {errors.firstName && "First name is required"}
      <input
      className="half-input"
      type="text"
      placeholder="Last Name"
      {...register("lastName", { required: true, maxLength: 20 })}
      />
      <input
      type="email"
      placeholder="Email Address"
      {...register("email", {required: true})} />
      <textarea id="" placeholder="Message" {...register("message")}></textarea>
      <button className="w-full" type="submit">Submit</button>
    </form>
  );
}
