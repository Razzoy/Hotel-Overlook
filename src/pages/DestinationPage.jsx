import { useEffect, useState } from "react";
import { DestinationNav } from "../components/DestinationNav/DestinationNav";
import { Slider } from "../components/Slider/Slider";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { BreadCrumb } from "../components/Breadcrumb/BreadCrumb";
import { NavLink, useNavigate } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Section } from "../components/Section/Section";

export function DestinationPage() {
  const [countryData, setCountryData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/`)
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <>
      <Slider
        imageSet={"destinationImage"}
        headerTitle={"HOTELLER OG DESTINATIONER"}
      />
      <DestinationNav />
      <GridContainer fraction={"3fr 1fr"}>
        <MarginContainer
          border={"1px solid grey"}
          margin={"1rem"}
          height={"80vh"}
        >
          <BreadCrumb></BreadCrumb>
          <Section title={`Vores Destinationer`}>
            <GridContainer fraction={"1fr 1fr 1fr"} gap={'1rem'}>
              {countryData?.map((country) => {
                return (
                  <Card
                    key={country.slug}
                    title={country.slug}
                    imageSrc={`/public/images/${country.CountryImage.country_image_filename}`}
                    alt={country.slug}
                    imgClick={() => navigate(`/destinations/${country.slug}`)}
                  />
                );
              })}
            </GridContainer>
          </Section>
        </MarginContainer>
      </GridContainer>
    </>
  );
}
