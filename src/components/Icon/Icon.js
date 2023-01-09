import './Icon.css';

export default function Icon({ icon }) {
  return <button className="IconButton" style={{ backgroundImage: `url(${icon})` }} />;
}
