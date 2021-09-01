import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  padding-top: 50px;
  margin: auto;
  width: 350px;
  border-radius: 6px;
  border: 2px solid violet;
  background-color: rgba(184, 184, 184, 0.705);
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const ProfileImg = styled.img`
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

export const ProfileName = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProfileText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: grey;
`;

export const ProfileStats = styled.ul`
  display: flex;
  width: 100;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  padding-left: 0px;
  margin: 0px;
`;

export const ProfileStatusItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLabel = styled.span`
  color: rgb(68, 67, 67);
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const ProfileQuality = styled.span`
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
`;
