import styled from "styled-components";
import { Container } from "../GlobalStyles";


export const ListMain = styled.div`
    
`;

export const ListContainer = styled(Container)`
       
    `;

export const ListView = styled.div`
    display:flex;
    margin-top:30px;
     background-color:${({ Active }) => Active ? "#d7f5f7" : "#f7e2e1"};
     border-radius:10px;
     height:200px;
     padding:10px;
     align-items:center;

    
      box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;

@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    height:fit-content
}

`;

export const ViewComponentOne = styled.div`
    flex:1;
    color:#1768ac

`;

export const ListName = styled.p`
    font-weight:600;
`;

export const ListEmail = styled.p`
     font-weight:600;
`;

export const ViewComponentTwo = styled.div`
    flex:1;
    font-weight:900;
    color:#1768ac
`;

export const ListPhone = styled.p`
      /* font-weight:600; */
`;

export const ListActive = styled.p`
  font-weight:600;

`;

export const ViewComponentThree = styled(ViewComponentOne)`
    
    display:flex;
    flex-direction:column;
    font-weight:600;

`;

// export const ListName = styled.p`

// `;

// export const ListEmail = styled.p`

// `;