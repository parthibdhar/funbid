type ErrorProps = {
    text: any
}
export const InlineError: React.FC<ErrorProps> = ({ text }) => {
    return (
        <div className='text-subMain w-full mt-2 text-xs font-medium'>
            <p> {text} </p>
        </div>
    )
}