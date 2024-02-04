import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../model-produit/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {
  // liste des produits
  private _Produit: Produit[] = [];

  // ajoute un produit
  public ajoutProduit(p: Produit) {
    this._Produit.push(p);
  }

  // modifie les données d'instance de produit
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

  // retourne l'instance de produit
  public getProduits(): Observable<Produit[]> {
    return of([...this._Produit]);
  }
}
