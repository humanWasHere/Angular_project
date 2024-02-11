import { Component, OnInit } from '@angular/core';
import { PapeterieService } from '../service-papeterie/papeterie-service.service';
import { Papeterie } from '../model-papeterie/papeterie.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papeterie',
  templateUrl: './papeterie.component.html',
  styleUrls: ['./papeterie.component.scss']
})
export class PapeterieComponent implements OnInit {
  papeteries: Papeterie[] = [];
  papeterieForm: FormGroup;

  constructor(private papeterieService: PapeterieService, private fb: FormBuilder,
    private router: Router) {
    this.papeterieForm = this.fb.group({
      name: ['', Validators.required],
      texture: ['', Validators.required],
      grammage: [''],
      prix: [null, Validators.required],
      couleur: ['']
    });
  }

  ngOnInit(): void {
    this.loadPapeteries();
  }

  loadPapeteries(): void {
    this.papeterieService.getPapeteries().subscribe((data) => {
      this.papeteries = data;
    });
  }

  addPapeterie(): void {
    if (this.papeterieForm.valid) {
      const newPapeterie: Papeterie = this.papeterieForm.value;
      this.papeterieService.addPapeterie(newPapeterie).subscribe((result) => {
        this.papeteries.push(result);
        this.resetForm();
      });
    }
  }

  updatePapeterie(id: number): void {
    if (this.papeterieForm.valid) {
      const updatedPapeterie: Papeterie = this.papeterieForm.value;
      this.papeterieService.updatePapeterie(id, updatedPapeterie).subscribe(() => {
        const index = this.papeteries.findIndex(p => p.Id === id);
        if (index !== -1) {
          this.papeteries[index] = updatedPapeterie;
          this.resetForm();
        }
      });
    }
  }

  deletePapeterie(id: number): void {
    this.papeterieService.deletePapeterie(id).subscribe(() => {
      this.papeteries = this.papeteries.filter(p => p.Id !== id);
    });
  }

  resetForm(): void {
    this.papeterieForm.reset();
  }

  public goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
