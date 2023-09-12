
import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "reactstrap";
import { auth } from "../../utils/firebase";
import { storage } from "../../utils/firebase";
import { db } from "../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [loading, setLoading] = useState()
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [data, setData] = useState()

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const {firstName, lastName, email, password, phoneNumber } = values
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${ Date.now() + firstName + lastName + phoneNumber}`);
      const uploadTask = uploadBytesResumable(storageRef, data);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName:  [values.firstName, values.lastName].join(" "),
              photoURL: downloadURL,
              phoneNumber
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: "user.id",
              displayName:  [values.firstName, values.lastName].join(" "),
              email,
              photoURL: downloadURL,
              phoneNumber
            });
          });
        }
      );
      navigate("/", { replace: true });
      alert("Account created Successfully")
    } catch (error) {
      alert("Failed to create an account");
    }
    setLoading(false)
  };

  return (
    <Layout>
      <div className="py-40 sm:py-40">
        <h1 className="pb-10 font-bold text-center capitalize sm:text-xl">
          Sign up to enjoy member rate when booking{" "}
        </h1>
        <div>
          <Form onFinish={handleSubmit} form={form} layout="vertical" className="px-3 mx-auto sm:max-w-4xl lg:max-w-3xl sm:px-6">
            <Col className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter First Name",
                  },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="w-full h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="last Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Last Name",
                  },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter last Name"
                  className="w-full h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter email",
                  },
                  { type: "email" },
                ]}
                hasFeedback
              >
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Phone Number",
                  },
                  { type: "tel" },
                ]}
                hasFeedback
              >
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="(000) 000 000 0000"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please Enter password",
                  },
                  { type: "password" },
                ]}
                hasFeedback
              >
                <Input.Password
                  type="password"
                  placeholder="Enter Password"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="ConfirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please Confirm password",
                  },
                  { type: "password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password don't match");
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  type="password"
                  placeholder="Confirm Password"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
            </Col>
            <Form.Item>
            <input
              type="file"
              onChange={(e) => setData(e.target.files[0])}
              required
            />
          </Form.Item>
            <Col className="px-3">
              <Button
               
                htmlType="submit"
                className="w-full h-12 text-lg  text-white pattern border sm:mt-8 cursor-point border-neutral-300"
              >
                {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader color="#36d7b7"
                    loading={loading}
                    size={20}
                    margin={2}
                    
                    />
                  <h6>isSubmitting...</h6>
                </div>
              ) : (
                "Submit"
              )}
              </Button>
            </Col>
            <Link to="/signin">
              <p className="pt-4 text-lg text-center hover:underline sm:text-xl">
                Already have an account? Log in
              </p>
            </Link>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
