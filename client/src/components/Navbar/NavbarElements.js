import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #C1BDB3;
  height: 85px;
  display: flex;
  border-radius: 50px 20px;
  margin: 5px;
  justify-content: space-between;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #3D3B3C;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  cursor: pointer;
  font-size: 1em;
  &.active {
    color: #5F5B6B;
  }
`;
  
// export const Bars = styled(FaBars)`
//   display: none;
//   color: ##3D3B3C;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3.5rem;

`;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
export const NavBrand = styled.div`
    color: #3D3B3C;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.8em;
    padding: 0 1rem;
    height: 100%;
    &.active {
    color: #000000;
    }
`;