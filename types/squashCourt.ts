export interface SquashCourt {
  id: string;
  name: string;
  region: string;
  facilities: {
    courts: {
      type: string;
      count: number;
      description?: string;
    }[];
    location: string;
    amenities: string[];
  };
  hours: {
    weekday: string;
    saturday: string;
    holiday: string;
  };
  pricing: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  closedDays: string[];
  contact: {
    address: string;
    phone: string;
  };
} 