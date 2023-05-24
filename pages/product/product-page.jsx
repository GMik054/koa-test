import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import {CommonPath} from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ProductSection from '../../Components/Products/Product4ImageContain/ProductSection';
import ProductRightSidebarContain from '../../Components/Products/ProductRightSidebarContain.jsx';
import RecentNotification from '../../Components/Products/RecentNotification';
import StickyFooter from '../../Components/Products/StickyFooter';
import Layout1 from '../../Layout/Layout1';
import {getAPIData} from '../../Utils';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Layout6 from "../../Layout/Layout6";
import ElectronicHurryUp from "../../Components/ElectronicDemo/ElectronicHurryUp";
import ElectronicVR from "../../Components/ElectronicDemo/ElectronicVR";
import DetainTabSection from "../../Components/Products/Common/DetailTabsection";

export const getStaticProps = async ({locale}) => ({props: {...(await serverSideTranslations(locale, ['common']))}});

const ProductRightSidebar = () => {
    const [productData, setProductData] = useState([]);
    const [tabSection, setTabSection] = useState([]);
    useEffect(() => {
        const types = ['products', 'tabsection'];
        types.map((type, i) => {
            getAPIData(`${process.env.API_URL}${type}`).then((res) => {
                type === 'products' && setProductData(res?.data);
                type === 'tabsection' && setTabSection(res?.data);

            });
        });
    }, []);
    const paddingBottom = "0"
    return (
        <Layout6>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' type='image/x-icon' href={`/assets/svg/koalogo.png`} />
            </Head>
            <BreadCrumb parent={'Product Right Sidebar'} title={'Product Right Sidebar'}/>
            <ProductRightSidebarContain productData={productData}/>
            {/*<ProductSection productData={productData} />*/}
            <ElectronicVR productData={productData}/>

            <DetainTabSection/>

            <ElectronicVR productData={productData} paddingBottom={paddingBottom}/>
            <ElectronicVR productData={productData} paddingBottom={paddingBottom}/>

            <ElectronicHurryUp tabSection={tabSection}/>

            <FlowerSubscribe/>
            {/*<RecentNotification/>*/}
            {/*<StickyFooter productData={productData}/>*/}
        </Layout6>
    );
};

export default ProductRightSidebar;
