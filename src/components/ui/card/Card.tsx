"use client";

import React, { useState } from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import ethereum from "@/assets/Images/ethereum.svg";
import lightstar from "@/assets/Images/lightstar.svg";
import darkstar from "@/assets/Images/darkstar.svg";
import { FaHeart } from "react-icons/fa";

export interface CardItem {
  id: string | number;
  image: string;
  title: string;
  category: string;
  rating: number;
  price: number;
}

interface CardProps {
  el: CardItem[];
}

const Card = ({ el }: CardProps) => {
  const [liked, setLiked] = useState<Record<number | string, boolean>>({});

  const toggleLike = (id: number | string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.cardsContainer}>
      {el.map((el) => (
        <div key={el.id} className={styles.cardId}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image src={el.image} alt={el.title} width={400} height={100} />
            </div>
            <div className={styles.cardTitle}>
              <h1>{el.title}</h1>
              <div className={styles.title}>
                <Image src={ethereum} alt="ethereum" width={16} height={16} />
                <h2>{el.price}</h2>
              </div>
            </div>
            <div className={styles.cardFooter}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={i < el.rating ? lightstar : darkstar}
                  alt="star"
                  width={18}
                  height={18}
                />
              ))}
            </div>
            <div
              className={styles.cardFavotite}
              onClick={() => toggleLike(el.id)}
            >
              <FaHeart
                className={styles.heart}
                style={{
                  color: liked[el.id]
                    ? "rgb(255, 90, 0)"
                    : "rgba(255, 255, 255, 0.66)",
                  cursor: "pointer",
                }}
              />
            </div>
            <button className={styles.cardButton}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
