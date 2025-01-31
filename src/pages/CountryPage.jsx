import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { Card } from "../components/Card/Card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BreadCrumb } from "../components/Breadcrumb/BreadCrumb";
import { Section } from "../components/Section/Section";

export function CountryPage() {
  const [cityData, setCityData] = useState();
  const { country } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched cityData:", data);
        setCityData(data);
      });
  }, [country]);

  return (
    <div>
      <GridContainer fraction={'3fr 1fr'}>
        <MarginContainer border={"1px solid grey"}
          margin={"1rem"}
          height={"80vh"}>
          <BreadCrumb />
          <Section title={`Vores byer i ${country}`}>
          <GridContainer fraction={"1fr 1fr 1fr"} gap={"1rem"}>
            {cityData?.cities?.map((city) => {
              return (
                <Card
                  key={city.slug}
                  title={city.slug}
                  imageSrc={`/public/images/${city.CityImage.city_image_filename}`}
                  alt={city.slug}
                  imgClick={() => navigate(`/destinations/${country}/${city.slug}`)}
                />
              );
            })}
          </GridContainer>
          </Section>
        </MarginContainer>
      </GridContainer>
    </div>
  );
}
