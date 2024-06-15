"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LoginFormProps {
  getLoginData: (values: { email: string; password: string }) => void;
  message: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ getLoginData, message }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, isSetLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .label("Email"),
      password: Yup.string()
        .max(8, "Password must be 8 characters or more")
        .required("Password is required")
        .label("Password"),
    }),
    onSubmit: async (values) => {
      getLoginData(values);
      let msg = await message;
      console.log(msg);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center gap-8 justify-center">
          <div>
            <Input
              type="email"
              label="Email"
              labelPlacement="inside"
              variant="bordered"
              placeholder="Enter your email"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              value={formik.values.email}
              className="w-72"
            />
            <span>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </span>
          </div>
          <div>
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              value={formik.values.password}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-72"
            />
          </div>
          <div>
            <Button
              variant="ghost"
              color="success"
              type="submit"
              isLoading={isLoading}
              aria-label="Submit"
              className="w-72"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
