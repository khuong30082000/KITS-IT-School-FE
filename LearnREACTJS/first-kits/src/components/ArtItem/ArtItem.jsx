import React from "react";
import styled from "styled-components";

const StyledMainArtItem = styled.div`
  width: 348px;
  height: 364px;
  background: #ffffff;
  border-radius: 16px;
  padding: 12px;
  position: relative;
`;

const StyledArtItemTop = styled.div`
  position: relative;
  margin-bottom: 24px;
  img {
    width: 324px;
    height: 196px;
    border-radius: 12px;
  }

  .content-img {
    width: 100px;
    height: 28px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    color: white;
    background: rgba(22, 22, 22, 0.16);
    backdrop-filter: blur(17px);
    border-radius: 20px;
    padding: 6px 10px 6px 6px;
    position: absolute;
    left: 8px;
    bottom: 8px;
  }
  .fa-clock {
    width: 16px;
    height: 16px;
  }
  .content-img-number {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    /* identical to box height */
    font-feature-settings: "salt" on;
  }
`;

const StyledArtItemBottom = styled.div`
  width: 324px;
  padding: 0 12px;
  .bottom-content-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom-content-title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */
    color: #27262e;
  }
  .bottom-content-like {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    /* identical to box height */
    text-align: right;
    font-feature-settings: "salt" on;

    /* Text/color2 */
    color: #747475;
  }
  .bottom-content-avatar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    margin-bottom: 16px;
  }
  .bottom-content-avatar img {
    width: 28px;
    height: 28px;
  }
  .bottom-content-email {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    /* identical to box height */
    font-feature-settings: "salt" on;

    /* Text/color2 */
    color: #747475;
  }
  .bottom-content-eth {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom-content-group {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .c span:nth-child(1) {
    margin-right: 3px;
  }
`;

export const ArtItemContent = ({ ...rest }) => {
  return (
    <>
      <StyledArtItemTop>
        <img src={rest.trendingAvatar} />
        <div className="content-img">
          <i className="fa-regular fa-clock"></i>
          <div className="content-img-number"> {rest.imgNumber}</div>
        </div>
      </StyledArtItemTop>
      <StyledArtItemBottom>
        <div className="bottom-content-heading">
          <div className="bottom-content-title">{rest.title}</div>
          <div class="bottom-content-like">{rest.like}</div>
        </div>
        <div className="bottom-content-avatar">
          <img src={rest.emailAvatar} />
          <div className="bottom-content-email">{rest.email}</div>
        </div>
        <div className="bottom-content-eth">
          <div className="bottom-content-text">{rest.textBottom}</div>
          <div className="bottom-content-group">
            <img src={rest.avatarETH} />
            <div className="c">
              <span>{rest.numberETH}</span>
              <span>{rest.textETH}</span>
            </div>
          </div>
        </div>
      </StyledArtItemBottom>
    </>
  );
};

export const ArtItem = ({ ...rest }) => {
  return (
    <StyledMainArtItem>
      <ArtItemContent
        imgNumber={rest.imgNumber}
        trendingAvatar={rest.trendingAvatar}
        title={rest.title}
        like={rest.like}
        emailAvatar={rest.emailAvatar}
        email={rest.email}
        textBottom={rest.textBottom}
        numberETH={rest.numberETH}
        textETH={rest.textETH}
        avatarETH={rest.avatarETH}
      />
    </StyledMainArtItem>
  );
};
