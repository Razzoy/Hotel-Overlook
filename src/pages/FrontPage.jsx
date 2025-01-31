import { Card } from "../components/Card/Card";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Slider } from "../components/Slider/Slider";
import { useGet } from "../hooks/useGet";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Section } from "../components/Section/Section";

export function FrontPage() {
  //fetch the news
  const { data, isLoading, error } = useGet("http://localhost:4000/news");

  //fetch the rooms
  const {
    data: standardData,
    isLoading: standardLoad,
    error: standardErr,
  } = useGet(
    "http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard"
  );
  const {
    data: ecoData,
    isLoading: ecoLoad,
    error: ecoErr,
  } = useGet(
    "http://localhost:4000/destinations/danmark/kobenhavn/overlook-webers/economy"
  );
  const {
    data: preData,
    isLoading: preLoad,
    error: preErr,
  } = useGet(
    "http://localhost:4000/destinations/tyskland/berlin/overlook-berlin-potsdamer-platz/presidental-suite"
  );

  let basePath = `./images/`;

  return (
    <div>
      <Slider headerTitle={"VELKOMMEN TIL HOTEL OVERLOOK ONLINE"} />
      <Wrapper>
        <Section title={"Sidste nyt"}>
          <GridContainer fraction={'1fr 1fr 1fr'} gap={"5vw"}>
            {!isLoading &&
              data?.slice(0, 3)
                .map((item) => {
                  return (
                    <Card
                      key={item.id}
                      imageSrc={basePath + item.image.filename}
                      alt={item.title}
                      title={item.title}
                      text={item.teaser.slice(0, 100) + "..."}
                    />
                  );
                })}
          </GridContainer>
        </Section>
        <Section title={"Se vores udvalg af værelser"}>
          <GridContainer fraction={'1fr 1fr 1fr'} gap={"5vw"}>
            {!standardLoad &&
              standardData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                return (
                  <Card
                    key={room.title}
                    title={room.title}
                    link={room.id}
                    imageSrc={basePath + `${room.images[0]?.filename}`}
                    text={room.description.slice(0, 100) + "..."}
                  />
                );
              })}
              {!ecoLoad &&
              ecoData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                return (
                  <Card
                    key={room.title}
                    title={room.title}
                    link={room.id}
                    imageSrc={basePath + `${room.images[0]?.filename}`}
                    text={room.description.slice(0, 100) + "..."}
                  />
                );
              })}
              {!preLoad &&
              preData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                return (
                  <Card
                    key={room.title}
                    title={room.title}
                    link={room.id}
                    imageSrc={basePath + `${room.images[0]?.filename}`}
                    text={room.description.slice(0, 100) + "..."}
                  />
                );
              })}
          </GridContainer>
        </Section>
      </Wrapper>
    </div>
  );
}
