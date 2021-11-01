import React from "react"
import  {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './productTypeCard.styles.scss';


export const ProductTypeCard=({image,link,children,imgPosition})=>{

    const CardLink = ({children})=>{
        if (link) {
            return (<Link to={link} style={{ textDecoration: 'none' }}>{children}</Link>)
        }else{
            return <>{children}</>
        }
    }

    return(
        <CardLink>
            <div className="cat" 
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `${imgPosition}`
                    }}>
                    
                <div className="content">
                    {children}
                </div>
            </div>
        </CardLink>
        
    )
}

ProductTypeCard.propTypes={
    imgPosition: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string
}

ProductTypeCard.defaultProps={
    imgPosition: "0 0",
    link: "",
    image: ""
}