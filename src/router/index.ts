import React from "react";

export interface IRouter {
  patch: string;
  component: React.Component;
}

export const router: IRouter[] = [];
