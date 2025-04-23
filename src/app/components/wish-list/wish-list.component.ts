import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { RecommendedItem, SavedItemsService } from '../../services/saved-items.service';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  savedItems: any[] = [];
  showFullTitle: { [key: string]: boolean } = {};
  savedCount: any;
    constructor(private wishlistService: WishlistService,private savedItemsService: SavedItemsService) {}

    ngOnInit(): void {
      this.savedItems = this.savedItemsService.getSavedItems();
    }

    toggleTitle(title: string) {
      this.showFullTitle[title] = !this.showFullTitle[title];
    }

    saveCard(card: any) {
        this.wishlistService.addCard(card);
        this.savedCount = this.wishlistService.getSavedCards().length;
      }

      toggleSave(item: any): void {
        this.savedItemsService.toggleItem(item);
      }


      onBookmarkClick(event: MouseEvent, item: any): void {
        event.stopPropagation();
        event.preventDefault();
        this.toggleSave(item);
        this.savedCount = this.savedItemsService.getSavedItems().length;

      }

      isItemSaved(item: RecommendedItem): boolean {

        return this.savedItemsService.isItemSaved(item);
      }

}
