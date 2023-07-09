interface FlexChildProps {
  children: React.ReactNode;
  classes: string;
}

const FlexChild = ({ children, classes }: FlexChildProps) => {
  return <div className={classes}>{children}</div>;
};

export default FlexChild;
