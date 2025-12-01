export interface UserData {
  username: string;
  registrationDate: string;
  totalDays: number;
  totalPoints: number;
  pointsSource: string[];
  totalSpend: number;
  itemCount: number;
  categories: { name: string; value: number }[];
  topCategory: string;
  increasedCategory: string;
  interactions: {
    gameEvents: number;
    neighborhoodPosts: number;
    planParticipation: number;
  };
  ecosystem: { name: string; active: boolean }[];
  records: {
    mostExpensive: { item: string; price: number };
    latestActive: { time: string; activity: string };
  };
  highlights: {
    aiUsage: number;
    newFeatures: string[];
  };
  taste: {
    massAppeal: string;
    niche: string;
  };
}

export enum SlideDirection {
  UP = 1,
  DOWN = -1,
  NONE = 0
}