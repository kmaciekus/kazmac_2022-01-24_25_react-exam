import React, { useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import { Field } from "../organisms/Field";
import { TextArea } from "../organisms/TextArea";
import { ACTIONS } from "../variables/variables";

const { SET_SKILL, SET_DESCR, SET_ERROR } = ACTIONS;

const reducer = (state, action) => {
	switch (action.type) {
		case SET_SKILL:
			return {
				...state,
				title: action.payload,
			};
		case SET_DESCR:
			return {
				...state,
				description: action.payload,
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
export const FormAdd = ({ onUpdate }) => {
	const [state, dispatch] = useReducer(reducer, {
		title: "",
		description: "",
		error: "",
	});
    const onTitleChange = (e) => {
        dispatch({type: SET_SKILL, payload: e.target.value});
    };
    const onDescriptionChange = (e) => {
        dispatch({type: SET_DESCR, payload: e.target.value});
    };

    useEffect(() => {
        onUpdate({
            title: state.title,
            description: state.description,
        });
    },[state]);

	return (
        <>
            <Field label="Skill title" name="title" type="text" onChange={onTitleChange} />
            <TextArea label="Skill description" name="description" onChange={onDescriptionChange} />
        </>
    );
};
