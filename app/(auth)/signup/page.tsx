"use client";

import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { FC } from "react";
import axios from "axios";

interface pageProps {}

interface LoginFormValues {
  name: string;
  rollNumber: string;
  email: string;
  password: string;
}

const page: FC<pageProps> = () => {
  const initialValues: LoginFormValues = {
    name: "",
    rollNumber: "",
    email: "",
    password: "",
  };

  // const configuration = {
  //   method: "post",
  //   url: "http://localhost:5001/regster",
  //   data: {
  //     name: String,
  //     rollNumber: String,
  //     email: String,
  //     password: String,
  //   },
  // };

  // console.log(process.env.);

  const borderStyles = "border-2 rounded-lg border-gray-500 px-2 py-2";

  return (
    <div className="border-2 border-black m-10 p-10 grid justify-center">
      <h1 className="text-xl text-center p-5">Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={({ name, rollNumber, email, password }, actions) => {
          // console.log({ name, actions });

          axios({
            method: "post",
            url: "https://ashish-ka-server.vercel.app/register",
            // url: {`${process.env.}`},
            data: {
              name: name,
              rollNumber: rollNumber,
              email: email,
              password: password,
            },
          })
            .then((result) => {
              console.log(result);
              alert(
                JSON.stringify("Account Created, now you can login", null, 2)
              );
            })
            .catch((error) => {
              console.log(error.response.data);
              alert(
                JSON.stringify(
                  "An error occured, try again later or contact admin",
                  null,
                  2
                )
              );
            });
          actions.setSubmitting(false);
        }}
      >
        <Form className="gap-10">
          <div className=" ">
            <label>Name</label> <br />
            <Field
              id="name"
              name="name"
              placeholder="Name"
              className="outline-none w-full"
              required
            />
          </div>
          <div className=" ">
            <label>Roll No.</label> <br />
            <Field
              id="rollNumber"
              name="rollNumber"
              placeholder="Roll Number"
              className="outline-none w-full"
              required
            />
          </div>
          {/* email input lene wala section */}
          <div className=" ">
            <label>Email</label> <br />
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="outline-none w-full"
              required
            />
          </div>

          <div>
            <label>Password</label> <br />
            <Field
              id="password"
              name="password"
              placeholder="Password"
              className="outline-none w-full"
              type="password"
            />
          </div>
          <button type="submit" className="py-2 px-4 border-2">
            Signup
          </button>
        </Form>
      </Formik>

      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default page;
