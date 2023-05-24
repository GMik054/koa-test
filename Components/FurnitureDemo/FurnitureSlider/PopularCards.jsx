import React from 'react';
import Slider from 'react-slick';
import {Col} from 'reactstrap';
import {FurnitureThreeSlider} from '../../../Data/SliderSettingsData';
import SliderCard from './SliderCard';
import {CommonPath, ShopNow} from "../../Constant";
import {Btn} from "../../AbstractElements";

const PopularCard = ({popularCard}) => {

    let fixMaxCount = 4;
    return (
        <>
            <Col
                lg='12'
                xl='4'
            >
                {/*<div className='title-3 pb-4 title-border'>*/}
                {/*  <h2>{elem.heading}</h2>*/}
                {/*  <h5 className='theme-color'>{elem.subHeading}</h5>*/}
                {/*</div>*/}
                <div className='product-slider round-arrow'>
                    <img src={`${CommonPath}/vegetable/Logo-Harman-Kardon.svg`} style={{margin:"30px 0 20px",maxWidth:"170px",width:"100%"}}/>
                    <h2>NEW BRANDS BY HARMAN</h2>
                    <div className="product-slider-div" >
                        <p className="product-slider-p">at KOA</p>
                    </div>

                    <img src={`${CommonPath}/vegetable/eqqww.png`} style={{maxWidth:"380px",width:"100%"}}/>
                    <div style={{paddingBottom:"40px"}}>
                        <Btn
                            attrBtn={{
                                className: 'btn-solid-default',
                                onClick: () => router.push('/shop/shop-page'),
                            }}>
                            {ShopNow}
                        </Btn>
                    </div>
                </div>
            </Col>
            {/*{popularCard.map((elem, i) => {*/}
            <Col
                xl='8'
                lg='12'
                md='12'
                // sm='2'
                xs='12'
                 style={{display:"inline-flex"}}>
            {
                popularCard[0] ?
                    [...Array(Math.ceil(popularCard[0]?.children?.length / fixMaxCount))]?.map((c, countIndex) => {

                        let indexOfLastEl = (countIndex + 1) * fixMaxCount;
                        let indexOfFirstEl = indexOfLastEl - fixMaxCount;
                        let currentEl = popularCard[0].children.slice(indexOfFirstEl, indexOfLastEl)
                        // console.log(currentEl)

                        return (
                            <Col
                                key={countIndex}
                                lg='4'
                                 style={{display:"inline-grid",alignContent: "space-between", margin:"0 10px"}}>
                                {
                                    currentEl.map((el, makeIndex) => {
                                        return (
                                            <Col lg='12' md='6' xs='12' key={makeIndex + 1}>
                                                <div className='top-brand-logos'>
                                                    <a>
                                                        <img src={`${CommonPath}/${el.image}`} alt='furniture'/>
                                                    </a>
                                                </div>
                                            </Col>

                                        )
                                    })
                                }

                            </Col>

                        )
                    }) : ""
            }
            </Col>
            {/*  return (*/}
            {/*    <Col lg='2'>*/}
            {/*      /!*<div className='title-3 pb-4 title-border'>*!/*/}
            {/*      /!*  <h2>{elem.heading}</h2>*!/*/}
            {/*      /!*  <h5 className='theme-color'>{elem.subHeading}</h5>*!/*/}
            {/*      /!*</div>*!/*/}
            {/*      <div className='product-slider round-arrow'>*/}
            {/*        <Slider {...FurnitureThreeSlider}>*/}
            {/*          <SliderCard elem={popularCard[0]} />*/}
            {/*          /!*<SliderCard elem={elem} />*!/*/}
            {/*        </Slider>*/}
            {/*      </div>*/}
            {/*    </Col>*/}
            {/*  );*/}
            {/*})}*/}
        </>
    );
};
export default PopularCard;
