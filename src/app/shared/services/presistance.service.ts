import { Injectable } from '@angular/core';

@Injectable()
export class PresistanceService {
  public set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    try {
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  public get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  constructor() {}
}
