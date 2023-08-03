import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Certificate.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { certificateData } from "../../data/certificateData";
import SingleCertificate from "./SingleCertificate/SingleCertificate";

function Certificate() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {certificateData.length > 0 && (
        <div
          className="certificate"
          id="certificate"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="certificate--header">
            <h1 style={{ color: theme.primary }}>certificate</h1>
          </div>
          <div className="certificate--body">
            <div className="certificate--bodyContainer">
              {certificateData
                .slice(0, 3)
                .reverse()
                .map((certificate) => (
                  <SingleCertificate
                    theme={theme}
                    title={certificate.title}
                    // desc={certificate.description}
                    date={certificate.date}
                    image={certificate.image}
                    // url={certificate.url}
                    // key={certificate.id}
                    id={certificate.id}
                  />
                ))}
            </div>

            {certificateData.length > 3 && (
              <div className="certificate--viewAll">
                <Link to="/certificates">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Certificate;
