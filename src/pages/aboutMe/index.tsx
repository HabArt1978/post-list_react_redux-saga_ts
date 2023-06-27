import { Card, Container, ListGroup } from "react-bootstrap"
import LinkToHomePage from "../../components/UI/LinkToHomePage"

const AboutMePage = () => {
  return (
    <Container style={{ marginTop: "7rem", maxWidth: "800px" }}>
      <LinkToHomePage />

      <div className="shadow p-3 mb-3 bg-body-tertiary rounded">
        <Card>
          <Card.Body>
            <Card.Title>
              <span className="me-1">Артур Хабибулин</span>
              <span></span>
            </Card.Title>
            <Card.Text
              className="mt-4"
              style={{ textIndent: "24px", textAlign: "justify" }}
            >
              На данный момент ищу своё первое место работы. Я целеустремлённый
              и позитивный человек с хорошими навыками коммуникации. В
              WEB-разработке нашёл то, что мне по-настоящему нравится и чему я
              готов посвятить всего себя. Дети выросли стали самостоятельными,
              появилось время заняться своей мечтой.
            </Card.Text>

            <ListGroup className="list-group-flush border-top border-1 mt-4">
              <ListGroup.Item>
                <p className="fw-semibold mt-3">Мой стек :</p>
                <ul>
                  <li>HTML5 / CSS3</li>
                  <li>Bootstrap/ Material-UI/ React-bootstrap</li>
                  <li>JavaScript / TypeScript</li>
                  <li>ReactJS, Redux, Redux-Thunk, Redux-Saga</li>
                  <li>React-hook-form</li>
                  <li>Yup</li>
                  <li>Axios</li>
                  <li>Git</li>
                </ul>
                <p className="fw-semibold mt-3 me-1">
                  Репозитории :
                  <a
                    className="ms-3"
                    href="https://github.com/HabArt1978?tab=repositories"
                  >
                    Repositories on GitHub
                  </a>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p
                  style={{
                    textIndent: "24px",
                    textAlign: "justify",
                    marginTop: "1rem",
                  }}
                >
                  Я серьёзно сфокусирован на достижении поставленной цели, в чём
                  мне помогает достаточный жизненный опыт и огромное желание
                  стать частью вашей команды разработчиков. Постоянно повышая
                  свой уровень разработчика React JS приложений, я намерен
                  улучшить конечный результат всей команды.
                </p>
                <p>Спасибо за ваше время!</p>
                <p>Артур Хабибулин</p>
                <p className="m-0">
                  почта : <a href="mailto:habart1978@gmail">habart1978@gmail</a>
                </p>
                <p className="m-0">
                  телефон : <a href="tel:+7(927)640-95-24">+7 927 640-95-24</a>
                </p>
                <p className="m-0">
                  Telegram :
                  <a href="https://t.me/+79276409524">+7 927 640-95-24</a>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default AboutMePage
