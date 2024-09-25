export type Recipe = {
  createdAt: Date;
  id: string;
  ingredients: string | null;
  name: string | null;
  output: string | null;
  updatedAt: Date;
};
