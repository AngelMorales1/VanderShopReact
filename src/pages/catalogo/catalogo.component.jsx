import {React, useEffect,useState,useRef}  from "react";
import { useParams } from "react-router-dom";
import './catalogo.styles.scss'
import {gsap} from "gsap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {Typography} from '../../components/atoms/typography/typography.component'
import {data} from '../../assets/data/MOCK_DATA'


export const Catalogo = () => {
    const {categoria}= useParams()

    const [windowSize, setWindowSize] = useState(1920)
    const [dropDown,setDropDown] = useState(false)

    const categories = [
        {
            title: "Sexo",
            values: ["hombre","mujer","niños/niñas"]
        },{
            title: "Prenda",
            values: ["remera","zapatillas","accesorios"]
        },{
            title: "Talle",
            values: ["L","M","S"]
        }]

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowSize(window.innerWidth)
        })
    },[]);

    const dropdown = useRef()

    const dropDownToggle = ()=>{
        if(dropDown){
            gsap.to(dropdown.current,{display:"grid",opacity:1},"2")
        }else{
            gsap.to(dropdown.current,{display:"none",opacity:0},"2")
        }
        setDropDown(!dropDown)
    }

    return(
        <div className="container page">
            <div className="title">
                <Typography variant="h1">Todos los productos de: {categoria.toUpperCase()}</Typography>
            </div>

            <div className="sidebar">
                {windowSize>660?
                    <div className="categorias">
                        {categories.map((category,idx)=>
                            <div className="categoria" key={idx}>
                                <Typography variant="h3" className="title">{category.title}</Typography>
                                <div className="tipos">
                                    {category.values.map((value,idx)=>
                                        <Typography variant="p" key={idx}>{value}</Typography>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>:
                    <div className="dropdown" >
                        <div className="toggle" onClick={()=>dropDownToggle()}>
                            <Typography variant="h3" >Categorias</Typography>
                            <FontAwesomeIcon icon={faChevronDown}/>   
                        </div>
                        <div className="categorias" ref={dropdown} style={{display:"none",gridTemplateColumns:`repeat(3,1fr)`,gridTemplateRows:`repeat(${Math.round(categories.length/3)},1fr)`}}>
                            {categories.map((category,idx)=>
                                <div className="categoria" key={idx}>
                                    <Typography variant="h3">{category.title}</Typography>
                                    <div className="tipos">
                                        {category.values.map((value,idx)=>
                                            <Typography variant="p" key={idx}>{value}</Typography>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                
            </div>

            <div className="catalogo">
                <div className="catalogo-grid">
                    {data.map((item,idx)=>
                        <div className="item" key={idx}>
                            <img src={`/img/${item.img}`} alt="productos"/>
                            <div className="title">
                                {item.name.toUpperCase().slice(0,15)}
                            </div>
                            <div className="description">
                                {item.description}
                            </div>
                        </div>  
                    )}
                </div>
            </div>
        </div>
    )
}