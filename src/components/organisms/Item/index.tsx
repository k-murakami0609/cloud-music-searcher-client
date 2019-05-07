import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { SearchResponse } from "../../../services/api/apiClient";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 128
  },
  title: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "2",
    overflow: "hidden"
  }
});

interface ItemProps {
  item: SearchResponse;
}

const Item: React.FC<ItemProps> = ({ item }: ItemProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.thumbnails}
          title={item.title}
        />
        <CardContent>
          <Typography variant="body2" component="p" className={classes.title}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            アーティスト
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.publishedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
