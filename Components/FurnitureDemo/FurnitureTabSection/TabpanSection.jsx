import React, { Fragment } from 'react';
import { Row, TabContent, TabPane } from 'reactstrap';
import LeftTab from './LeftTab';
import MiddleTab from './MiddleTab';
import RightTab from './RightTab';
const TabpanSection = ({ activeTab, TabFilter, num, val, TabMiddleColor, LeftRightTab }) => {
  // console.log(TabFilter,"TabFilter2")
  return (
    <TabContent activeTab={activeTab}>
      {TabFilter?.map((el, i) => {
        // console.log(el,"el")
        return (
            <Fragment key={i}>
              {el?.tabs
                  ?.filter((el) => el.name === val)
                  .map((item, id) => {
                    // console.log(item,"item")
                    return (
                        <Fragment key={id}>
                          {item.name === val && (
                              <TabPane tabId={num} className={`${activeTab && activeTab === id ? 'active show' : ''}`} key={id}>
                                <div className='offer-wrap product-style-1'>
                                  <Row className='g-xl-4 g-3'>
                                    {item?.children?.map((elem, i) => {
                                      return (
                                          <Fragment key={i}>
                                            <LeftTab elem={elem} LeftRightTab={LeftRightTab} />
                                            <MiddleTab elem={elem} TabMiddleColor={TabMiddleColor} LeftRightTab={LeftRightTab} />
                                            <RightTab elem={elem} LeftRightTab={LeftRightTab} />
                                          </Fragment>
                                      );
                                    })}
                                  </Row>
                                </div>
                              </TabPane>
                          )}
                        </Fragment>
                    );
                  })}
            </Fragment>
        );
      })}
    </TabContent>
  );
};

export default TabpanSection;
