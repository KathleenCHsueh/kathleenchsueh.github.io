import { css } from "@styled-system/css";

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <section
      className={css({
        maxWidth: "425px",
        lg: { maxWidth: "1330px", gap: "8em" },
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "6em",
      })}
    >
      {children}
    </section>
  );
};

export default PageContainer;
