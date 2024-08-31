// StatCard.tsx
import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StatCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card>
    <h3>{title}</h3>
    {children}
  </Card>
);

export default StatCard;
