import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionAlign = ({ children }: Props) => {
  return (
    <div className="mx-4">
      <div className="max-w-[40.625rem] mx-auto">{children}</div>
    </div>
  );
};
