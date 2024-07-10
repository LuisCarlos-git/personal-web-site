import AnimatedCursor from 'react-animated-cursor';

export function Cursor() {
  return (
    <AnimatedCursor
      innerStyle={{
        background: '#7E8285',
      }}
      outerSize={40}
      outerScale={1.2}
      outerStyle={{
        background: 'none',
        border: '2px solid #7E8285',
      }}
    />
  );
}
