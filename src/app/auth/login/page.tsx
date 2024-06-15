"use server";
import LoginForm from "@/app/components/LoginForm";

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

    const res = await fetch(`${url}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const auth = await res.json();
    message = auth.message;
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6"></div>
      <div className="col-span-6">
        <LoginForm getLoginData={getLoginData} message={message} />
      </div>
    </div>
  );
};

export default Login;
