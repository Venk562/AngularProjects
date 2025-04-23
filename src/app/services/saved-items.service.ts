import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RecommendedItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  route: string;
}

@Injectable({
  providedIn: 'root'
})

export class SavedItemsService {
  // getSavedCards() {
  //   throw new Error('Method not implemented.');
  // }

  // private savedItems: RecommendedItem[] = [];
  // private savedItemsSubject = new BehaviorSubject<RecommendedItem[]>([]);

  // savedItems$ = this.savedItemsSubject.asObservable();

  // constructor() {
  //   const stored = localStorage.getItem('savedRecommendations');
  //   this.savedItems = stored ? JSON.parse(stored) : [];
  //   this.savedItemsSubject.next(this.savedItems);
  // }

  // toggleItem(item: RecommendedItem) {
  //   const index = this.savedItems.findIndex(i => i.id === item.id);
  //   if (index > -1) {
  //     this.savedItems.splice(index, 1);
  //   } else {
  //     this.savedItems.push(item);
  //   }
  //   localStorage.setItem('savedRecommendations', JSON.stringify(this.savedItems));
  //   this.savedItemsSubject.next([...this.savedItems]);
  // }

  // isItemSaved(item: RecommendedItem): boolean {
  //   return this.savedItems.some(i => i.id === item.id);
  // }

  // getCount(): number {
  //   return this.savedItems.length;
  // }

  private savedItemsSubject = new BehaviorSubject<any[]>([]);
  savedItems$ = this.savedItemsSubject.asObservable();

  toggleItem(item: any): void {
    const currentItems = this.savedItemsSubject.value;
    const index = currentItems.findIndex(saved => saved.id === item.id);
    let updatedItems;

    if (index > -1) {
      updatedItems = [...currentItems.slice(0, index), ...currentItems.slice(index + 1)];
    } else {
      updatedItems = [...currentItems, item];
    }

    this.savedItemsSubject.next(updatedItems);
  }

  getSavedItems(): any[] {
    return this.savedItemsSubject.value;
  }

  isItemSaved(item: any): boolean {
    return this.savedItemsSubject.value.some(saved => saved.id === item.id);
  }

  private searchTerm: string = '';

  setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }

}
// saved-items.service.ts
// export class SavedItemsService {
//   private savedItemIds = new Set<number>(); // or Set<string> depending on your id type

//   toggleItem(item: RecommendedItem): void {
//     if (this.savedItemIds.has(item.id)) {
//       this.savedItemIds.delete(item.id);
//     } else {
//       this.savedItemIds.add(item.id);
//     }
//   }

//   isItemSaved(item: RecommendedItem): boolean {
//     return this.savedItemIds.has(item.id);
//   }

//   getSavedItems(): number[] {
//     return Array.from(this.savedItemIds);
//   }
// }
