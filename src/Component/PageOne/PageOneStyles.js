import styled from 'styled-components'
import { Container } from '../GlobalStyles';

export const PageOneMain = styled.div`
    padding:10px;
    padding-top:30px;
    background-color:#ffed99;
    height:fit-content;
    min-height:100vh;
    
`;

export const PageOneContainer = styled(Container)`
   
   
`;
export const PageTopSection = styled.div`
     display:flex;
     justify-content:space-between;
     align-items:center;
    background-color:#fffbdf;
    padding:10px;
    border-radius:10px;
      box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
    
`;
export const Filter = styled.div`
    background-color:white;
    height:30px;
    padding:10px 30px;
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
    
       background-color:#1768ac;
        color:#e5d549;
        transition:transform 750ms ease-out;
        transition-property: background-color;
        transition-duration: 1s;
        transition-delay: 50ms;

        &:hover{
            color:#1768ac ;
            background-color:#e5d549;
          
        }
`;

export const PageTopSectionRight = styled.div`
        padding:10px 30px;
       width:700px;

`;
export const PageTopSecitonLeft = styled.div`
        
`;