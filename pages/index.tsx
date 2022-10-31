import styles from "../styles/Home.module.css";
import { Fragment, useEffect, useState } from "react";
import { IAPODQueryParams, IAPODResponse } from "../models/apiModels";
import { getAPODDAL } from "../apodDAL";
import APODModal from "../components/modals/APODModal";
import { Box } from "@mui/material";
import moment from "moment";
import Loading from "../components/Loading";
import ImageListing from "../components/ImageListing";

const Home = () => {
  const [response, setResponse] = useState<IAPODResponse[]>();
  const [date, setDate] = useState<moment.Moment>(moment());

  const getAPOD = (params: IAPODQueryParams) => {
    setResponse(undefined);
    getAPODDAL<IAPODResponse>("/api/nasa/apod", params).then((res) => {
      setResponse(res);
    });
  };

  useEffect(() => getAPOD({ date: date.format("YYYY-MM-DD") }), [date]);

  const handleDateChange = (date?: moment.Moment | null) => {
    if (date) {
      setDate(date);
    }
  };

  const handleRandomize = () => {
    getAPOD({ count: 10 });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!response ? (
          <Loading />
        ) : (
          <Fragment>
            <ImageListing items={response} />
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <APODModal
                onDateChange={handleDateChange}
                date={date}
                onRandomize={handleRandomize}
              />
            </Box>
          </Fragment>
        )}
      </main>
    </div>
  );
};

export default Home;
