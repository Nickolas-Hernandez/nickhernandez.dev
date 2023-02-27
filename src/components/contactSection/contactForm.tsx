import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
};

export const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      id="firstName"
      className={`half-input ${errors.firstName ? 'error' : ''}`}
      type="text"
      placeholder="First Name"
      {...register("firstName", { required: true, maxLength: 20 })}
      />
      <input
      id="lastName"
      className={`half-input ${errors.lastName ? 'error' : ''}`}
      type="text"
      placeholder="Last Name"
      {...register("lastName", { required: true, maxLength: 20 })}
      />
      <input
      id="email"
      className={`${errors.email ? 'error' : ''}`}
      type="email"
      placeholder="Email Address"
      {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,})} />
      <textarea
      id="message"
      className={`${errors.message ? 'error' : ''}`}
      placeholder="Message"
      {...register("message", { required: true })}
      ></textarea>
      <button className="w-full" type="submit">Submit</button>
    </form>
  );
}
