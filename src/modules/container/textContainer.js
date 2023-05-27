export default function TextContaier (props){
    return(
        <div className={props.class}>
            {props.children}
        </div>
    )
}