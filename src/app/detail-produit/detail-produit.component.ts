import { Produit } from './../model-produit/produit.model';
import { Component } from '@angular/core';
import { ServiceProduitService } from './../service-produit/service-produit.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {

  // set les services de la classe Produit()
  public constructor(private _produitService: ServiceProduitService){ }
  public produit = new Produit();

  // set la valeur conditionnelle d'affichage
  sectionVisible: boolean = false;

  // défini les conditions de formulaire
  public formulaireProduit = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required)
  });

  // update un produit specific après modification
  public modifyOnSubmit() {
    this.produit = new Produit();
    this.produit.Id = this.produit.Id;
    this.produit.Nom = this.formulaireProduit.value.nom!;
    this.produit.Texture = this.formulaireProduit.value.texture!;
    this.produit.Grammage = this.formulaireProduit.value.grammage!;
    this.produit.Couleur = this.formulaireProduit.value.couleur!;
    this._produitService.ajoutProduit(this.produit);
  }

  // récupère les produits du service
  public getProduits(){
    return this._produitService.getProduits();
  }

  // décide si le fomulaire de modification doit être visible ou non
  public displayForm(){
    this.sectionVisible = true;
  }

}
