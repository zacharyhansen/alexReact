import { FunctionComponent, Fragment } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IAPODResponse } from "../models/apiModels";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoPopper from "./InfoPopper";
import InfoDisplay from "./InfoDispaly";
import Image from "next/image";

interface IImageListingProps {
  items: IAPODResponse[];
}

const ImageListing: FunctionComponent<IImageListingProps> = ({ items }) => {
  if (items.length === 1) {
    return (
      <Fragment>
        <Image src={items[0].url || ""} alt="apod image" fill />
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <InfoPopper>
            {Object.keys(items[0]).map((field) => (
              // @ts-ignore
              <InfoDisplay key={field} title={field} info={items[0][field]} />
            ))}
          </InfoPopper>
        </Box>
      </Fragment>
    );
  }
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {items.map((item) => (
        <ImageListItem key={item.url}>
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListing;
