import { FC } from "react"

interface IErrorText {
    label: string
}
export const ErrorText: FC<IErrorText> = ({ label }) => {
    return (
        <p className="text-red-500">{label}</p>
    )
}