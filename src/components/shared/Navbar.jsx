"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Container from "./Container";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="h-20 bg-blue-800 ">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href={"/"}>
            <div className="flex gap-2 items-center">
              <Image
                width={60}
                height={60}
                src={logo}
                alt=""
                className="w-12 object-cover"
              />
              <h2 className="text-2xl text-center font-semibold">
                Car Cleanify
              </h2>
            </div>
          </Link>
          <ul className="flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutus"}>About us</Link>
            <Link href={"/adminRoute"}>Admin</Link>
            <Link href={"/userRoute"}>User</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/reviews"}>Reviews</Link>
            {session?.data?.user && <Link href={"/dashboard"}>Dashboard</Link>}
          </ul>
          <div>
            {session.status === "loading" ? (
              "Loading"
            ) : (
              <>
                {!session?.data?.user ? (
                  <>
                    {" "}
                    <Link
                      className="bg-white text-blue-600 rounded-3xl py-2 px-4"
                      href={"/register"}
                    >
                      Sign up
                    </Link>
                    <button
                      className="bg-white text-blue-600 rounded-3xl py-2 px-4"
                      onClick={() => signIn()}
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-white text-blue-600 rounded-3xl py-2 px-4"
                    onClick={() => signOut()}
                  >
                    Log out
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
