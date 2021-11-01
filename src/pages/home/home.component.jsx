import {React, useRef, useEffect } from "react";
import { Button } from "../../components/atoms/button/button.component";
import './home.styles.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper.scss'
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/pagination/pagination.scss';

import { timeline } from "../../App";

import { Typography } from "../../components/atoms/typography/typography.component";
import {ProductTypeCard} from "../../components/molecules/productTypeCard/productTypeCard.component"
import hombre from '../../assets/img/hombre.jpg';
import mujer from '../../assets/img/mujer.jpg';
import ninos from '../../assets/img/ninos.jpg';
import {data} from '../../assets/data/MOCK_DATA'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft,faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export const HomePage = () => {

    const boxRef= useRef()
    const banner= useRef()

    useEffect(() => {
        timeline.from(boxRef.current, { x: "-300", opacity:"0"},"0.6")
                .to(banner.current,{scale:1.1,duration:"2",repeat:"-1",yoyo:true})
    },[]);

    SwiperCore.use([Navigation, Pagination]);

    return(
        <div>
            <div className="banner" >
                <div className="img" ref={banner}></div>
                <div className="text">
                    <div className="content"  ref={boxRef}>
                        <Typography variant="h1" color="white">RECONECTA CON TU ENERGIA</Typography>
                        <Typography variant="h3" color="white" >NUEVAS Zig Dynamarca</Typography>
                        <Button color="black" margin="10px 5px">COMPRA AHORA</Button>
                    </div>
                </div>
            </div>
            <div className="main container">
                <div className="popular">
                    <Typography variant="h1" color="black">¿QUE ESTAS BUSCANDO?</Typography>
                    <div className="btn-div">
                        <Button color="white" border="1px solid grey">INDUMENTARIA</Button>
                        <Button color="white" border="1px solid grey">CALZADO</Button>
                        <Button color="white" border="1px solid grey">ACCESORIOS</Button>
                    </div>
                </div>

                <div className="sexos-cat">
                    <Typography variant="h1" color="black" >PARA QUIEN COMPRAS? </Typography>
                    <div className="cat-sexos-div">
                        <ProductTypeCard image={hombre} imgPosition="50% 0" link="/catalogo/hombre">Hombre</ProductTypeCard>
                        <ProductTypeCard image={mujer} imgPosition="100% 0" link="/catalogo/mujer">Mujer</ProductTypeCard>
                        <ProductTypeCard image={ninos} imgPosition="100% 50%" link="/catalogo/ninos">Niños</ProductTypeCard>
                    </div>
                </div>

                <div className="novedades">
                    <Typography variant="h1">NOVEDADES</Typography>
                    <div className="novedades-slider">
                        <Swiper
                            navigation= {{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            pagination= {{
                                el: '.swiper-pagination',
                                type: 'bullets',
                            }}
                            spaceBetween={5}
                            slidesPerView={6}
                            >
                            {data.map((item,idx)=>(
                                <SwiperSlide className="swiper-slide" key={idx}>
                                   <div className="swiper-item">
                                        <img c src={`/img/${item.img}`} alt="" />
                                        <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                                   </div>
                                </SwiperSlide>
                            ))}
                            <div className="navigation swiper-button-next">
                                <FontAwesomeIcon icon={faLongArrowAltRight}/>
                            </div>
                            <div className="navigation swiper-button-prev">
                                <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}