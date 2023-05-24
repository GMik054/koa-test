import Link from 'next/link';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import {VRSlider} from '../../../Data/SliderSettingsData';
import {CommonPath, NEW} from '../../Constant';
import DynamicRating from '../../Element/DynamicRating';
import {Btn} from "../../AbstractElements";

const VRSliders = ({FilterVrProduct,padding,paddingBottomm}) => {


        const {symbol, currencyValue} = useSelector((state) => state.CurrencyReducer);
        return (
            <div className={`slide-7 product-style-1 product-wrapper`}
                 style={{padding:`${paddingBottomm ? "0 calc(40px + (50 - 10) * ((100vw - 320px) / (1920 - 320))) 0":
                         "0 calc(40px + (50 - 10) * ((100vw - 320px) / (1920 - 320))) calc(40px + (50 - 10) * ((100vw - 320px) / (1920 - 320)))"}`}}
            >
                <Slider {...VRSlider}>
                    {FilterVrProduct.slice(7, 15).map((elem, i) => {
                        console.log(elem,"elem")

                        return (
                            <Fragment key={i}>
                                {elem.category === 'vr' && (
                                    <div>
                                        <div className='product-box'>

                                            <div className='img-wrapper'>
                                                <div className='top-wishlist'>
                                                    {elem.new && <span className='label label-black'>{NEW}</span>}
                                                    {/*{elem.discount > 0 && <span className='font-dark-30'>{elem.discount}%</span>}*/}
                                                    {/*<Link href={'/page/wishlist'} className='heart-wishlist wishlist'>*/}
                                                    {/*  <i className='far fa-heart'></i>*/}
                                                    {/*</Link>*/}
                                                </div>
                                                <Link href={'/product/product_left_sidebar/35'} className='text-center'>
                                                    {elem.images.map((item, i) => {
                                                        return <img src={`${CommonPath}/${item.src}`} className='img-fluid'
                                                                    alt='product' key={i}/>;
                                                    })}
                                                </Link>
                                            </div>
                                            <div className='product-details'>
                                                <a href='#javascript' className='font-default'>
                                                    <h5 style={{margin: "16px 0"}}>{elem.name}</h5>
                                                </a>
                                                <div style={{margin: "16px 0"}}>
                                                    <span className='font-light ml-1'># PA-SM21 • # 141844</span>
                                                </div>
                                                <ul style={{listStylePosition: "inside", margin: "16px 0"}}>
                                                    <li className="li-home-products" style={{display: "block"}}>Special Order</li>
                                                    <li className="li-home-products" style={{display: "block"}}>Free Store Pick-up</li>
                                                    <li className="li-home-products" style={{display: "block"}}>Free Shipping $1K+ Orders</li>
                                                </ul>
                                                <h3 className='theme-color fw-6-1' style={{margin: "16px 0"}}>
                                                    {symbol}
                                                    {(elem.price * currencyValue).toFixed(2)}
                                                    <span className='font-light ml-1'>{symbol}
                                                        {(elem.mrp * currencyValue).toFixed(2)}</span>
                                                </h3>
                                                <DynamicRating data={elem.ratingStars}/>

                                            </div>
                                            <div style={{textAlign:"center", margin:"26px 0 0"}}>
                                                <Btn attrBtn={{className: "m-1 btn-solid-default btn-sm"}}>
                                                    Buy Now
                                                </Btn>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        );
                    })}
                </Slider>

            </div>
        );
    }
;

export default VRSliders;
