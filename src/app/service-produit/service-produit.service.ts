import { Injectable } from '@angular/core';
import { Produit } from '../model-produit/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  private _Produit: Produit[] = [];

  //à virer
  public ajoutProduit(p: Produit){
    this._Produit.push(p);
  }

  public getProduits(){
    return this._Produit;
  }
}
