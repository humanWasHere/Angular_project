import { Component } from '@angular/core';
import { Produit } from '../model-produit/produit.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  public produit = new Produit();

}
