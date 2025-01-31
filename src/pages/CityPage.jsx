import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { Card } from "../components/Card/Card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BreadCrumb } from "../components/Breadcrumb/BreadCrumb";
import { Section } from "../components/Section/Section";

export function CityPage() {
  const [hotelData, setHotelData] = useState();
  const { country, city } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}`)
      .then((res) => res.json())
      .then((data) =>
        setHotelData(data));
  }, [country, city]);

  return (
    <div>
      <GridContainer fraction={"3fr 1fr"}>
        <MarginContainer
          border={"1px solid grey"}
          margin={"1rem"}
        >
          <BreadCrumb />
          <Section title={`Vores hoteller i ${city}`}>
            <GridContainer fraction={"1fr 1fr 1fr"} gap={"1rem"}>
            {hotelData?.cities[0]?.hotels?.map((hotel) => {
                return (
                  <Card
                    key={hotel.slug}
                    title={hotel.slug}
                    imageSrc={`/public/images/${hotel.HotelImage.hotel_image_filename}`}
                    alt={hotel.slug}
                    imgClick={() =>
                      navigate(`/destinations/${country}/${city}/${hotel.slug}`)
                    }
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
