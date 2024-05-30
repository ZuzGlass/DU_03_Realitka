import './header.css';

export const Header = (props) => {
  return (
    <>
      <header>
      <h1 className="site-title">{props.title}</h1>
      <nav>
       <a href="/dum01.html">Dům 1</a>
       <a href="/dum02.html">Dům 2</a>
       <a href="/dum03.html">Dům 3</a>
       <a href="/dum04.html">Dům 4</a>
      </nav>
      </header> 
    </>
  )
  };