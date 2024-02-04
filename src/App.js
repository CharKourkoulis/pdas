import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <frameElement>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Personal Digital Assistants</p>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa blah blah blah"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana99"
                image={CortanaImage}
                description="Cortana blah blah blah"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri99"
                image={SiriImage}
                description="Siri blah blah blah"
              />
            </div>
          </div>
        </section>
      </div>
    </frameElement>
  );
};

export default App;
