
export interface User {
    id: number;
    name: string;
    email: string;
  }
  export interface Contact {
    id: number;
    userId: number;
    contactId: number;
    createdAt: string;
    updatedAt: string;
    User: User; 
  }