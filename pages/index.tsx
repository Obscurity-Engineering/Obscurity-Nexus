import Logo from '../src/components/Logo/Logo';
import { NextPage } from 'next';

interface Props {
  // Define any props that will be passed to the component
}

const Landing: NextPage<Props> = ({ /* Destructure any props you defined */ }) => {
  return (
    <div>
      <Logo width={100} height={100}></Logo>
      <h1>Welcome!</h1>
      <p>This will look great at some point.</p>
    </div>
  );
};

export default Landing;