import React from 'react'
import { Container, Row } from 'reactstrap';
import PopularCard from './PopularCards';
import SectionHeader from "../../Element/SectionHeader";
import {HurryUp, SpecialOffer, TopBrands} from "../../Constant";
const FurnitureSlider = ({ popularCard }) => {
    return (
        <section className="product-slider overflow-hidden" style={{paddingBottom:"80px"}}>
            <div>
                <Container>
                    <SectionHeader title={TopBrands} subTitle={TopBrands} />
                    <Row className="">
                        <PopularCard popularCard={popularCard} />
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default FurnitureSlider