import { ServiceProduitService } from './../service-produit/service-produit.service';
import { Component } from '@angular/core';
import { Produit } from '../model-produit/produit.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  // set les services de la classe Produit()
  public constructor(private router: Router, private _produitService: ServiceProduitService){ }
  public produit = new Produit();

  // défini les conditions de formulaire
  public formulaireProduit = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required)
  });

  // set un produit specific après completion du form
  public onSubmit() {
    this.produit = new Produit();
    this.produit.Id = this._produitService.getProduits().length + 1;
    this.produit.Nom = this.formulaireProduit.value.nom!;
    this.produit.Texture = this.formulaireProduit.value.texture!;
    this.produit.Grammage = parseInt(this.formulaireProduit.value.grammage!);
    this.produit.Couleur = this.formulaireProduit.value.couleur!;
    this._produitService.ajoutProduit(this.produit);
  }

  // retourne la liste des produits par injection de dépendance de produitServices
  public getListeProduits() {
    return this._produitService.getProduits();
  }

  // fonction de redirection de type routing prenant le nom de la page en entrée
  public goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
