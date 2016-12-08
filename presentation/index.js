// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  calc: require("../assets/TI83plus.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ECMAHUH?
            </Heading>
            <Heading size={1} fit caps>
              Upcoming Ecmascript features and how we can use them
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text textSize="1em" margin="10px 0px 0px"caps textColor="tertiary">(Created with Spectacle)</Text>
            </Link>
            <Text textSize="1.5em" margin="70px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide align="center center" transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Text bold textSize="5em" caps margin="0 0 50px 0"textColor="tertiary">
              FIRST:
            </Text>
            <Layout>
              <Fit>
                <Text bold textSize="5em" margin="0 0 0 95px" caps textColor="primary">
                  ecma
                </Text>
              </Fit>
              <Fit>
                <Text bold textSize="5em" caps textColor="white">
                  who?
                </Text>
              </Fit>
            </Layout>
            {/*<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>*/}
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                ECMASCRIPT IS...
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} caps  textColor="tertiary">
                the standardized specification of the JavaScript language
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["slide"]}>
            <Appear fid="1">
              <Heading size={2} caps textColor="secondary">
                Maintained by...
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps  textColor="tertiary">
                TC39
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps  textColor="secondary">
                (not a calculator)
              </Heading>
            </Appear>
            <Appear fid="4">
              <Image src={images.calc.replace("/", "")} margin="0px auto 40px" height="293px"/>
            </Appear>
          </Slide>

          <Slide align="center center" transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Text bold textSize="5em" caps margin="0 0 50px 0"textColor="tertiary">
              SECOND:
            </Text>
            <Layout>
              <Fit>
                <Text bold textSize="5em" margin="0 0 0 65px" caps textColor="primary">
                  ecma
                </Text>
              </Fit>
              <Fit>
                <Text bold textSize="5em" caps textColor="white">
                  what?
                </Text>
              </Fit>
            </Layout>
            {/*<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>*/}
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Some ES2015 Features
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} caps  textColor="tertiary">
                (Generally known as ES6)
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            lang="jsx"
            code={require("raw!../assets/variables.code")}
            ranges={[
              { loc: [0, 270], title: 'new variable keywords: "let" and "const"' },
              { loc: [0, 1], title: '"var" matey', note: "Function-scoped, can be reassigned" },
              { loc: [2, 3], title: '"let" there be light', note: "Block-scoped, can be reassigned"},
              { loc: [4, 5], title: 'I "const" stand changing values', note: "Block-scoped, can't be reassigned" },
              // ...
            ]}/>

          <CodeSlide
            transition={["zoom"]}
            lang="jsx"
            code={require("raw!../assets/arrows.code")}
            ranges={[
              { loc: [0, 270], title: 'a new function syntax: arrow functions' },
              { loc: [0, 8], title: 'the old way' },
              { loc: [2, 3], title: '"let" there be light', note: "Block-scoped, can be reassigned"},
              { loc: [4, 5], title: 'I "const" stand changing values', note: "Block-scoped, can't be reassigned" },
              // ...
            ]}/>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
