import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  tags?: string[];
}

export default function Card({ children, tags }: Props) {
  const renderTag = tags && tags.map((tag) => <div key={tag} className="btn">{tag}</div>) 

  return (
    <div className="bg-black rounded-lg">
      <div className="bg-white rounded-lg h-[180px] flex justify-center items-center">
        <h1 className="font-bold text-black">{children}</h1>
      </div>
      <div className="flex justify-center items-center p-3 gap-2">
        {renderTag}
      </div>
    </div>
  );
}
