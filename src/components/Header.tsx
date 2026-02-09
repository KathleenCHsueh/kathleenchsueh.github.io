import { SegmentGroup } from "@ark-ui/react";
import { segmentGroup } from "@styled-system/recipes";
import { useNavigate } from "react-router-dom";
import { css } from "@styled-system/css";

type HeaderProps = {
  navOptions: string[];
};

const Header = ({ navOptions }: HeaderProps) => {
  const pages = navOptions;
  const classes = segmentGroup({ size: "md" });
  const navigate = useNavigate();

  const handleChange = (details: SegmentGroup.ValueChangeDetails) => {
    navigate(`/${details.value}`);
  };

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        position: "sticky",
        top: 0,
        zIndex: 100,
        alignItems: "baseline",
        backgroundColor: "background.dark",
        padding: "18px 0",
      })}
    >
      <h1
        className={css({
          display: "flex",
          fontFamily: "body",
          fontSize: "lg",
          color: "primary.text",
          justifyContent: "center",
        })}
      >
        Kathleen H.
      </h1>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <SegmentGroup.Root
          className={classes.root}
          onValueChange={handleChange}
        >
          <SegmentGroup.Indicator className={classes.indicator} />
          {pages.map((page) => (
            <SegmentGroup.Item
              className={classes.item}
              key={page}
              value={page.toLowerCase()}
            >
              <SegmentGroup.ItemText className={classes.itemText}>
                {page}
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemControl className={classes.itemControl} />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))}
        </SegmentGroup.Root>
      </nav>
    </div>
  );
};

export default Header;
