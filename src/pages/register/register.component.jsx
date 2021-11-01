import {React} from "react";
import './register.styles.scss';
import { Typography } from "../../components/atoms/typography/typography.component";
import {TextField} from "../../components/atoms/textfield/textfield.component";
import {Button} from "../../components/atoms/button/button.component";

export const Register= ()=>{
    return(
        <div className="container-register">
            <div className="register-grid">
                <Typography variant="h2">¡Registrate para obtener mas beneficios!</Typography>
                <TextField placeholder="Email" type="text" label="Email"/>
                <TextField placeholder="Nombre" type="text" label="Nombre"/>
                <TextField placeholder="Contraseña" type="text" label="Contraseña"/>
                
                <div className="button">
                    <Button border="1px solid black" margin="0">Registrate ahora</Button>
                </div>
            </div>
        </div>
    )
}