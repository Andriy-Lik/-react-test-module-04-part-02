import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
import initialStickers from '../stickers.json';

const getInitialStickers = () => {
  const savedStickers = localStorage.getItem('stickers');
  if (savedStickers !== null) {
    const parsedStickers = JSON.parse(savedStickers);
    return parsedStickers;
  } else {
    return initialStickers;
  }
};

export const AppStickers = () => {
  const [stickers, setStickers] = useState(getInitialStickers);

  const addSticker = (img, label) => {
    setStickers(pS => [...pS, { id: nanoid(), img, label },
    ]);
  };

  const deleteSticker = stickerId => {
    setStickers(pS => pS.filter(sticker => sticker.id !== stickerId));
  };

  // useEffect(() => {
  //   const savedStickers = localStorage.getItem('stickers');
  //   if (savedStickers !== null) {
  //     const parsedStickers = JSON.parse(savedStickers);
  //     setStickers(parsedStickers);
  //   } else {
  //     setStickers(initialStickers);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('stickers', JSON.stringify(stickers));
  }, [stickers]);

  return (
    <Layout>
      <StickerForm onSubmit={addSticker} />
      <StickerList items={stickers} onDelete={deleteSticker} />
    </Layout>
  );
}