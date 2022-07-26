import styled from "styled-components";

export const InputPost = styled.textarea`
    box-sizing: border-box;
    width: 400px;
    height: 131px;
    margin: 5px;
    background: #EDEDED;
    border: 1px solid #D5D8DE;
    border-radius: 12px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
`
export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;
    width: 364px;
    height: 167px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    margin: 8px;
    margin-bottom: 20px;
    padding-bottom: 20px;
`

export const ContainerPost = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: 'IBM Plex Sans';
    font-style: normal;
`

export const BtnButton = styled.button`
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    color: white;
    border-radius: 27px;
    border: none;
    margin: 5px;
`

export const Divider = styled.div`
    width: 363.01px;
    height: 2px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    margin: 5px;
`
export const FooterPost = styled.div`
    display: flex;
    flex-direction: row;
`
export const SmallBox = styled.div`
    border-radius: 27px;
    border: outset grey 1px;
    flex-direction: row;
    display: flex;
    width: 100px;
    
    
`
export const Logo = styled.img`
    width: 20px;
    height: 20px;
    margin: 2px;
    margin-right: 20px;
    margin-left: 10px;
    padding-top: 10px;
`