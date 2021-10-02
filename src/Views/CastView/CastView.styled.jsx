import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin-right: -50px;
  padding: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 10px 3px rgba(34, 60, 80, 0.2);
  border-radius: 4px;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 300px;
  object-fit: cover;
  max-width: 100%;
`;
export const P = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 0;
`;
