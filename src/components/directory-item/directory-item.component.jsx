import {
  $DirectoryItemContainer,
  $BackgroundImage,
  $DirectoryItemBody,
  $H2,
  $P,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <$DirectoryItemContainer>
      <$BackgroundImage imageUrl={imageUrl} />
      <$DirectoryItemBody>
        <$H2>{title}</$H2>
        <$P>Shop Now</$P>
      </$DirectoryItemBody>
    </$DirectoryItemContainer>
  );
};

export default DirectoryItem;
