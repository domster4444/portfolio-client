/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Text, Divider, Button, Row, Spacer } from '@nextui-org/react';
const NoticeCard: React.FC = ({ setShowNotice }: any) => {
  return (
    <>
      <Card css={{ mw: '100%', height: '100%' }} style={{ zIndex: '100' }}>
        <Card.Header>
          <Text
            b
            style={{
              fontSize: '1.8rem',
            }}
          >
            Terms & Conditions
          </Text>
        </Card.Header>
        <Divider />
        <Card.Body>
          <article>
            <Text
              style={{
                fontSize: '1.8rem',
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content. Some quick example text to build on the
              card title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Some quick example text to build on the card
              title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum, ut adipisci autem voluptas suscipit iure
              quidem rem facere nostrum molestias maiores magnam minus aliquid.
              Alias tempore nemo quidem sequi, reiciendis impedit quasi culpa
              libero unde officia dolore fuga tenetur ea laudantium explicabo
              sed excepturi minus maxime nisi nulla aut qui, harum cum? Magni
              quo laboriosam assumenda modi, dolorum debitis laborum ullam
              numquam aliquam deleniti placeat id sit, quod dignissimos
              similique vitae, amet enim nihil fugiat ex aspernatur iusto! Odit,
              doloribus autem nulla quam dignissimos debitis. Vel totam officia
              repellat culpa ducimus obcaecati saepe eius natus, fuga
              necessitatibus rem, commodi, debitis hic? Similique quaerat unde
              odit impedit perspiciatis beatae ipsa odio ad ullam quam? Fuga,
              corporis architecto earum magni recusandae tenetur dolores
              placeat? Aut saepe unde quas similique temporibus eveniet culpa
              laboriosam quo porro praesentium expedita ab, inventore debitis
              facere illo quibusdam? Explicabo temporibus repellat adipisci.
              Temporibus debitis perspiciatis delectus consequatur inventore
              corporis eaque vel, sint, odio laborum doloremque tempora, sequi
              excepturi. Totam magni natus distinctio suscipit animi fugit
              dolores sit fugiat exercitationem impedit sunt itaque deserunt
              minus, culpa architecto ut eum ex blanditiis id tempora
              aspernatur! Similique corporis veritatis, blanditiis possimus
              distinctio tempore consequuntur est repellat, exercitationem
              mollitia sit earum error libero. Illo velit maxime odit dolores
              enim pariatur sint voluptas, saepe voluptatibus. Eligendi at ipsam
              dignissimos quisquam, animi a. Molestias, iure. Fuga quaerat
              nesciunt consequuntur earum incidunt minima, saepe voluptas, iure
              dolorem recusandae suscipit blanditiis esse obcaecati mollitia non
              dignissimos eligendi eum rem? Dolorem, aut, atque, ex ut obcaecati
              ipsam dolores rerum possimus repellat in neque placeat! Quam eaque
              vitae, expedita aliquam libero corrupti quasi numquam ab maxime
              laboriosam impedit modi quibusdam unde blanditiis error? Odio ab
              cupiditate in mollitia quaerat sunt hic optio doloremque
              praesentium magni id at voluptatum maiores nemo deleniti dolorum
              laborum blanditiis error, obcaecati soluta asperiores quae maxime
              reiciendis itaque? Veritatis eos saepe repellat ea magnam
              consequatur expedita? Eius, reprehenderit eaque amet illum officia
              cumque ab, delectus minus voluptate accusamus enim veritatis modi
              cum autem! Cupiditate, sit. Ab autem repellendus illum ullam.
              Magnam cumque dolorem cupiditate optio vero dolores itaque nobis
              quod omnis. Suscipit dolore natus ab incidunt assumenda eveniet
              quia iusto, deleniti earum doloremque sit molestiae odit qui alias
              nam. Eligendi at omnis quibusdam rem, consequuntur quam esse,
              aliquam maxime ad iste, animi maiores eius deserunt illum
              provident temporibus odit praesentium tenetur porro nulla. Vel
              quibusdam distinctio, quaerat consectetur cum sed. Minima
              recusandae at quis voluptatum omnis aliquid totam. Suscipit
              laborum optio asperiores sed voluptate a eos totam, dolore
              distinctio provident officiis architecto nisi, doloremque fuga
              voluptatem soluta quas repudiandae doloribus id eligendi nam vel.
              Aperiam facere eaque quas, illo esse eum voluptatum nam maiores
              expedita voluptates iure repellat fuga corporis aspernatur magni
              veritatis commodi unde vero ducimus ad ut quam! Sequi eaque vitae
              optio reprehenderit ducimus culpa sint iste vel labore alias ipsa
              quam cum atque consequuntur quia sed accusantium reiciendis nulla
              quis cupiditate, aperiam necessitatibus beatae? Dolorum deserunt
              vel libero autem quis? Minima, esse. Veniam corrupti culpa,
              corporis impedit et qui deserunt!
            </Text>
          </article>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row
            justify="flex-end"
            style={{
              margin: '1.5rem 0rem',
            }}
          >
            <Button
              size="xl"
              color="secondary"
              style={{
                fontSize: '1.9rem',
              }}
            >
              Disagree
            </Button>
            <Spacer x={2} />
            <Button
              size="xl"
              style={{
                fontSize: '1.9rem',
              }}
              onClick={() => {
                setShowNotice(false);
              }}
            >
              Agree
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      ;
    </>
  );
};

export default NoticeCard;
