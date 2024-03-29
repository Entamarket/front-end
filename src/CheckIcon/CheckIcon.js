import "./Checkicon.css";

const Checkicon = (props) => {
    return(
        <div className="checkbox">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" focusable="false" className="chakra-icon css-1akwesy" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span>{props.value}</span>
        </div>
    )
};

export default Checkicon;