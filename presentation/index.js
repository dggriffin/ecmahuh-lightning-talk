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
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
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
  calc: require("../assets/TI83plus.png"),
  spongebob: require("../assets/spongebob.jpg"),
  twitter: require("../assets/twitter.png"),
  github: require("../assets/github.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide", "zoom"]} transitionDuration={500}>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ECMAHUH?
            </Heading>
            <Heading size={1} fit caps>
              Upcoming Ecmascript features and how we can use them
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text textSize="1em" margin="10px 0px 0px"caps textColor="tertiary">(Created with Spectacle)</Text>
            </Link>
            <span style={{marginTop: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image margin="0" src={images.twitter.replace("/", "")} height="50px"/>
              <Text margin="0" caps bold>@griffingreyson</Text>
            </span>

            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image margin="0" src={images.github.replace("/", "")} height="50px"/>
              <Text margin="0" caps bold>dggriffin</Text>
            </span>
          </Slide>

          <Slide align="center center" bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
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

          <Slide bgColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              ECMASCRIPT IS...
            </Heading>
            <Appear fid="2">
              <Heading size={4} caps textColor="tertiary">
                the standardized specification of the JavaScript language
              </Heading>
            </Appear>
          </Slide>


          <Slide bgColor="tertiary">
            <Heading size={2} caps textColor="secondary">
              Maintained by...
            </Heading>
            <Appear fid="2">
              <Heading size={1} caps textColor="primary">
                TC39
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps textColor="secondary">
                (not a calculator)
              </Heading>
            </Appear>
            <Appear fid="4">
              <Image src={images.calc.replace("/", "")} margin="0px auto 40px" height="293px"/>
            </Appear>
          </Slide>

          <Slide align="center center" bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
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

          <Slide bgColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              Introducing ES2015
            </Heading>
            <Appear fid="2">
              <Heading size={4} caps  textColor="tertiary">
                (Generally known as ES6)
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary" textColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              ES2015 Features
            </Heading>
            <List>
              <Appear><ListItem bold textColor="primary">"let" and "const" variable keywords</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Arrow functions</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Template literals</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Class syntatic sugar</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Module Import syntax</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Destructuring</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Promises</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">And more...</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={["zoom"]}
            lang="jsx"
            code={require("raw!../assets/variables.code")}
            ranges={[
              { loc: [0, 270], title: '"let" and "const"' },
              { loc: [0, 1], note: "Function-scoped, can be reassigned" },
              { loc: [2, 3], note: "Block-scoped, can be reassigned"},
              { loc: [4, 5], note: "Block-scoped, can't be reassigned" },
            ]}/>

          <CodeSlide
            transition={["zoom"]}
            lang="jsx"
            code={require("raw!../assets/arrows.code")}
            ranges={[
              { loc: [0, 36], title: 'arrow functions' },
              { loc: [0, 4], note: 'using the "function" keyword' },
              { loc: [7, 11], note: 'using an arrow function'},
              { loc: [16, 36], title: 'lexical "this"'},
              { loc: [16, 25], note: 'using the "function" keyword'},
              { loc: [18, 19], note: 'property set on "this"'},
              { loc: [21, 24]},
              { loc: [21, 22], note: '"function" keyword creates new "this"'},
              { loc: [19, 20], note: 'we must store "this" if we want reference to it within other scopes'},
              { loc: [22, 23], note: 'since we stored the outer "this" as "me", we have reference to it'},
              { loc: [28, 36]},
              { loc: [32, 33], note: 'this time, we are using an arrow function'},
              { loc: [33, 34], note: 'arrow functions use the same "this" from their immediate surroundings, so we still have access to age '}
            ]}/>

          <CodeSlide
            transition={["zoom"]}
            lang="js"
            code={require("raw!../assets/template.code")}
            ranges={[
              { loc: [0, 19], title: 'template literals' },
              { loc: [0, 4], note: 'Let\'s define a Person object that takes "name" and "job" properties' },
              { loc: [8, 13], note: 'If we wanted to create a dynamic string with these values, it use to look something like this' },
              { loc: [14, 19], note: 'Now we can use the ${} syntax to make dynamic substitutions more readable.' }
            ]}/>

          <Slide bgColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              Now for ES2016!!!
            </Heading>
            <Appear fid="2">
              <Heading size={4} caps  textColor="tertiary">
                (Generally known as ES7)
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary" textColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              ES2016 Features
            </Heading>
            <Appear><Image fit src={images.spongebob.replace("/", "")} margin="50px 0 0 0" height="293px"/></Appear>
          </Slide>

          <Slide bgColor="tertiary" textColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              But really...
            </Heading>
            <List>
              <Appear><ListItem bold textColor="primary">Exponentiation operator</ListItem></Appear>
              <Appear><ListItem bold textColor="primary">Array.prototype.Includes()</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              And finally ES2017
            </Heading>
            <Appear fid="2">
              <Heading size={4} caps  textColor="tertiary">
                (Generally known as ES8)
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="tertiary" textColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              ES2017 Features
            </Heading>
            <List>
              <Appear><ListItem bold caps textColor="primary">Confirmed</ListItem></Appear>
              <List margin="0 0 0 100px">
                <Appear><ListItem bold textColor="primary">Async/Await</ListItem></Appear>
                <Appear><ListItem bold textColor="primary">Object.values/Object.entries</ListItem></Appear>
                <Appear><ListItem bold textColor="primary">Trailing commas in function param list</ListItem></Appear>
                <Appear><ListItem bold textColor="primary">String Padding</ListItem></Appear>
                <Appear><ListItem bold textColor="primary">And more...</ListItem></Appear>
              </List>
            </List>
            <List>
              <Appear><ListItem bold caps textColor="primary">Potential</ListItem></Appear>
              <List margin="0 0 0 100px">
                <Appear><ListItem bold textColor="primary">8+ proposals in Stage 3</ListItem></Appear>
              </List>
            </List>
          </Slide>

          <Slide align="center center" bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Text bold textSize="5em" caps margin="0 0 50px 0"textColor="tertiary">
              THIRD:
            </Text>
            <Layout>
              <Fit>
                <Text bold textSize="5em" margin="0 0 0 95px" caps textColor="primary">
                  ecma
                </Text>
              </Fit>
              <Fit>
                <Text bold textSize="5em" caps textColor="white">
                  how?
                </Text>
              </Fit>
            </Layout>
            {/*<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>*/}
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps fit textColor="secondary">
              Babeljs
            </Heading>
            <Appear fid="2">
              <Heading margin="35px 0 0 0" size={4} caps  textColor="tertiary">
                Compiles next-generation JavaScript into browser-safe ES5.
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Thanks!
            </Heading>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Useful Links
            </Heading>
            <Link href="https://babeljs.io/">
              <Text bold textSize="2em" margin="20px 0px 0px"caps textColor="black">BabelJs</Text>
            </Link>
            <Link href="https://github.com/tc39/proposals/blob/master/README.md">
              <Text bold textSize="2em" margin="20px 0px 0px"caps textColor="black">Active TC39 Proposals</Text>
            </Link>
            <Link href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">
              <Text bold textSize="2em" margin="20px 0px 0px"caps textColor="black">Complete TC39 Proposals</Text>
            </Link>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold textSize="2em" margin="20px 0px 0px"caps textColor="black">Spectacle Slides</Text>
            </Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
