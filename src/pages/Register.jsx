import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { SkillApi } from "../services/skillsApi";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";
import { FormField } from "../ui/FormFIeld/FormField";

export const Register = () => {
    const navigate = useNavigate();
    const user = {email: "", password: ""};
    const [model, setModel] = useState(user);
    const handleUpdate = (update)=> setModel(update);
    const handleClick = async () => {

        const res = await SkillApi.register(model);
        if (res.err) return console.warn(res.err);
        navigate("/login");
    }
	return (
        <Container as="form">
            <Form onUpdate={handleUpdate} />
            <FormField className="buttons" >
                <Button type="button" onClick={handleClick}>
                    REGISTER
                </Button>
                <Button type="reset">
                    CANCEL
                </Button>
            </FormField>
        </Container>
    );
};
