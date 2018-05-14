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

  displayedColumns = ['category', 'name', 'price'];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  objectFormGroup: FormGroup;
  carFormGroup: FormGroup;
  preBillFormGroup: FormGroup;
  licaFormGroup:FormGroup;
  elementData: GroupItemPrice[];

  constructor(private _formBuilder: FormBuilder, private dataService: DataService) { }

  regions: ContractItem[];
  sports: ContractItem[];
  ageGroups: ContractItem[];
  insuranceAmounts: ContractItem[];
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

    this.licaFormGroup = this._formBuilder.group({
     LicaCtrl: ['', Validators.required]
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



