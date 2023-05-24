import React from 'react';
import {Col} from 'reactstrap';
import {CommonPath} from "../../Constant";

const FashionPopularCard = ({popularCard}) => {
    // console.log(popularCard,"popularCard")

        let fixMaxCount = 6;
        return (
            <>
                <Col lg='12'>
                    {
                        popularCard[0] ?
                            [...Array(Math.ceil(popularCard[0]?.children?.length / fixMaxCount))]?.map((c, countIndex) => {

                                let indexOfLastEl = (countIndex + 1) * fixMaxCount;
                                let indexOfFirstEl = indexOfLastEl - fixMaxCount;
                                let currentEl = popularCard[0].children.slice(indexOfFirstEl, indexOfLastEl)

                                return (
                                    <Col
                                        key={countIndex}
                                        xl='2'
                                        lg='4'
                                        md='4'
                                        sm='6'
                                        xs='6'
                                        style={{display: "flex"}}>
                                        {
                                            currentEl.map((el, makeIndex) => {
                                                return (
                                                    <Col
                                                        lg='12'
                                                         // md='8'
                                                         // xs='12'
                                                         key={makeIndex + 1}>
                                                        <div className="category-shop-home">
                                                            <div className='category-logos'>
                                                                <a>
                                                                    <img src={`${CommonPath}/${el.image}`} alt='furniture'/>
                                                                </a>
                                                            </div>
                                                            <h4>Video Surveillance</h4>

                                                            {!(indexOfLastEl && indexOfFirstEl) ? <div className="after-col-category"/>:""}
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
            </>
        )
            ;
    }
;
export default FashionPopularCard;
