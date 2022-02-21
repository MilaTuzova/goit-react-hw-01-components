import styled from '@emotion/styled';

export const Card = styled.div`
  padding-top: 50px;
  margin: auto;
  width: 350px;
  border-radius: 6px;
  border: 4px solid grey;
  background-color: #91b38a;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const Img = styled.img`
  margin: 0;
  display: block;
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid grey;
  margin: auto;
  width: 60%;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  color: #18469b;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #145707;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  padding-left: 0px;
  margin: 0px;
  border-top: 4px solid grey;
`;

export const StatusItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: rgb(5, 133, 73);
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const Quality = styled.span`
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  color: black;
  font-weight: 700;
`;
