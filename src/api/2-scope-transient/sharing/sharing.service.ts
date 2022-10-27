import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class SharingService {
  constructor() {
    console.log('== initialize sharing service on scope transient ==');
  }

  private x: string;
  setX(x: string) {
    this.x = x;
  }

  getX(): string {
    return this.x;
  }
}
