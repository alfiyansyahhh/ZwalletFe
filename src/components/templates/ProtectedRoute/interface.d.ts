import React from "react";

export interface IProtectRouteProps {
  children?: React.Fragment;
  isAllowed?: boolean;
  redirectPath?: string;
}
