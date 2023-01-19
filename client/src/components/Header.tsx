import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const useLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <Contianer>
      <Wrapper>
        <LogoContainer>
          <Logo>Todo List</Logo>
        </LogoContainer>
        <MenuContainer>
          {token ? (
            <div onClick={useLogout}>로그아웃</div>
          ) : (
            <Link to='/auth'>로그인 </Link>
          )}
        </MenuContainer>
      </Wrapper>
    </Contianer>
  );
};

export default Header;

const Contianer = styled.div`
  height: 80px;
  background-color: #fde5e5;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
