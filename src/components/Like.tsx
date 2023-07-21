import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../stlyes/Like.module.css";
import { useState } from "react";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    console.log("clicked");
    onClick();
  };
  if (liked)
    return (
      <AiFillHeart
        className={styles.button}
        onClick={toggle}
      ></AiFillHeart>
    );
  return <AiOutlineHeart className={styles.button} onClick={toggle} />;
};

export default Like;
