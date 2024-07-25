import { ComponentProps } from "react"

const Label = ({ className, children, ...props }: ComponentProps<"label">) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
