import {React} from "react";
import  {Link} from "react-router-dom";
import './login.styles.scss';
import { Typography } from "../../components/atoms/typography/typography.component";
import {TextField} from "../../components/atoms/textfield/textfield.component";
import {Button} from "../../components/atoms/button/button.component";

export const Login= ()=>{
    return(
        <div className="container-login">
            <div className="login-grid">
                <Typography variant="h2">¡Inicia sesion para obtener mas beneficios!</Typography>
                <TextField placeholder="Email" type="text" label="Email"/>
                <TextField placeholder="Contraseña" type="text" label="Contraseña"/>
                <Link to="/register"><Typography variant="p">No estas registrado?</Typography></Link>
                <div className="button">
                    <Button border="1px solid black" margin="0">Iniciar sesion</Button>
                </div>
            </div>
        </div>
    )
}