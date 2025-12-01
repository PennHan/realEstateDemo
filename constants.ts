import { UserData } from './types';

export const MOCK_USER_DATA: UserData = {
  username: "亚历山大先生",
  registrationDate: "2018-05-12",
  totalDays: 2045,
  totalPoints: 12580,
  pointsSource: ["物业费缴纳", "会所活动", "推荐奖励"],
  totalSpend: 845000, // Currency unit handled in component
  itemCount: 42,
  categories: [
    { name: "物业维护", value: 30000 },
    { name: "礼宾服务", value: 15000 },
    { name: "装修升级", value: 450000 },
    { name: "会所消费", value: 25000 },
    { name: "停车服务", value: 50000 },
  ],
  topCategory: "装修升级",
  increasedCategory: "礼宾服务",
  interactions: {
    gameEvents: 12,
    neighborhoodPosts: 45,
    planParticipation: 3, // "Green Living Plan" etc.
  },
  ecosystem: [
    { name: "高端住宅", active: true },
    { name: "物业管理", active: true },
    { name: "购物中心", active: true },
    { name: "豪华酒店", active: true },
    { name: "医疗中心", active: false },
  ],
  records: {
    mostExpensive: { item: "全屋智能系统升级", price: 120000 },
    latestActive: { time: "02:45 AM", activity: "预约礼宾服务" },
  },
  highlights: {
    aiUsage: 85,
    newFeatures: ["智能通行 2.0", "AI 管家"],
  },
  taste: {
    massAppeal: "会所健身房",
    niche: "私人酒窖咨询",
  },
};