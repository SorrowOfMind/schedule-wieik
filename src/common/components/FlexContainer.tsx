interface FlexContainerProps {
  children: React.ReactNode;
}

const FlexContainer = ({ children }: FlexContainerProps) => {
  return <div className="flex flex-wrap gap-y-1.5">{children}</div>;
};

export default FlexContainer;
