type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <section style={{ maxWidth: "1330px", margin: "0 auto" }}>
      {children}
    </section>
  );
};

export default PageContainer;
