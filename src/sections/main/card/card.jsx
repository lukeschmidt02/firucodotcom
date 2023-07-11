import PropTypes from "prop-types";
import { Card, Grid, Text, Button } from "@nextui-org/react";

const ButtonComponent = ({ url, children = "Check out Full Post!" }) => (
  <Button
    onClick={() => {
      window.location.href = url;
    }}
  >
    {children}
  </Button>
);

export const CardComponent = ({ children, primary, secondary, url }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "400px",
        minHeight: "320px",
        width: "100%",
        minWidth: "100%",
      }}
    >
      <Card
        css={{
          p: "$6",
          mw: "400px",
          height: "320px",
          minHeight: "320px",
          width: "100%",
          minWidth: "100%",
        }}
      >
        <Card.Header>
          <img
            alt="huntago"
            src="https://i.ibb.co/CBkQvxz/huntago.png"
            width="50px"
            height="50px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {primary}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{secondary}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>{children}</Text>
        </Card.Body>
        <ButtonComponent url={url} />
      </Card>
    </div>
  );
};

export const CheckFullBlog = () => {
  return (
    <div style={{ maxHeight: "65px", minHeight: "65px" }}>
      <Card
        css={{
          p: "$6",
          mw: "400px",
          height: "65px",
          minHeight: "65px",
          width: "100%",
          minWidth: "100%",
        }}
      >
        <ButtonComponent url="https://medium.com/@lukeschmidt02">
          See More on Medium
        </ButtonComponent>
      </Card>
    </div>
  );
};

// PropTypes validation (comments)
CardComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  primary: PropTypes.string,
  secondary: PropTypes.string,
  url: PropTypes.string,
};

ButtonComponent.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
