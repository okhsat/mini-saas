"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .email("Invalid email")
    .min(1, "Email is required"),
});

type FormData = z.infer<typeof schema>;

export default function UserForm() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },

  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    alert("Submitted: " + data.email);
    console.log("SUBMITTED", data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 space-y-4"
    >
      <input
        {...register("email")}
        className="border p-2"
        placeholder="Email"
      />
      
      {errors.email && (
        <p className="text-red-500 text-sm">
          {errors.email.message}
        </p>
      )}

      <br/>

      <button type="submit" className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
}