import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  private savedCards: any[] = [];

  addCard(card: any) {
    this.savedCards.push(card);
  }

  getSavedCards(): any[] {
    return this.savedCards;
  }

  removeCard(index: number) {
    this.savedCards.splice(index, 1);
  }

  clearWishlist() {
    this.savedCards = [];
  }
}
