import type { Metadata } from "next";
import Login from "./login/page";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard - Company",
  description: "Dashboard to follow companies information",
};

export default async function Home() {
  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 md:flex bg-neutral-100 justify-center">
          <div className="mx-auto flex  justify-center space-y-6 sm:w-[350px]">
            <Image
              src={`/logo.svg`}
              alt="logo"
              width={100}
              height={100}
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight text-primary-custom-dark mb-4">
                Faça seu login
              </h1>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
