import { PropTypes } from "prop-types";
import Image from "next/image";

export default function CardTypeImage(props) {
  const { cardNumber } = props;
  const isVisaCard = cardNumber?.startsWith(4);
  const isMasterCard = cardNumber?.startsWith(5);

  if (!(isVisaCard || isMasterCard)) return <div></div>;

  return (
    <Image
      alt={isVisaCard ? "Visa" : "MasterCard"}
      src={isVisaCard ? "/assets/visa.png" : "/assets/master_card.png"}
      width={45}
      height={30}
      {...props}
      className={props.className + "CardTypeImage"}
    />
  );
}

CardTypeImage.propTypes = {
  className: PropTypes.string,
  cardNumber: PropTypes.string,
};

CardTypeImage.displayName = "CardTypeImage";
