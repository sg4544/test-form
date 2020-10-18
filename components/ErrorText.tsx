import { Label } from 'semantic-ui-react'

type Props = {
    children: string
}

const TextError: React.FC<Props> = (props): JSX.Element => {
    return (
        <Label pointing prompt>
            {props.children}
        </Label>
    )
}

export default TextError

