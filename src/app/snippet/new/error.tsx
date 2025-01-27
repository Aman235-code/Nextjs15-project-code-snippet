"use client";
import React from "react";

type ErrorPageProps = {
  error: Error;
};
const error: React.FC<ErrorPageProps> = ({ error }) => {
  return <div>{error.message}</div>;
};

export default error;
