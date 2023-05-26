import React from "react";
import homebanner from "assets/img/homebanner.svg";
import { Card } from "components/Card";
import styled from "styled-components";
import { TopCreator } from "components/TopCreator";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "components/shared/Button";
import { Art, Colectibles, Music, Utility } from "./DashboardPages";
import MainLayout from "layouts/MainLayout/MainLayout";
import { dataCard, dataTrending } from "./data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledHomeDiscover = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .slide {
    text-align: left;
  }

  .item-banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .dashboard-banner {
    position: relative;
  }

  .dashboard-banner img {
    border-radius: 12px;
    height: 354px;
    object-fit: cover;
  }
  .dashboard-banner-content {
    position: absolute;
    width: 536px;
    top: 77px;
    left: 60px;
  }
  .dashboard-banner-heading {
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    /* or 65px */

    letter-spacing: -0.02em;
    margin-bottom: 24px;
    color: #ffffff;
  }
`;

const StyleHomeTrending = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  .trending-left {
    width: 716px;
  }

  .trading-left-link {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: #7a797d;
  }

  .ac {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .trending-left-heading {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */
    color: #27262e;
  }

  .trending-left-menu a:not(:last-child) {
    margin-right: 24px;
  }
  .active {
    border-radius: 30px;
    padding: 5px 12px;
    color: #5429ff;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    background: rgba(84, 41, 255, 0.1);
    display: inline-block;
  }
`;

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <StyledHomeDiscover className="aaaa">
          {/* <div className="dashboard-banner"> */}
          <Carousel showArrows={false} showThumbs={false} showStatus={false}>
            <div className="dashboard-banner">
              <img src={homebanner} />
              <div className="dashboard-banner-content">
                <div className="dashboard-banner-heading">
                  Discover, Create and Sell Your Own NFT.
                </div>
                <div>
                  <Button
                    btnText
                    width="128"
                    height="46"
                    borderRadius="46"
                    mr="12"
                    textColor="#5429FF"
                    fontSize="16"
                    fontWeight="700"
                  >
                    Discover
                  </Button>
                  <Button
                    btnText
                    width="113"
                    height="46"
                    borderRadius="46"
                    textColor="white"
                    bgColor="transparent"
                    boderColor="#FFFFFF"
                    fontWeight="700"
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
            <div className="dashboard-banner">
              <img src="https://cdn.dribbble.com/userupload/7302994/file/original-50c26c10f392696cbef89cd1670936aa.jpg?compress=1&resize=640x480&vertical=top" />
            </div>
            <div className="dashboard-banner">
              <img src="https://cdn.dribbble.com/userupload/7298081/file/original-3a26348fe553a9419d23e3a4a589b91a.png?compress=1&resize=640x480&vertical=top" />
            </div>
          </Carousel>
          {/* </div> */}

          <div className="item-banner">
            {dataCard.map((item) => {
              return (
                <Card
                  key={item.title}
                  title={item.title}
                  amount={item.amount}
                  percent={item.percent}
                />
              );
            })}
          </div>
        </StyledHomeDiscover>
        <StyleHomeTrending>
          <div className="trending-left">
            <div className="ac">
              <div className="trending-left-heading">Trending Auctions</div>
              <div className="trending-left-menu">
                <NavLink end to="/dashboard" className="trading-left-link">
                  Art
                </NavLink>
                <NavLink to="/dashboard/music" className="trading-left-link">
                  Music
                </NavLink>
                <NavLink
                  to="/dashboard/collectibles"
                  className="trading-left-link"
                >
                  Collectibles
                </NavLink>
                <NavLink to="/dashboard/utility" className="trading-left-link">
                  Utility
                </NavLink>
              </div>
            </div>
            <Routes>
              <Route index element={<Art />}></Route>
              <Route path="music" element={<Music />}></Route>
              <Route path="collectibles" element={<Colectibles />}></Route>
              <Route path="utility" element={<Utility />}></Route>
            </Routes>
            {/* <Outlet /> */}
          </div>
          <div className="trending-right">
            <TopCreator />
          </div>
        </StyleHomeTrending>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
