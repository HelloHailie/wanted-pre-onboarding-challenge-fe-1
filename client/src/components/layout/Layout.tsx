import styled from "styled-components";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Contianer>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Contianer>
  );
};

export default Layout;

const Contianer = styled.div``;
const MainContainer = styled.div``;
