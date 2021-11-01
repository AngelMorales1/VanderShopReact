import React from "react";
import  {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './button.styles.scss'

export const Button = ({onClick,color,children,link,margin,border})=>{

    const ButtonLink = ({children})=>{
        if (link) {
            return (<Link  to={link}>{children}</Link >)
        }else{
            return <>{children}</>
        }
    }

    return(
        <ButtonLink >
            <button
            className={"button "+color}
            style={{margin: margin, border: border}}
            onClick={onClick}>
                {children}
            </button>
        </ButtonLink>
    )
}

Button.propTypes={
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black","white"]),
    link: PropTypes.string,
    margin: PropTypes.string,
    border: PropTypes.string
}

Button.defaultProps={
    onClick: "",
    color: "black",
    link: "",
    margin: "5px",
    border: ""
}