import { CardWrapper, Image, Label, Button } from './Sticker.styled';

export const Sticker = ({ sticker: { id, img, label }, onDelete }) => {
  return (
    <CardWrapper>
      <Image src={img} alt={label} />
      <Label>{label}</Label>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </CardWrapper>
  );
};