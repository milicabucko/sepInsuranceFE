import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ContractItem} from './ContractItem';
import {MatTableDataSource} from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel-insurance',
  templateUrl: './travel-insurance.component.html',
  styleUrls: ['./travel-insurance.component.css']
})
export class TravelInsuranceComponent implements OnInit {

  /*isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      begOfInsuranceCtrl : ['', Validators.required],
      endOfInsuranceCtrl : ['', Validators.required],
      ageGroupCtrl : ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }*/

  displayedColumns = ['name', 'price'];


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  objectFormGroup: FormGroup;
  carFormGroup: FormGroup;
  preBillFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder, private dataService: DataService) { }

  regions: ContractItem[];
  sports: ContractItem[];
  ageGroups: ContractItem[];
  insuranceAmounts: ContractItem[];
  objectAges: ContractItem[];
  areas: ContractItem[];
  insurances: ContractItem[];
  packages: ContractItem[];
  region: String;




  dataSource = new MatTableDataSource<GroupItemPrice>(ELEMENT_DATA);


  insPerson: InsuredPerson;
  groupItemPrice: GroupItemPrice;

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      startPickerCtrl: ['', Validators.required],
      endPickerCtrl : ['', Validators.required],
      travelRegionCtrl: ['', Validators.required],
      agesCtrl: ['', Validators.required],
      numberCtrl: ['', Validators.required],
      sportCtrl: ['', Validators.required]
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







    this.dataService.findAllContractItems('region').then(regions => this.regions = regions);
    this.dataService.findAllContractItems('sport').then(sports => this.sports = sports);
    this.dataService.findAllContractItems('ageGroup').then(ageGroups => this.ageGroups = ageGroups);
    this.dataService.findAllContractItems('insuranceAmount').then(insuranceAmounts => this.insuranceAmounts = insuranceAmounts);
    this.dataService.findAllContractItems('objectAge').then(objectAges => this.objectAges = objectAges);
    this.dataService.findAllContractItems('insuranceAmount').then(insuranceAmounts => this.insuranceAmounts = insuranceAmounts);
    this.dataService.findAllContractItems('area').then(areas => this.areas = areas);
    this.dataService.findAllContractItems('objectAge').then(objectAges => this.objectAges = objectAges);
    this.dataService.findAllContractItems('insurance').then(insurances => this.insurances = insurances);
    this.dataService.findAllContractItems('package').then(packages => this.packages = packages);
  }



}


export interface InsuredPerson {
  firstName: string;
  lastName: string;
  personalID: string;
  passportNumber: string;
  address: string;
  phoneNumber: string;
}

const ELEMENT_DATA: GroupItemPrice[] = [
  {name: this.region, price: 1.0079},
  {name: 'Helium', price: 4.0026}
];

export interface GroupItemPrice {
  name: string;
  price: number;
}



