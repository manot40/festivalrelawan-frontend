type City = {
  _id: string;
  name: string;
  parentLocation: string;
};

type Res<T = any> = {
  success: boolean;
  message: string;
  results: T[];
  result: T;
};

type Media = {
  _id: string;
  name: string;
  orphaned: boolean;
  extension: string;
  access_dir: string;
  access_path: string;
};

type Organization = {
  _id: string;
  name: string;
};

type Activity = {
  _id: string;
  type: 'event' | 'webinar';
  title: string;
  media: Media[];
  address: string;
  regency_city: City;
  organization: Organization;
  registration_deadline: 'string';
};

type EventInfo = {
  _id: string;
  events: string;
  created: string;
  activity: Activity;
  published: boolean;
};
