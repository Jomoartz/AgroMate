import { UserMetadata, UserInfo } from 'firebase/auth';

interface UserData {
  name?: string;
  uid: string;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  providerData: UserInfo[];
}

export type { UserData };
