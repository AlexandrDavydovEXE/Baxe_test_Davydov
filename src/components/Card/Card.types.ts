export type ImagePaths = {
  goldFoilPath: string | undefined;
  paperPatternPath: string | undefined;
  arrowPatternPath: string | undefined;
};

export type CardProps = {
  id: number;
  action?: () => void;
  amount?: number;
  name: string;
  title?: string;
};
