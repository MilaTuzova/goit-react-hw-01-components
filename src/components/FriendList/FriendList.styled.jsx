import styled from '@emotion/styled';

export const FriendsList = styled.ul`
display: flex;
width: 350px;
flex-direction: column;
justify-content: space-around;
padding: 0px;
margin: 0px;
`;

export const FriendItem = styled.li`
display: flex;
width: 330px;
flex-direction: row;
justify-content: flex-start;
text-align: center;
margin-top: 20px;
margin-left: auto;
padding: 5px 5px 5px 5px;
border: 2px solid violet;
border-radius: 4px;
box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
cursor: pointer;
`;

export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
margin: auto 10px auto 10px;
background-color: ${props => (props.isOnline ? 'green' : 'red')};

`;


export const FriendImg = styled.img`
widht: 100%;
margin: 10px 10px;
`;

export const FriendName = styled.p`
text-align: center;
font-size: 25px;
font-weight: 400;
text-transform: uppercase;
margin: auro 10px auto 10px;

`;
