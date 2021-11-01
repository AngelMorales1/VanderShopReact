import React from "react";
import './footer.styles.scss';
import { Typography } from "../../atoms/typography/typography.component";


export const Footer =()=>{
    return(
        <div className="footer">
            <Typography tag="h4">Sitio Creado por: <a href="https://www.linkedin.com/in/angel-antonio-morales-3a50a419a/" rel="noopener noreferrer" target="_blank">Angel Morales</a></Typography>
        </div>
    )
}