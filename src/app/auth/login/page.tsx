"use server";
import LoginForm from "@/app/components/LoginForm";
import Image from "next/image";

const Login = () => {
  let message = "";

  const getLoginData = async (formData: {
    email: string;
    password: string;
  }) => {
    "use server";

    const email = formData.email;
    const password = formData.password;
    const url = process.env.NEXT_API_URL as string;

    // const res = await fetch(`${url}auth/login`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const auth = await res.json();
    return "User successfuly logged in!";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-12 shadow-2xl overflow-hidden h-96 rounded-2xl">
        <div className="col-span-6 p-16 bg-lavender-web">
          <div className="flex flex-col items-center gap-8 justify-center h-48 ">
            <Image
              src="/teachU_logo.png"
              alt="teachU"
              width={280}
              height={280}
            />
            <h3 className="text-2xl font-bold">Welcome Back!</h3>
          </div>
        </div>
        <div className="col-span-6 p-16">
          <LoginForm getLoginData={getLoginData} />
        </div>
      </div>
    </div>
  );
};

export default Login;
