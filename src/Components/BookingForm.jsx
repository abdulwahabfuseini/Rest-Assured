import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from "antd";


const ReserveForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Received values of form:", values);
    form.resetFields();
    alert("Thanks for reserving a table, we will love to see you at the exact time.")
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Form
        onFinish={handleSubmit}
        form={form}
        className="grid sm:grid-cols-2 gap-x-3"
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please Enter Full Name" }]}
        >
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="h-10"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please Enter Email Address",
            },
            { type: "email" },
          ]}
        >
          <Input
            type="email"
            name="email"
            placeholder="Eg: myname@gmail.com"
            className="h-10"
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please Enter Phone Number",
            },
          ]}
        >
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="(000) 000 0000"
            className="h-10"
          />
        </Form.Item>
        <Form.Item
          name="people"
          rules={[
            {
              required: true,
              message: "Please Select Number of people",
            },
          ]}
        >
          <Select
            size="large"
            labelInValue
            defaultValue={{
              value: "Reservation for 2",
              label: "Reservation for 2",
            }}
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "Reservation for 2",
                label: "Reservation for 2",
              },
              {
                value: "Reservation for 3",
                label: "Reservation for 3",
              },
              {
                value: "Reservation for 4",
                label: "Reservation for 4",
              },
              {
                value: "Reservation for 6",
                label: "Reservation for 6",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[{ required: true, message: "Please Select Date" }]}
        >
          <DatePicker
            name="checkIn"
            placeholder="Check In"
            size="large"
            style={{
              width: 230,
              boxShadow: "none"
            }}
          />
        </Form.Item>
        <Form.Item
          name="checkOut"
          rules={[{ required: true, message: "Please Select Date" }]}
        >
          <DatePicker
            name="date"
            placeholder="Check out"
            size="large"
            style={{
              width: 230,
              boxShadow: "none"
            }}
            
          />
        </Form.Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="p-2 text-white bg-blue-600"
          style={{ color: "white" }}
        >
          Book
        </Button>
      </Form>
    </div>
  );
};

export default ReserveForm;


