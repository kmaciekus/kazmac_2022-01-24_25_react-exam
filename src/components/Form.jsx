import { Field } from "../organisms/Field";
import { FormField } from "../ui/FormFIeld/FormField";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";

import React from "react";

export const Form = ({ register }) => {
	const submitButton = !register ? (
		<Button type="submit">LOGIN</Button>
	) : (
		<Button type="submit">{register.toUpperCase()}</Button>
	);
	return (
		<Container>
			<Field label="Email" name="email" type="email" />
			<Field label="Password" name="password" type="password" />
            <FormField className="buttons">
                {submitButton}
                <Button type="reset">
                    CANCEL
                </Button>
            </FormField>
		</Container>
	);
};

