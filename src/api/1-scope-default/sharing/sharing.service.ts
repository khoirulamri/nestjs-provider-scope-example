import { Injectable } from '@nestjs/common';

@Injectable()
export class SharingService {
  constructor() {
    console.log('== initialize sharing service on scope default ==');
  }

  private x: string;
  setX(x: string) {
    this.x = x;
  }

  getX(): string {
    return this.x;
  }
}
