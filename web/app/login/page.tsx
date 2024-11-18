"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRouter();

  const [error, setError] = useState(null);

  const login = async (data) => {
    const result = await signIn("auth", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Login Inválido");
      return;
    }

    route.push("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-4">
        <input
          {...register("email", { required: true })}
          className="input input-bordered"
          placeholder="E-mail"
          required={true}
        />
        <input
          {...register("password", { required: true })}
          className="input input-bordered"
          type="password"
          placeholder="Senha"
          required={true}
        />

        <button className="btn btn-primary text-white bg-[#A0AB3D] hover:bg-[#C1CE4B] border-none">
          Entrar
        </button>
      </form>

      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </>
  );
}
