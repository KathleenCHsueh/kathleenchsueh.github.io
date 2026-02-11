import { useState, useRef, useEffect } from "react";
import { SegmentGroup } from "@ark-ui/react";
import { segmentGroup } from "@styled-system/recipes";
import { useNavigate } from "react-router-dom";
import { css } from "@styled-system/css";

type HeaderProps = {
  navOptions: string[];
};

const Header = ({ navOptions }: HeaderProps) => {
  const [showOverlayNav, setShowOverlayNav] = useState(false);
  const [animateOverlay, setAnimateOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pages = navOptions;
  const classes = segmentGroup({ size: "md" });
  const navigate = useNavigate();

  // Animate overlay in/out
  useEffect(() => {
    if (!showOverlayNav && animateOverlay) {
      // Wait for animation to finish before unmounting
      const timeout = setTimeout(() => setAnimateOverlay(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [showOverlayNav, animateOverlay]);

  // Scroll to ContactSection if Contact is selected on /home
  const handleChange = (details: string) => {
    if (details.toLowerCase() === "contact") {
      navigate("/home#contact");
      setShowOverlayNav(false);
      return;
    }
    navigate(`/${details.toLowerCase()}`);
    setShowOverlayNav(false); // close overlay on nav select
  };

  return (
    <>
      <div
        className={css({
          display: "flex",
          lg: { display: "none" },
          justifyContent: "space-around",
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
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowOverlayNav(true);
            setAnimateOverlay(true);
          }}
        >
          <svg
            width="22"
            height="17"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H21"
              stroke="#EDD6C6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 16H21"
              stroke="#EDD6C6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 9H21"
              stroke="#EDD6C6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {(showOverlayNav || animateOverlay) && (
          <div
            ref={overlayRef}
            className={css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "background.dark",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition:
                "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
              transform: showOverlayNav
                ? "translateY(0%)"
                : "translateY(-100%)",
              opacity: showOverlayNav ? 1 : 0,
            })}
          >
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "2em" }}
            >
              <SegmentGroup.Root className={classes.root}>
                <SegmentGroup.Indicator className={classes.indicator} />
                {pages.map((page) => (
                  <div
                    onClick={() => handleChange(page.toLowerCase())}
                    key={page}
                  >
                    <SegmentGroup.Item
                      className={classes.item}
                      value={page.toLowerCase()}
                    >
                      <SegmentGroup.ItemText className={classes.itemText}>
                        {page}
                      </SegmentGroup.ItemText>
                      <SegmentGroup.ItemControl
                        className={classes.itemControl}
                      />
                      <SegmentGroup.ItemHiddenInput />
                    </SegmentGroup.Item>
                  </div>
                ))}
              </SegmentGroup.Root>
            </nav>
          </div>
        )}
      </div>
      <div
        className={css({
          display: "none",
          lg: { display: "grid" },
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
          <SegmentGroup.Root className={classes.root}>
            <SegmentGroup.Indicator className={classes.indicator} />
            {pages.map((page) => (
              <div onClick={() => handleChange(page.toLowerCase())} key={page}>
                <SegmentGroup.Item
                  className={classes.item}
                  value={page.toLowerCase()}
                >
                  <SegmentGroup.ItemText className={classes.itemText}>
                    {page}
                  </SegmentGroup.ItemText>
                  <SegmentGroup.ItemControl className={classes.itemControl} />
                  <SegmentGroup.ItemHiddenInput />
                </SegmentGroup.Item>
              </div>
            ))}
          </SegmentGroup.Root>
        </nav>
      </div>
    </>
  );
};

export default Header;
