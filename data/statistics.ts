export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statistics: Statistic[] = [
  {
    id: "events-covered",
    value: 100,
    suffix: "+",
    label: "Events Covered",
    description: "Flawlessly filmed, streamed, and managed globally."
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Consistent 5-star ratings and repeat clients."
  },
  {
    id: "experience",
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Leading the industry in premium media solutions."
  },
  {
    id: "support",
    value: 24,
    suffix: "/7",
    label: "Support Availability",
    description: "Dedicated assistance for your event's peace of mind."
  }
];
