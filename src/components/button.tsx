/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
	return (
		<Box
			{...props}
			as="button"
			// lineHeight="1.2"
			transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
			px={4}
			py={2}
			borderRadius="16px"
			fontSize="16px"
			fontWeight="semibold"
			bg="linear-gradient(90deg, #FFA270  0%, #e6c068 100%)"
			_hover={{ bg: "brand.purple.dark" }}
			_active={{
				transform: "scale(0.95)",
			}}
		>
			{props.children}
		</Box>
	);
}
