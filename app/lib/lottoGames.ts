const gamesPath = '../../assets/LottoGames/';

export const lottoGames = [
  {
    id: 1,
    label: 'Ultra Lotto 6/58',
    imageSource: require(gamesPath + '6-58.png'),
    max: 58,
    shortName: '6/58',
  },
  {
    id: 2,
    label: 'Grand Lotto 6/55',
    imageSource: require(gamesPath + '6-55.png'),
    max: 55,
    shortName: '6/55',
  },
  {
    id: 3,
    label: 'Super Lotto 6/49',
    imageSource: require(gamesPath + '6-49.png'),
    max: 49,
    shortName: '6/49',
  },
  {
    id: 4,
    label: 'Mega Lotto 6/45',
    imageSource: require(gamesPath + '6-45.png'),
    max: 45,
    shortName: '6/45',
  },
  {
    id: 5,
    label: 'Lotto 6/42',
    imageSource: require(gamesPath + '6-42.png'),
    max: 42,
    shortName: '6/42',
  },
];

export function randomPick(gameId: number): number[] {
  const randomNumbers: number[] = [];
  const max = lottoGames.filter((x) => x.id === gameId)[0].max;

  while (randomNumbers.length !== 6) {
    const ranNumber = Math.floor(Math.random() * max + 1);
    if (!randomNumbers.includes(ranNumber)) randomNumbers.push(ranNumber);
  }

  return randomNumbers;
}
