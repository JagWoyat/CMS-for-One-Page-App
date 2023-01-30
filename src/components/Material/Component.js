import Contact from './Contact/Contact';
import Description from './Description/Description';
import Main from './Main/Main';

export default function Component({ data }) {
  return (
    <>
      <div>
        {data.type === 'Type1' && <Main data={data} />}
        {data.type === 'Type2' && <Description data={data} />}
        {data.type === 'Type3' && <Contact />}
      </div>
    </>
  );
}
