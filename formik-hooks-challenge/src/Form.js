import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useFormik } from 'formik';
import FormItem from 'antd/lib/form/FormItem';

const { Title } = Typography;

const initialValues = {
    name: "",
    email: "",
    address: {
        street: "",
        number: "",
        city: ""
    },
    password: "",
    confirmPassword: ""
};
export const cardStyle = {
    width: '95%',
    margin: 'auto',
    borderRadius: '12px',
    maxWidth: '350px',
};

const MyForm = () => {
    const onSubmit = values => {
        setTimeout(() => values.resetForm(), 6000);
    };

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    return (
        <>
            <Title style={{ color: '#808080' }}>Hello formik</Title>
            <Form
                style={cardStyle}
                size='middle'
            >
                <FormItem>
                    <Input placeholder="Name" {...formik.getFieldProps("name")} />
                </FormItem>
                <FormItem>
                    <Input placeholder="Email" {...formik.getFieldProps("email")} />
                </FormItem>
                <FormItem>
                    <Input.Password placeholder="Password" {...formik.getFieldProps("password")} />
                </FormItem>
                <FormItem>
                    <Input.Password placeholder="confirm password" {...formik.getFieldProps("confirmPassword")} />
                </FormItem>
                <FormItem>
                    <Input placeholder="Address" {...formik.getFieldProps("address.street")} />
                </FormItem>
                <FormItem>
                    <Input placeholder="Number" {...formik.getFieldProps("address.number")} />
                </FormItem>
                <FormItem>
                    <Input placeholder="City" {...formik.getFieldProps("address.city")} />
                </FormItem>
                <FormItem>
                    <Button htmlType="submit" onSubmit={onSubmit(formik)}>Submit</Button>
                </FormItem>
            </Form>
            <div style={{ textAlign: "left", color: "#808080" }}>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </div>
        </>
    );
};

export default MyForm;