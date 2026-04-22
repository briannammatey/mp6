'use client';

import styled from 'styled-components';
import { Props } from './types';


const StyledContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
    background-color: pink;
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
width:30%;
    height:40%;
  text-align: center;
  
`;
const StyledText = styled.p`
font-size: 20px;
    font-family: "Dubai Medium";
   
`
const StyledHeader = styled.h1`
font-family: "Segoe UI";
font-size: 30px;`

const StyledButton = styled.button`
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    color: white;
    background-color:#4600bf;
    


    &:hover {
        background: #cb92ea;
    }
`;

export default function StyledWrapper({ user, signIn, signOut }: Props) {
    return (
        <>

            <StyledContainer>
                <StyledCard>
                    {user ? (
                        <>
                            <StyledHeader>{user.name}</StyledHeader>
                            <StyledText>{user.email}</StyledText>

                            <form action={signOut}>
                                <StyledButton type="submit">Sign out</StyledButton>
                            </form>
                        </>
                    ) : (
                        <>
                            <StyledHeader>Welcome</StyledHeader>
                            <StyledText>Sign in to view your Google profile</StyledText>

                            <form action={signIn}>
                                <StyledButton type="submit">Sign in with Google</StyledButton>
                            </form>
                        </>
                    )}
                </StyledCard>
            </StyledContainer>
        </>
    );
}