"use server";
import LoginForm from "@/app/components/LoginForm";
import Image from "next/image";

interface Response {
  error: string;
  message: string;
  statusCode: number;
  status: boolean;
  data: {
    access_token: string;
    user: {
      email: string;
      id: number;
      username: string;
      role: string;
    };
  };
}

const Login = () => {
  const getLoginData = async (formData: {
    email: string;
    password: string;
  }): Promise<Response> => {
    "use server";

    const email = formData.email;
    const password = formData.password;
    const url = process.env.NEXT_API_URL as string;

    try {
      const res = await fetch(`${url}auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const auth = await res.json();
      return auth;
    } catch (error) {
      return {
        error: "error",
        message: "Login failed, Try again!",
        statusCode: 500,
        status: false,
        data: {
          access_token: "",
          user: {
            email: "",
            id: NaN,
            username: "",
            role: "",
          },
        },
      };
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: 'url("/loginbg.png")' }}
    >
      <div className="grid grid-cols-12 overflow-hidden">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7">
          {/* <div className="flex flex-col items-center gap-8 justify-center h-48 ">
            <Image
              src="/teachU_logo.png"
              alt="teachU"
              width={280}
              height={280}
            />
            <h3 className="text-2xl font-bold">Welcome Back!</h3>
          </div> */}
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 p-8 sm:p-8 md:p-12 lg:p-16 bg-white shadow-2xl rounded-2xl">
          <LoginForm getLoginData={getLoginData} />
        </div>
      </div>
    </div>
  );
};

export default Login;
