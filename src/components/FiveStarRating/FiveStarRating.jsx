import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";
import s from "./style.module.css";
export function FiveStarRating({ rating }) {
  //declarer un tableau d'etoiles vide
  const starList = [];

  //stocker dans une varible le nombre d'etoiles pleines
  const StarFillCount = Math.floor(rating);

  const hasStarHalf = rating - StarFillCount >= 0.5;
  //stocker dans variable si oui ou non il y a une demi etoile
  const emptyStarCount = 5 - StarFillCount - (hasStarHalf ? 1 : 0);
  //stocker dans une variable le nombre d'etoiles vides

  //pusher dans le table les etoiles pleines
  for (let i = 0; i < StarFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  //pusher dans le table la demi etoile s'il y en a une
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  //pusher dans le table les etoiles vides

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  //retourner le tableau d'etoiles
  return <div className={s.title}>{starList}</div>;
}
