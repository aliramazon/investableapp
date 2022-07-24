import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-7);
    padding: var(--spacing-8);
    width: calc(100% - 25rem);
    height: calc(100vh - 6.8rem);
    overflow: auto;
`;
