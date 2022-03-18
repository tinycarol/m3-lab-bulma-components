import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { FormField } from "../Formfield/Formfield";
import { CoolButton } from "../CoolButton/CoolButton";

const Signup = () => {
	return (
		<div>
			<Navbar />
      <FormField></FormField>
      <FormField></FormField>
      <FormField></FormField>
			<CoolButton></CoolButton>
		</div>
	);
};
