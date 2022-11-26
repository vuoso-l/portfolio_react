import { CardBorder } from "../stylesComponents/BasicTagsStyle";

const ExperienceComponent = ({ h5, h6, p1, p2 }) => {
  return (
    <CardBorder>
      <h5>{h5}</h5>
      <h6>{h6}</h6>
      <p>{p1}</p>
      <p>{p2}</p>
    </CardBorder>
  );
};

export default ExperienceComponent;
