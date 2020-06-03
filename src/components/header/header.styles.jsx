import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    align-items: baseline;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 100px;
  padding: 25px;
`
export const ApplicationTitle = styled.span`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  width: max-content;
  position: absolute;
  margin: 0px 70px;
  top: 64px;
  font-size: 1.2rem;
  background: -webkit-linear-gradient(#eee, #333);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`

export const Option = styled(Link)`
  padding: 10px 15px;
  text-transform: capitalize;
`
export const DisplayName = styled(Option)`
  cursor: default;
`

