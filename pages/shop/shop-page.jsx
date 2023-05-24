import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ShopLeftSidebarContain from '../../Components/Shop/ShopLeftSidebarContain';
import Layout1 from '../../Layout/Layout1';
import {getAPIData} from '../../Utils';
import CanvasOffset from '../../Components/Shop/ShopCanvasFilter/CanvasOffset';
import Layout6 from "../../Layout/Layout6";
import FashionCategory from "../../Components/FashionDemo/FashionCategory";
import ShoesCategory from "../../Components/ShoesDemo/ShoesCategory";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";

export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const ShopLeftSidebar = () => {
    const [productData, setProductData] = useState([]);
    const [categoryBanner, setCategoryBanner] = useState([]);
    const [tabSection, setTabSection] = useState([]);
    useEffect(() => {
        const types = ['products','categorybanner','tabsection'];
        types.map((type) => {
            getAPIData(`${process.env.API_URL}${type}`).then((res) => {
                type === 'products' && setProductData(res?.data);
                type === 'categorybanner' && setCategoryBanner(res?.data);
                type === 'tabsection' && setTabSection(res?.data);
            });
        });
    }, []);
    const listGrid = true;
    const bottom = 80;
    return (
        <Layout6>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`}/>
            </Head>
            <BreadCrumb parent={'Shop Left Sidebar'} title={'Shop Left Sidebar'} categoryBanner={categoryBanner}/>
            <ShopLeftSidebarContain productData={productData} listGrid={listGrid}/>
            <ElectronicHurryUp tabSection={tabSection} bottom={bottom} />
            <FlowerSubscribe/>
            <CanvasOffset productData={productData}/>
        </Layout6>
    );
};

export default ShopLeftSidebar;
