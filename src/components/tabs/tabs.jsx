import React from 'react'
import './tabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Panels01 from '../panels/panel-01/panel-01';
import Skleton from '../skeleton/skleton';
import Userboard from '../userboard/userboard';
import History from '../history/history';
import Watchlist from '../watchlist/watchlist';
// import 'react-tabs/style/react-tabs.css';

export default function Tabss() {
  return (
    <>
        <div className="tabs">
            <div className="inner-tabs">
                 <Tabs>
                  <TabList>
                      <Tab>Explore</Tab>
                      <Tab>Dashboard</Tab>
                      <Tab>History</Tab>
                      <Tab>Watchlist</Tab>
                  </TabList>

                  <TabPanel>
                          <Panels01/>
                  </TabPanel>
                  <TabPanel>
                    <Userboard/>
                  </TabPanel>
            <TabPanel>
              <History />
            </TabPanel>
            <TabPanel>
              <Watchlist />
            </TabPanel>
              </Tabs> 
            </div>

        </div>
    </>
  )
}
