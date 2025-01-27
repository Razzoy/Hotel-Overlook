import { Card } from "../components/Card/Card";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { useGet } from '../hooks/useGet';

export function FrontPage() {

  const { data, isLoading, error } = useGet(
    'http://localhost:4000/news'
  )

  let basePath = `./images/`;

  return (
    <div>FrontPage
        <GridContainer columns={3} gap={'2rem'}>
        {!isLoading && data?.sort(() => Math.random() - 0.5).slice(0, 3).map((item) => {
          return (
            <Card 
            key={item.id}
            imageSrc={basePath + item.image.filename}
            alt={item.title}
            title={item.title}
            text={item.teaser}
            />
          )
        })}
        </GridContainer>
    </div>
  )
}
