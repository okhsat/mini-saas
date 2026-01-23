"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email(),
});

type FormData = z.infer<typeof schema>;

export default function UserForm() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log("SUBMITTED", data.email);
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
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
}