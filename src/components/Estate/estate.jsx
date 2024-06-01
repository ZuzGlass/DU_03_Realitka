export const Estate = (props) => {
    return (
      <>
        <div>
          <h2>{props.title}</h2>
          <img src={props.photo} alt={props.title} />
          <p>{props.text}</p>
          <p>{props.city}</p>
          <p>Cena: {props.price} Kč</p>
        </div>
      </>
    );
  }