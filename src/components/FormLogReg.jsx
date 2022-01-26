import { Field } from "../organisms/Field";
import React, { useEffect, useReducer } from "react";

import { ACTIONS } from "../variables/variables";

const { SET_EMAIL, SET_PASSWORD, SET_ERROR} = ACTIONS;

const reducer = (state, action) => {
	switch (action.type) {
		case SET_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case SET_PASSWORD:
			return {
				...state,
				password: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			break;
	}
};

export const Form = ({onUpdate}) => {
	const [state, dispatch] = useReducer(reducer, {
		email: "",
		password: "",
		error: "",
	});
	const onEmailChange = (e) => {
		dispatch({ type: SET_EMAIL, payload: e.target.value });
	};
	const onPasswordChange = (e) => {
		dispatch({ type: SET_PASSWORD, payload: e.target.value });
	};

	useEffect(() => {
		onUpdate({
			email: state.email,
			password: state.password,
		})
	},[state]);
	
	return (
		<>
			<Field label="Email" name="email" type="email" onChange={onEmailChange} />
			<Field label="Password" name="password" type="password" onChange={onPasswordChange} min={8} max={64} />
		</>
	);
};
