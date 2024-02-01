import { Produit } from './../model-produit/produit.model';
import { Component } from '@angular/core';
import { ServiceProduitService } from './../service-produit/service-produit.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {

  // set les services de la classe Produit()
  public constructor(private _route: ActivatedRoute, private _produitService: ServiceProduitService){ }
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
    const specificProduit = this.findSpecificProduit();
    if (specificProduit) {
        this.produit.Id = specificProduit.Id; // Assertion de non-nullité car specificProduit est garanti d'être défini
        this.produit.Nom = this.formulaireProduit.value.nom!;
        this.produit.Texture = this.formulaireProduit.value.texture!;
        this.produit.Grammage = this.formulaireProduit.value.grammage!;
        this.produit.Couleur = this.formulaireProduit.value.couleur!;
        this._produitService.updateProduit(this.produit);
    }
    else {
        console.log("Le produit spécifié n'existe pas.");
    }
  }

  // récupère les produits du service
  public getProduits(){
    return this._produitService.getProduits();
  }

  // décide si le fomulaire de modification doit être visible ou non
  public displayForm(){
    this.sectionVisible = true;
  }

  // récupère l'id de la page detail-produit dans l'url on init
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    return id
  }

  // retourne un object produit qui correspond à l'id recherché dans la liste des produits
  public findSpecificProduit() : Produit | undefined{
    const id = +this._route.snapshot.paramMap.get('id')!; // Retrieve ID from route parameter and convert to number
    return this.getProduits().find(p => p.Id === id);
  }
}
