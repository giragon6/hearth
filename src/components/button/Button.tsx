import React from "react";

export const Button = ({
    onClick,
    label,
    disabled,
}: ButtonProps
) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
};

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    label?: string;
    disabled?: boolean;
}