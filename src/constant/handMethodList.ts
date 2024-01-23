import { IFHand } from '../interface/IFHand';

export const handMethodList: IFHand[] = [
  {
    name: 'hour',
    $widthPixel: 5,
    $heightRatio: 0.25,
    $color: '#000000',
    getAngle: (time: Date) => {
      const hour = time.getHours();
      const minute = time.getMinutes();
      return (hour * 30) + (minute * 0.5);
    }
  },
  {
    name: 'minute',
    $widthPixel: 3,
    $heightRatio: 0.35,
    $color: '#333333',
    getAngle: (time: Date) => {
      const minute = time.getMinutes();
      const second = time.getSeconds();
      return (minute * 6) + (second * 0.1);
    }
  },
  {
    name: 'second',
    $widthPixel: 1,
    $heightRatio: 0.4,
    $color: '#ff0000',
    getAngle: (time: Date) => {
      const second = time.getSeconds();
      const millisecond = time.getMilliseconds();
      return second * 6 + millisecond * 0.006;
    }
  }
]