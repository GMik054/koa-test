import React from "react";
import { Col, Container, Row } from "reactstrap";
import {JustForYou,NewArrival } from "../../Constant";
import SectionHeader from "../../Element/SectionHeader";
import VRSliders from "./VRSlider";
const ElectronicVR = ({ productData,paddingBottom,padding}) => {
    console.log(productData,"productData")
    const FilterVrProduct = productData.filter((el) => el.type === "electronic")

    return (
        <section className="ratio_asos" >
            <Container fluid={true} >
                <Row>
                    <Col>
                        <SectionHeader title={NewArrival} subTitle={NewArrival} />
                        <VRSliders FilterVrProduct={FilterVrProduct} padding={padding} paddingBottomm={paddingBottom}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ElectronicVR;