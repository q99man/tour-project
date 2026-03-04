export type Destination = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
};

export const DESTINATIONS: Destination[] = [
  // Culture & Heritage (5)
  {
    id: '01',
    title: 'Kyoto Old Town',
    subtitle: 'Japan',
    category: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1800&auto=format&fit=crop',
    description:
      '전통 목조 가옥과 골목길 사이로 저녁 노을이 비치는 교토의 구시가지를 천천히 걸어보세요.',
  },
  {
    id: '02',
    title: 'Gion Night Walk',
    subtitle: 'Japan',
    category: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1800&auto=format&fit=crop',
    description:
      '종소리와 발걸음 소리만 들리는 한적한 기온 거리를 산책하며, 고즈넉한 일본의 밤을 느낍니다.',
  },
  {
    id: '03',
    title: 'Fushimi Inari Trail',
    subtitle: 'Japan',
    category: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1800&auto=format&fit=crop',
    description: '붉은 토리이 사이를 통과하며 천천히 산길을 오르면, 도시와는 다른 고요함이 펼쳐집니다.',
  },
  {
    id: '04',
    title: 'Kyoto Temple Circuit',
    subtitle: 'Japan',
    category: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1800&auto=format&fit=crop',
    description: '수백 년 된 사찰을 잇는 작은 길들을 따라가며, 시간의 켜를 따라 걷는 경험을 해보세요.',
  },
  {
    id: '05',
    title: 'Philosopher’s Path',
    subtitle: 'Japan',
    category: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1503891450243-d8f4aa587d15?q=80&w=1800&auto=format&fit=crop',
    description: '벚꽃이 흩날리는 수로 옆 산책로에서, 조용히 사색에 잠기기 좋은 코스를 제공합니다.',
  },

  // Alpine Nature (5)
  {
    id: '06',
    title: 'Dolomites Sunrise',
    subtitle: 'Italy',
    category: 'Alpine Nature',
    image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1800&auto=format&fit=crop',
    description: '붉게 물드는 석회암 봉우리들 사이로 아침 햇살이 스며드는 순간을 마주합니다.',
  },
  {
    id: '07',
    title: 'Lakeside Hike',
    subtitle: 'Italy',
    category: 'Alpine Nature',
    image: 'https://images.unsplash.com/photo-1534448311378-1e193fb2570e?q=80&w=1800&auto=format&fit=crop',
    description: '에메랄드빛 호수를 따라 걷다 보면, 산과 물이 맞닿는 장엄한 풍경이 펼쳐집니다.',
  },
  {
    id: '08',
    title: 'Ridge Line Trail',
    subtitle: 'Italy',
    category: 'Alpine Nature',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1800&auto=format&fit=crop',
    description: '날렵한 능선을 따라 걷는 트레일에서, 알프스의 거대한 스케일을 온몸으로 느껴보세요.',
  },
  {
    id: '09',
    title: 'Mountain Hut Stay',
    subtitle: 'Italy',
    category: 'Alpine Nature',
    image: 'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5c5?q=80&w=1800&auto=format&fit=crop',
    description: '별빛 아래 산장에 머물며, 도시의 소음을 완전히 잊고 자연의 소리에 집중합니다.',
  },
  {
    id: '10',
    title: 'Dolomites Scenic Drive',
    subtitle: 'Italy',
    category: 'Alpine Nature',
    image: 'https://images.unsplash.com/photo-1508261306211-0a5e94c90c79?q=80&w=1800&auto=format&fit=crop',
    description: '굽이치는 산길을 따라 드라이브하며, 창밖으로 이어지는 파노라마 뷰를 감상합니다.',
  },

  // Sensory Journey (5)
  {
    id: '11',
    title: 'Marrakech Medina',
    subtitle: 'Morocco',
    category: 'Sensory Journey',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
    description: '미로 같은 메디나를 걸으며, 현지 상점과 시장의 다채로운 색감과 향기를 느껴보세요.',
  },
  {
    id: '12',
    title: 'Spice Market Morning',
    subtitle: 'Morocco',
    category: 'Sensory Journey',
    image: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=1800&auto=format&fit=crop',
    description: '강렬한 향신료와 과일 향이 뒤섞인 새벽 시장에서 감각이 또렷이 깨어납니다.',
  },
  {
    id: '13',
    title: 'Riad Courtyard',
    subtitle: 'Morocco',
    category: 'Sensory Journey',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1800&auto=format&fit=crop',
    description: '타일과 분수, 식물이 어우러진 리야드의 중정을 바라보며 느긋한 휴식을 취해보세요.',
  },
  {
    id: '14',
    title: 'Desert Evening',
    subtitle: 'Morocco',
    category: 'Sensory Journey',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop',
    description: '해가 떨어진 사막의 공기 속에서, 낮과는 전혀 다른 고요함을 경험합니다.',
  },
  {
    id: '15',
    title: 'Marrakech Rooftop',
    subtitle: 'Morocco',
    category: 'Sensory Journey',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop',
    description: '루프톱에서 도시의 야경과 분주한 소음을 내려다보며, 하루를 정리해보세요.',
  },

  // Winter Escape (5)
  {
    id: '16',
    title: 'Zermatt Village',
    subtitle: 'Switzerland',
    category: 'Winter Escape',
    image: 'https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=1800&auto=format&fit=crop',
    description: '눈으로 덮인 마을 골목을 따라 걷다 보면, 창가마다 은은한 조명이 겨울밤을 비춥니다.',
  },
  {
    id: '17',
    title: 'Matterhorn Viewpoint',
    subtitle: 'Switzerland',
    category: 'Winter Escape',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db511aa?q=80&w=1800&auto=format&fit=crop',
    description: '마터호른이 한눈에 내려다보이는 뷰포인트에서, 압도적인 실루엣을 감상합니다.',
  },
  {
    id: '18',
    title: 'Ski & Slow Coffee',
    subtitle: 'Switzerland',
    category: 'Winter Escape',
    image: 'https://images.unsplash.com/photo-1514239062904-04302de8e9f8?q=80&w=1800&auto=format&fit=crop',
    description: '눈밭 위를 가르는 스키 후, 따뜻한 커피 한 잔과 함께 몸을 녹입니다.',
  },
  {
    id: '19',
    title: 'Snowfield Walk',
    subtitle: 'Switzerland',
    category: 'Winter Escape',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1800&auto=format&fit=crop',
    description: '발자국만 남는 설원을 천천히 걸으며, 세상이 고요해지는 순간을 만납니다.',
  },
  {
    id: '20',
    title: 'Winter Night Light',
    subtitle: 'Switzerland',
    category: 'Winter Escape',
    image: 'https://images.unsplash.com/photo-1513885535751-8c912edca61a?q=80&w=1800&auto=format&fit=crop',
    description: '별빛과 마을의 따뜻한 조명이 뒤섞인 겨울밤 풍경 속에서, 하루를 마무리합니다.',
  },

  // Ocean View (5)
  {
    id: '21',
    title: 'Santorini Cliff View',
    subtitle: 'Greece',
    category: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1800&auto=format&fit=crop',
    description: '절벽 위 하얀 마을과 짙푸른 바다가 만들어내는 강렬한 대비를 감상해보세요.',
  },
  {
    id: '22',
    title: 'Caldera Sunset',
    subtitle: 'Greece',
    category: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1513885535751-8b923b0fd7c1?q=80&w=1800&auto=format&fit=crop',
    description: '칼데라를 붉게 물들이는 석양 아래, 느긋한 시간의 흐름을 느껴봅니다.',
  },
  {
    id: '23',
    title: 'Hidden Beach',
    subtitle: 'Greece',
    category: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop',
    description: '조용한 작은 해변에서 파도 소리와 바람 소리에만 집중하는 시간을 가져보세요.',
  },
  {
    id: '24',
    title: 'Blue Dome Walk',
    subtitle: 'Greece',
    category: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1800&auto=format&fit=crop',
    description: '푸른 돔과 골목길을 따라 걸으며, 엽서 같은 풍경 속을 직접 걸어다닙니다.',
  },
  {
    id: '25',
    title: 'Santorini Night View',
    subtitle: 'Greece',
    category: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168aa11?q=80&w=1800&auto=format&fit=crop',
    description: '불빛이 켜진 절벽 마을 야경을 바라보며, 지중해의 밤을 만끽합니다.',
  },

  // Urban Explore (5)
  {
    id: '26',
    title: 'Kyiv Old Streets',
    subtitle: 'Ukraine',
    category: 'Urban Explore',
    image: 'https://images.unsplash.com/photo-1582719478250-cc67cbd5025b?q=80&w=1800&auto=format&fit=crop',
    description: '과거와 현재가 교차하는 오래된 골목을 걸으며 도시의 레이어를 읽어봅니다.',
  },
  {
    id: '27',
    title: 'River Promenade',
    subtitle: 'Ukraine',
    category: 'Urban Explore',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1800&auto=format&fit=crop',
    description: '강변 산책로에서 여유롭게 도시의 흐름을 바라보는 시간을 보냅니다.',
  },
  {
    id: '28',
    title: 'Hidden Courtyard',
    subtitle: 'Ukraine',
    category: 'Urban Explore',
    image: 'https://images.unsplash.com/photo-1513639725746-c5d3e861f32a?q=80&w=1800&auto=format&fit=crop',
    description: '골목 끝 작은 중정에서, 주민들이 만들어가는 일상의 풍경을 엿봅니다.',
  },
  {
    id: '29',
    title: 'Street Art Route',
    subtitle: 'Ukraine',
    category: 'Urban Explore',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1800&auto=format&fit=crop',
    description: '벽화를 따라 걷는 루트를 통해, 도시 속 새로운 예술을 발견합니다.',
  },
  {
    id: '30',
    title: 'Kyiv Night Lights',
    subtitle: 'Ukraine',
    category: 'Urban Explore',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1800&auto=format&fit=crop',
    description: '화려한 조명 아래 또 다른 얼굴을 드러내는 도시의 밤을 체험합니다.',
  },

  // Aurora & Ice (5)
  {
    id: '31',
    title: 'Reykjavik Coast',
    subtitle: 'Iceland',
    category: 'Aurora & Ice',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop',
    description: '검은 모래 해변과 차가운 바다, 머리 위로 펼쳐지는 오로라가 어우러진 풍경입니다.',
  },
  {
    id: '32',
    title: 'Northern Lights Hunt',
    subtitle: 'Iceland',
    category: 'Aurora & Ice',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1800&auto=format&fit=crop',
    description: '빛의 커튼처럼 춤추는 오로라를 찾아, 도시의 불빛에서 한참 떨어진 곳으로 떠납니다.',
  },
  {
    id: '33',
    title: 'Glacier Walk',
    subtitle: 'Iceland',
    category: 'Aurora & Ice',
    image: 'https://images.unsplash.com/photo-1508261306211-45a1c5c2a5cf?q=80&w=1800&auto=format&fit=crop',
    description: '거대한 빙하 위를 걷는 독특한 경험으로, 지구의 숨결을 가까이에서 느껴보세요.',
  },
  {
    id: '34',
    title: 'Ice Cave Tour',
    subtitle: 'Iceland',
    category: 'Aurora & Ice',
    image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?q=80&w=1800&auto=format&fit=crop',
    description: '푸른 얼음 동굴 안으로 걸어 들어가, 자연이 만든 추상적인 패턴을 감상합니다.',
  },
  {
    id: '35',
    title: 'Thermal Lagoon',
    subtitle: 'Iceland',
    category: 'Aurora & Ice',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop',
    description: '차가운 공기와 따뜻한 온천수의 대비 속에서, 몸과 마음을 동시에 녹여보세요.',
  },

  // Romantic City (5)
  {
    id: '36',
    title: 'Paris Riverside',
    subtitle: 'France',
    category: 'Romantic City',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop',
    description: '센 강변을 따라 천천히 걸으며, 도시의 낭만적인 공기를 온전히 느껴보세요.',
  },
  {
    id: '37',
    title: 'Eiffel Sunset',
    subtitle: 'France',
    category: 'Romantic City',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1800&auto=format&fit=crop',
    description: '노을 속 에펠탑을 바라보며, 하루 중 가장 서정적인 순간을 맞이합니다.',
  },
  {
    id: '38',
    title: 'Montmartre Streets',
    subtitle: 'France',
    category: 'Romantic City',
    image: 'https://images.unsplash.com/photo-1543342386-1e77a9b3a4f7?q=80&w=1800&auto=format&fit=crop',
    description: '작은 카페와 갤러리가 이어지는 언덕 마을에서, 예술가들의 숨결을 느껴보세요.',
  },
  {
    id: '39',
    title: 'Night Bridge Lights',
    subtitle: 'France',
    category: 'Romantic City',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1800&auto=format&fit=crop',
    description: '다리 위에서 내려다보는 도시의 불빛이, 밤의 파리를 더욱 로맨틱하게 만듭니다.',
  },
  {
    id: '40',
    title: 'Parisian Café Time',
    subtitle: 'France',
    category: 'Romantic City',
    image: 'https://images.unsplash.com/photo-1504867915322-258a6c55b9f1?q=80&w=1800&auto=format&fit=crop',
    description: '노천 카페에 앉아 느긋하게 사람 구경을 하며 파리의 일상을 함께 합니다.',
  },

  // Metropolitan (5)
  {
    id: '41',
    title: 'New York Skyline',
    subtitle: 'USA',
    category: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1800&auto=format&fit=crop',
    description: '맨해튼 스카이라인을 한눈에 내려다보며, 잠들지 않는 도시의 에너지를 느껴보세요.',
  },
  {
    id: '42',
    title: 'Times Square Lights',
    subtitle: 'USA',
    category: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ef?q=80&w=1800&auto=format&fit=crop',
    description: '눈부신 네온사인과 사람들로 가득한 타임스퀘어에서, 도시의 리듬을 온몸으로 느낍니다.',
  },
  {
    id: '43',
    title: 'Central Park Stroll',
    subtitle: 'USA',
    category: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=1800&auto=format&fit=crop',
    description: '빌딩 숲 사이에 자리한 거대한 공원을 거닐며, 도심 속의 여백을 경험합니다.',
  },
  {
    id: '44',
    title: 'Brooklyn Bridge Walk',
    subtitle: 'USA',
    category: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1516900287631-76cbb332bf02?q=80&w=1800&auto=format&fit=crop',
    description: '브루클린 브리지를 천천히 걸으며, 도시를 잇는 선 위에서 영화 같은 장면을 만납니다.',
  },
  {
    id: '45',
    title: 'Rooftop Bar Night',
    subtitle: 'USA',
    category: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1500534314211-0a24cd03ff19?q=80&w=1800&auto=format&fit=crop',
    description: '도시의 불빛을 배경으로 루프톱 바에서 여유로운 밤 시간을 보냅니다.',
  },
];

export function getRandomCategoryThumbnail(category: string): string | null {
  const items = DESTINATIONS.filter((d) => d.category === category);
  if (items.length === 0) return null;
  const index = Math.floor(Math.random() * items.length);
  return items[index].image;
}
