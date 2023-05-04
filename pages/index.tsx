import { Header } from '../src/components/Header/Header';
import { NextPage } from 'next';

interface Props {
  // Define any props that will be passed to the component
}

const Landing: NextPage<Props> = ({ /* Destructure any props you defined */ }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>Welcome!</h1>
      <p>This will look great at some point.</p>
    </div>
  );
};

export default Landing;