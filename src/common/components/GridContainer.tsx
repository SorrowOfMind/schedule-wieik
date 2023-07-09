interface GridContainerProps {
  children: React.ReactNode;
  options: string;
}

const GridContainer = ({ children, options }: GridContainerProps) => {
  return <div className={`grid ${options}`}>{children}</div>;
};

export default GridContainer;
