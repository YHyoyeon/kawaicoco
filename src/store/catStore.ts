import { atom } from 'jotai';
import diaryData from '../../diaries/1.json';

export interface CatInfo {
  name: string;
  breed: string;
  age: number;
  weight: number;
  personality: string[];
  favoriteFood: string[];
  photo: string;
}

export interface CatDiary {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: 'happy' | 'sleepy' | 'playful' | 'hungry' | 'grumpy';
  activities: string[];
  photo: string;
}

function getAge(birthday: string) {
  const today = new Date();
  const birthDate = new Date(birthday);
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

export const catInfoAtom = atom<CatInfo>({
  name: '코코',
  breed: '코리안 숏헤어',
  age: getAge('2020-06-25'),
  weight: 4.8,
  personality: ['귀여움', '장난감좋아', '오동통', '따끈함'],
  favoriteFood: ['참치', '연어', '닭고기', '캣닢', '장난감', '잠옷으로 만든 해먹'],
  photo: '/coco_5.png'
});

// JSON 파일에서 다이어리 데이터를 가져와서 타입에 맞게 변환
const diaries: CatDiary[] = [
  diaryData as CatDiary
];

export const catDiariesAtom = atom<CatDiary[]>(diaries);

export const addDiaryAtom = atom(
  null,
  (get, set, newDiary: Omit<CatDiary, 'id'>) => {
    const diaries = get(catDiariesAtom);
    const newDiaryWithId = {
      ...newDiary,
      id: Date.now().toString()
    };
    set(catDiariesAtom, [newDiaryWithId, ...diaries]);
  }
);
