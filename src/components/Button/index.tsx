interface ButtonProps {
    text: string,
    color: string,
    type: string,
    onClick: () => void;
}

export default function Button({ ...rest }: ButtonProps) {
    return (<div>
        {rest.text}
    </div>)
}