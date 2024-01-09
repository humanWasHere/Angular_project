import { ServiceProduitService } from './../service-produit/service-produit.service';
import { Component } from '@angular/core';
import { Produit } from '../model-produit/produit.model';
import { FormControl, FormGroup, Validators } from "@angular/forms"; // à virer

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  public constructor(private _produitService: ServiceProduitService){ }

  public produit = new Produit();

  // à virer
  public formulaireProduit = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required)
  });

  // same
  public onSubmit() {
    this.produit = new Produit();
    this.produit.Id = this._produitService.getProduits().length + 1;
    this.produit.Nom = this.formulaireProduit.value.nom!;
    this.produit.Texture = this.formulaireProduit.value.texture!;
    this.produit.Grammage = typeof this.produit.Grammage === 'number' ? this.produit.Grammage : +this.produit.Grammage;
    // this.produit.Grammage = this.formulaireProduit.value.grammage;
    this.produit.Couleur = this.formulaireProduit.value.couleur!;
    this._produitService.ajoutProduit(this.produit);
  }

  public getListeProduits() {
    return this._produitService.getProduits();
  }
}
