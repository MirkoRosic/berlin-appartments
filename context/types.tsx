import type { ImageType, Location } from './context';

type Amenity = {
  icon: string;
  name: string;
};

type Space = {
  icon: string;
  name: string;
  name_plural: string;
  slug: string;
  value: number;
};

type UnitGroupDetails = {
  amenities: Amenity[];
  bedroom_count: number;
  custom_title: string | undefined;
  description: string;
  external_id: string;
  id: number;
  images: ImageType[];
  lowest_price_per_month: string | null;
  lowest_price_per_night: string | null;
  max_guests: 10;
  name: string;
  rental_type: string;
  spaces: Space[];
  title: string;
};

export interface AppartmentDetails {
  additional_services: string | null;
  city: string;
  city_id: 32;
  default_check_in_time: string;
  default_check_out_time: string;
  description: string;
  distance: number;
  external_id: string;
  house_rules: string;
  id: number;
  location: Location;
  images: ImageType[];
  lowest_price_per_month: string | null;
  lowest_price_per_night: string | null;
  name: string;
  parking: string;
  review_widget_id: string;
  street: string;
  things_to_know: string;
  unit_groups: UnitGroupDetails[];
}

export type Response<T> = {
  message: string;
  success: boolean;
  payload?: T;
};
