export interface IFHand {
  name: string;
  $widthPixel: number;
  $heightRatio: number;
  $color: string;
  getAngle: (time: Date) => number;
}