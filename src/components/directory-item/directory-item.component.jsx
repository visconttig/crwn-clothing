import {
  $DirectoryItemContainer,
  $BackgroundImage,
  $DirectoryItemBody,
  $H2,
  $P,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <$DirectoryItemContainer route={route} onClick={onNavigateHandler}>
      <$BackgroundImage imageUrl={imageUrl} />
      <$DirectoryItemBody>
        <$H2>{title}</$H2>
        <$P>Shop Now</$P>
      </$DirectoryItemBody>
    </$DirectoryItemContainer>
  );
};

export default DirectoryItem;
