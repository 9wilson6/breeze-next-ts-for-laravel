import { ComponentProps } from "react";

interface InputErrorProps {
    messages?: string[];
    className?: string;
}

const InputError = ({ messages = [], className = '' }: InputErrorProps) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message: string, index: number) => (
                    <p
                        className={`${className} text-sm text-red-600`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError
