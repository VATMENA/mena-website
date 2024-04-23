export interface Staff {
  name: string;
  email: string;
  title: string;
  department: string;
  vacant?: boolean;
  reserved?: boolean;
  footerText?: string;
}
