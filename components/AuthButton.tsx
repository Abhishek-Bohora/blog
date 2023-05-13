"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const AuthButton = () => {
  // const { data: session } = useSession();
  // if (session && session.user) {
  //   return (
  //     <div className="flex items-center gap-x-6">
  //       <p className="font-sans text-gray-200 text-lg">
  //         Welcome, {session.user.name}
  //       </p>
  //       <button className="btn btn-primary" onClick={() => signOut()}>
  //         sign out
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <button className="btn btn-primary" onClick={() => signIn()}>
      sign in
    </button>
  );
};

export default AuthButton;
