import React, {ButtonHTMLAttributes} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string | React.ReactNode;
	href?: string;
	target?: string;
	component?: React.ReactNode;
	rightcomponent?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	label,
	className = "",
	href = "",
	component,
	rightcomponent,
	target = "_self",
	...props
}) => {
	if (href) {
		return (
			<Link href={href} target={target} passHref
				  className={cn(
					  'bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3',
					  className
				  )}>
				{component}
				{label}
				{rightcomponent}
			</Link>
		);
	}

	return (
		<button
			className={cn(
				'bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3',
				className
			)}
			{...props}
		>
			{component}
			{label}
			{rightcomponent}
		</button>
	);
};

export default Button;
