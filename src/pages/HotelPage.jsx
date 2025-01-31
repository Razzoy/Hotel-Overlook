import { useEffect, useState } from "react";
import { BreadCrumb } from "../components/Breadcrumb/BreadCrumb";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { Section } from "../components/Section/Section";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/Card/Card";
import style from "./pageStyles/HotelPage.module.scss"
import { IoIosArrowDown } from "react-icons/io";

export function HotelPage() {
  const [roomData, setRoomData] = useState();
  const { country, city, hotel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}/${hotel}`)
      .then((res) => res.json())
      .then((data) =>
        setRoomData(data));
  }, [country, city, hotel]);



  return (
    <div>
      <GridContainer fraction={"3fr 1fr"}>
        <MarginContainer
          border={"1px solid grey"}
          margin={"1rem"}
        >
          <BreadCrumb />
          <Section title={`Vores værelser på ${hotel}`}>
            <div className={style.roomsCardsContainer}>
            <GridContainer fraction={"1fr"} gap={"3rem"}>
              {roomData?.cities[0]?.hotels[0]?.rooms.map((room) => {
                return (
                  <Card
                    key={room.slug}
                    title={room.slug}
                    imageSrc={`/public/images/${room.images[0].filename}`}
                    alt={room.slug}
                    text={room.description}
                  >
                    <div className={style.price}>
                    <h6 >Pris: {room.day_price_normal} kr</h6>
                    </div>
                    <span className={style.arrowLink}><NavLink to={`/destinations/${country}/${city}/${hotel}/${room.slug}`}><IoIosArrowDown /></NavLink></span>
                  </Card>
                );
              })}
            </GridContainer>
            </div>
          </Section>
        </MarginContainer>
      </GridContainer>
    </div>
  );
}
