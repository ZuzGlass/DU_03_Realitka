import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Estate } from '../components/Estate/estate.jsx';

const path = window.location.pathname;

const cisloDomu = path.slice(1, 6);

const url = `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${cisloDomu}`;

const response = await fetch(url);
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
   <Header title="Nemovitosti v nabídce" />
   <Estate title={data.title} photo={data.photo} text={data.text} city={data.city} price={data.price} />
  </div>
);
