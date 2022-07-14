/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../theme/theme";
const DuoWrapper = styled.div`
  display: flex;
  gap: ${theme.space.gap};
`;
const DuoImageWrapper = styled.div`
  overflow: hidden;
`;
const DuoImage = styled.img`
  height: auto;
  max-height: 100vh;
  width: 100%;
  filter: saturate(70%);
`;

export const ImageDuo = (props) => {
  return (
    <DuoWrapper>
      <DuoImageWrapper>
        <DuoImage src={props.images[0]} alt="" />
      </DuoImageWrapper>
      <DuoImageWrapper>
        <DuoImage src={props.images[1]} alt="" />
      </DuoImageWrapper>
    </DuoWrapper>
  );
};
