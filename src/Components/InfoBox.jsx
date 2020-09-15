import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox-cases">{cases}</h2>
        <Typography className="infoBox-total">{total} total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
