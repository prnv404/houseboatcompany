export interface MealMenu {
  label: string;
  items: string;
}

export interface OvernightPackage {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  checkIn: string;
  checkOut: string;
  acDetails: string;
  childPolicy: string;
  menu: MealMenu[];
  otherDetails: string[];
  route: string;
  aboutHouseboat: string;
}

export const overnightPackages: OvernightPackage[] = [
  {
    id: "sharing",
    name: "Sharing Overnight Package",
    tagline:
      "Book a private cabin on a shared houseboat — budget-friendly with all meals included",
    badge: "Budget Friendly",
    badgeColor: "bg-ocean-600",
    checkIn: "1:30 – 2:00 PM",
    checkOut: "8:30 AM",
    acDetails: "9 PM to 6 AM (rooms only). Daytime AC available at ₹2,000 per room extra.",
    childPolicy:
      "Below 5 years complimentary (sharing with parents). Above 5 years charged as extra person.",
    menu: [
      { label: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      {
        label: "Lunch",
        items:
          "Rice, Fish Fry (Karimeen), Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry, Pappad, Pickle, Salad",
      },
      { label: "Evening", items: "Tea / Coffee with Pazhampori" },
      {
        label: "Dinner",
        items: "Rice, Chapathi, Chicken Curry, Dal Curry, Vendakka Mezhukku (Okra Fry)",
      },
      {
        label: "Breakfast",
        items: "Idly, Sambar, Chutney, Tea or Coffee with Sliced Pineapple",
      },
    ],
    otherDetails: [
      "Management is not responsible for late arrivals — check-out time will be followed as per schedule.",
      "You can enjoy privacy in your room, but common areas are shared with other travelers.",
      "Children above 5 years will be counted as an extra person.",
      "Extra food or menu changes must be informed at least 1 day prior.",
      "After 5:30 PM the boat halts near a village area for the night.",
      "Payment is prepaid — full amount to be paid at check-in.",
      "Actual boat may vary for sharing — depends on how many guests are booked on the same date.",
    ],
    route:
      "Starting from Alleppey, visit Punnamada Lake and Vembanad Lake. Cruise through R Block & C Block, Rani, Chithira, Marthandam — man-made paddy fields from the era of kings, where cultivation happens below sea level. Pass through Kainakari and dock near Kuppapuram for the night. Next morning, travel through Pallathuruthy and return to Alleppey.",
    aboutHouseboat:
      "Room with attached clean toilet and comfortable bedroom. Personal chef on board. Day-time cruise through villages and islands, night halt at village area. Music system and experienced 3-member crew (Captain, Cook, Engine Driver) at your service.",
  },
  {
    id: "private",
    name: "Private Overnight Package",
    tagline:
      "The entire boat exclusively for your group — complete privacy with all meals included",
    badge: "Most Popular",
    badgeColor: "bg-ocean-900",
    checkIn: "11:45 AM",
    checkOut: "8:30 AM",
    acDetails:
      "9 PM to 6 AM (rooms only). Full-time AC available at additional cost.",
    childPolicy:
      "Below 5 years complimentary (sharing with parents). Above 5 years charged as extra person.",
    menu: [
      { label: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      {
        label: "Lunch",
        items:
          "Rice, Fish Fry (Karimeen), Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry, Pappad, Pickle, Salad",
      },
      { label: "Evening", items: "Tea / Coffee with Pazhampori" },
      {
        label: "Dinner",
        items: "Rice, Chapathi, Chicken Curry, Dal Curry, Vendakka Mezhukku (Okra Fry)",
      },
      {
        label: "Breakfast",
        items: "Idly, Sambar, Chutney, Tea or Coffee with Sliced Pineapple",
      },
    ],
    otherDetails: [
      "Management is not responsible for late arrivals — check-out time will be followed as per schedule.",
      "The boat is exclusively yours — complete privacy for your group.",
      "Children above 5 years will be counted as an extra person.",
      "Extra food or menu changes must be informed at least 1 day prior.",
      "After 5:30 PM the boat halts near a village area for the night.",
      "Payment is prepaid — full amount to be paid at check-in.",
      "Lunch break is 2 hours — boat will be anchored.",
    ],
    route:
      "Starting from Alleppey, visit Punnamada Lake and Vembanad Lake. Cruise through R Block & C Block, Rani, Chithira, Marthandam — man-made paddy fields from the era of kings, where cultivation happens below sea level. Pass through Kainakari and dock near Kuppapuram for the night. Next morning, travel through Meenapally Kayal, Pallathuruthy and return to Alleppey.",
    aboutHouseboat:
      "Room with attached clean toilet and comfortable bedroom. Personal chef on board. Day-time cruise through villages and islands, night halt at village area. Music system and experienced 3-member crew (Captain, Cook, Engine Driver) at your service.",
  },
];
