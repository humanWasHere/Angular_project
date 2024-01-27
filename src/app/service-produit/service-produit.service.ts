import { Injectable } from '@angular/core';
import { Produit } from '../model-produit/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  public _Produit: Produit[] = [];

  public ajoutProduit(p: Produit){
    this._Produit.push(p);
  }

  public updateProduit(p: Produit) {
    // Recherche de l'index du produit à mettre à jour
    const index = this._Produit.findIndex(prod => prod.Id === p.Id);

    // Vérification si le produit existe dans la liste
    if (index !== -1) {
        // Remplacement du produit existant par le nouveau produit
        this._Produit[index] = p;
    } else {
        console.log("Le produit à mettre à jour n'existe pas dans la liste.");
    }
}


  public getProduits(){
    return this._Produit;
  }
}
