
export default function Sleeved12PinHighlight(props) {
    const word = props.instructions.split(' ')
    const newStr = word.slice(1).join(' ')
    return <>
        <span className="green">{word[0]}</span>
        <> {newStr}</>
    </>
}
