import { TypeAnimation } from 'react-type-animation';

const TypeText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Technologies',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Skills',
        1000,
        'Technologies',
        1000,
        'Skills',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: 'min(10vw,4em)', display: 'inline-block', color:'black', fontFamily:'mauline'}}
      repeat={Infinity}
    />
  );
};
export default TypeText;