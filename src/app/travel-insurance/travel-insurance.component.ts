import {Component, Input, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ContractItem} from './ContractItem';
import {MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AddPersonDialogComponent } from '../add-person-dialog/add-person-dialog.component';
import { StavkaCenovnika } from './StavkaCenovnika';

@Component({
  selector: 'app-travel-insurance',
  templateUrl: './travel-insurance.component.html',
  styleUrls: ['./travel-insurance.component.css']
})
export class TravelInsuranceComponent implements OnInit {

  displayedColumns = ['category', 'name', 'price'];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  objectFormGroup: FormGroup;
  carFormGroup: FormGroup;
  preBillFormGroup: FormGroup;
  licaFormGroup:FormGroup;
  elementData: GroupItemPrice[];

  aktivanPorodicni = false;

  constructor(private _formBuilder: FormBuilder, private dataService: DataService, public dialog: MatDialog) { }

  regioni: StavkaCenovnika[];
  sportovi: StavkaCenovnika[];
  starosneGrupe: StavkaCenovnika[];
  iznosiOsiguranja: StavkaCenovnika[];
  objectAges: ContractItem[];
  areas: ContractItem[];
  insurances: ContractItem[];
  packages: ContractItem[];


  selectedRegionValue: ContractItem;
  selectedAgeGroupValue: ContractItem;
  selectedSportValue: ContractItem;
  selectedInsuranceAmountValue: ContractItem;

  dataSource = new MatTableDataSource<GroupItemPrice>(ELEMENT_DATA);

  insPerson: InsuredPerson;
  groupItemPrice: GroupItemPrice;
  stavkeAktivnogCenovnika: StavkaCenovnika[];

  todaysDate: any;
  datumIstekaOsiguranja: any;

  ngOnInit() {

    this.todaysDate = new Date();

    this.firstFormGroup = this._formBuilder.group({
      pocetakVazenjaOsiguranja: ['', Validators.required],
      krajVazenjaOsiguranja : ['', Validators.required],
      region: ['', Validators.required],
      starosnaGrupa: ['', Validators.required],
      brojOsiguranihOsoba: ['', [Validators.required, Validators.min(1)]],
      sportovi: ['', Validators.required],
      iznosOsiguranja: ['',Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.objectFormGroup = this._formBuilder.group({
      areaCtrl: ['', Validators.required],
      objectAgeCtrl: ['', Validators.required],
      insuranceCtrl: ['', Validators.required]
    });

    this.carFormGroup = this._formBuilder.group({
      packageCtrl: ['', Validators.required]
    });

    this.preBillFormGroup = this._formBuilder.group({
      preBillCtrl: ['', Validators.required]
    });

    this.licaFormGroup = this._formBuilder.group({
      licaCtrl: ['', Validators.required]
    });


    this.dataService.nadjiAktivanCenovnik().subscribe(cenovnik => {
      this.stavkeAktivnogCenovnika = cenovnik.stavkeCenovnika;
      this.regioni = this.stavkeAktivnogCenovnika.filter((stavka: StavkaCenovnika) => stavka.kategorija === 'region');
      this.sportovi = this.stavkeAktivnogCenovnika.filter((stavka: StavkaCenovnika) => stavka.kategorija === 'sport');
      this.starosneGrupe = this.stavkeAktivnogCenovnika.filter((stavka: StavkaCenovnika) => stavka.kategorija === 'starosnaGrupa');
      this.iznosiOsiguranja = this.stavkeAktivnogCenovnika.filter((stavka: StavkaCenovnika) => stavka.kategorija === 'iznosOsiguranja');
    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPersonDialogComponent, {
      height: '350px',
      data: { text: 'text'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  validirajDatumIstekaOsiguranja() {
    console.log("ae");
    this.datumIstekaOsiguranja = this.firstFormGroup.value.pocetakVazenjaOsiguranja;
  }


izabranPaket(paket){
  if(paket.value === "porodicno"){
    this.aktivanPorodicni = true;
  }
  else{
    this.aktivanPorodicni = false;
  }
}

chooseValue(selectedValue){

  ELEMENT_DATA[0].name = this.selectedRegionValue.name;
  ELEMENT_DATA[0].category = this.selectedRegionValue.itemGroup;
  ELEMENT_DATA[1].name = this.selectedAgeGroupValue.name;
  ELEMENT_DATA[1].category = this.selectedAgeGroupValue.itemGroup;
  ELEMENT_DATA[2].name = this.selectedSportValue.name;
  ELEMENT_DATA[2].category = this.selectedSportValue.itemGroup;
  ELEMENT_DATA[3].name = this.selectedInsuranceAmountValue.name;
  ELEMENT_DATA[3].category = this.selectedInsuranceAmountValue.itemGroup;
}


  paketi = [
    {value: 'individualno', viewValue: 'Individualno'},
    {value: 'porodicno', viewValue: 'Porodicno'}
  ];

}

const ELEMENT_DATA: GroupItemPrice[] = [
  {category: '', name: '', price: 1.0079},
  {category: '', name: '', price: 4.0026},
  {category: '', name: '', price: 4.0026},
  {category: '', name: '', price: 4.0026}
];


export interface InsuredPerson {
  firstName: string;
  lastName: string;
  personalID: string;
  passportNumber: string;
  address: string;
  phoneNumber: string;
}

export interface GroupItemPrice {
  category: String;
  name: String;
  price: number;
}

