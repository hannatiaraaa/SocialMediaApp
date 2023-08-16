import React, {useState} from 'react';
import {FlatList} from 'react-native';

// components
import {Post} from './components/Post';
import {IPostItem} from 'shared/types/dummyData';

type Props = {
  data: IPostItem[];
};

const FeedList = ({data}: Props) => {
  const [photoRatios, setPhotoRatios] = useState<number[]>([]);

  const handlePhotoLoad = (index: number, width: number, height: number) => {
    const updatedData = [...photoRatios];
    updatedData[index] = width / height;
    setPhotoRatios(updatedData);
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      bounces={false}
      data={data}
      keyExtractor={item => item.name}
      renderItem={({item, index}) => {
        const postItem = {
          ...item,
          randomNumber:
            Math.random() *
            Math.pow(10, index > 7 ? data.length - index : index + 1),
          photoRatio: photoRatios[index],
        };

        return Post({
          postItem,
          onPhotoLoad: (width: number, height: number) =>
            handlePhotoLoad(index, width, height),
        });
      }}
    />
  );
};

export default FeedList;
