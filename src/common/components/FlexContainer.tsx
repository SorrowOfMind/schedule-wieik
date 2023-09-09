interface FlexContainerProps {
  children: React.ReactNode;
}

const FlexContainer = ({ children }: FlexContainerProps) => {
  return <div className="flex flex-wrap gap-y-10 flex-col">{children}</div>;
};

export default FlexContainer;
