import { ReactChild, ReactFragment, ReactPortal } from "react";

export interface IType {
  children?:
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
}
