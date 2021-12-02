import { Input } from "../components";

const InputContainer = ({
	label,
	width,
	placeHolder,
	onChange,
	value,
	errorText,
	type,
	kind,
	onToggle,
	...rest
}) => {
	return (
		kind === "password" ?
			<Input {...rest}>
				<Input.Label>{label}</Input.Label>
				<Input.TextField
					width={width}
					placeholder={placeHolder}
					onChange={onChange}
					errorText={errorText}
					value={value}
					type={type}
					{...rest}
				/>
				<img src={type === "password" ? "/assets/svg/eyeOpen.svg" : "/assets/svg/eyeClose.svg"} className={"eye"} onClick={onToggle} alt={"toggle visibility"} />

				<span style={{ color: "#ff0033", fontSize: "12px" }}>{errorText}</span>
			</Input >
			:
			<Input {...rest}>
				<Input.Label>{label}</Input.Label>
				<Input.TextField
					width={width}
					placeholder={placeHolder}
					onChange={onChange}
					errorText={errorText}
					value={value}
					type={type}
					{...rest}
				/>
				<span style={{ color: "#ff0033", fontSize: "12px" }}>{errorText}</span>
			</Input >
	);
};

export { InputContainer };
