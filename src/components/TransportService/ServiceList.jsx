import React from "react";
import Card from "../../shared/layout/card/Card";
import Container from "../../shared/layout/container/Container";
import classes from "./servicelist.module.scss";
import Button from "../../shared/buttons/Button";
import ServiceItem from "./ServiceItem";
import OILTANK from "../../store/images/oiltank.png";
import LADIES from "../../store/images/2ladies.png";
import TRUCK from "../../store/images/truck.png";
import DOCK from "../../store/images/dock.png";
import SHIP from "../../store/images/ship.png";

function ServiceList() {
  return (
    <main className={classes["transports"]}>
      <Container>
        <h2 className={classes.heading}>Transporting Across The World</h2>
        <Card className={classes["transport-cards"]}>
          <ServiceItem
            image={OILTANK}
            title="Liquid Transportation"
            desc="Premium Tankers"
          />

          <ServiceItem
            image={LADIES}
            title="Packaging Solutions"
            desc="Warehouse Management"
          />

          <ServiceItem
            image={TRUCK}
            title="Contract Logistics"
            desc="Road Transportation"
          />

          <ServiceItem
            image={DOCK}
            title="Warehouse & Distribution"
            desc="Large Warehouse"
          />

          <ServiceItem
            image={SHIP}
            title="Specialized Transport"
            desc="Ocean Transports"
          />
        </Card>

        <Button version="btn-secondary">More Work</Button>
      </Container>
    </main>
  );
}

export default ServiceList;
