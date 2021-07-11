export enum Languages {
  en = "en",
  ro = "ro",
  ru = "ru",
}

export enum MenuType {
  regular = "regular",
  pescetarian = "pescetarian",
  vegetarian = "vegetarian",
  vegan = "vegan",
  other = "other",
}

export interface IGuest {
  isPlusOne?: boolean;
  isComming?: boolean;
  name: string;
  vaccinated: boolean;
  menuType: MenuType;
}

export interface IUser {
  id: string;
  language: Languages;
  greeting: string;
  attending?: boolean;
  confirmed: boolean;
  message?: string;
  guests: IGuest[];
  accommodationNeeded?: boolean;
  accommodationStartDate?: Date;
  accommodationEndDate?: Date;
}
