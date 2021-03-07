import { React} from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import styled from "styled-components";
import "./Loader.css";
const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  bottom: 0;
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Load = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const Money = styled(FaMoneyBillAlt)`
  color: greenyellow;
  font-size: 20px;
  position: absolute;
  animation:money 3s linear infinite alternate;
  &:nth-child(1) {
    top: 50%;
    margin-top: -10px;
  }
  &:nth-child(2) {
    top: 50%;
    margin-top: -10px;
    right: 0;
  }
  &:nth-child(3) {
    top: 0;
    margin-left: -10px;
    left: 50%;
  }
  &:nth-child(4) {
    bottom: 0;
    margin-left: -10px;
    left: 50%;
  }
  &:nth-child(5) {
    top: 20%;
    margin-top: -5px;
    margin-left: -5px;
    left: 75%;
  }
  &:nth-child(6) {
    top: 20%;
    margin-top: -5px;
    margin-right: -5px;
    right: 75%;
  }
  &:nth-child(7) {
    bottom: 20%;
    margin-bottom: -5px;
    margin-right: -5px;
    right: 75%;
  }
  &:nth-child(8) {
    bottom: 20%;
    margin-bottom: -5px;
    margin-left: -5px;
    left: 75%;
  }
  @keyframes money{
    100%{
      transform:rotate(360deg)
    }
  }
`;


const Loader = ({remove}) => {
  return (
    <>
      <ContainerLoader className={remove}>
        <Load className="loader">
          <div className="">
            <svg className="star" viewBox="0 0 23.172 23.346">
              <polygon
                fill="#40c4ff"
                points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
              ></polygon>
            </svg>
          </div>
          <div>
            <Money />
            <Money />
            <Money />
            <Money />
            <Money />
            <Money />
            <Money />
            <Money />
          </div>
        </Load>
      </ContainerLoader>
    </>
  );
}

export default Loader




