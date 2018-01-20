import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ContractItem} from './ContractItem';
import {MatTableDataSource} from '@angular/material';

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

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  objectFormGroup: FormGroup;
  carFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dataService: DataService) { }

  regions: ContractItem[];
  sports: ContractItem[];
  ageGroups: ContractItem[];
  insuranceAmounts: ContractItem[];
  objectAges: ContractItem[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  insPerson: InsuredPerson;

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
      objectAgeCtrl: ['', Validators.required]
    });

    this.carFormGroup = this._formBuilder.group({
      packageCtrl: ['', Validators.required]
    });

    this.dataService.findAllContractItems('region').then(regions => this.regions = regions);
    this.dataService.findAllContractItems('sport').then(sports => this.sports = sports);
    this.dataService.findAllContractItems('ageGroup').then(ageGroups => this.ageGroups = ageGroups);
    this.dataService.findAllContractItems('insuranceAmount').then(insuranceAmounts => this.insuranceAmounts = insuranceAmounts);
    this.dataService.findAllContractItems('objectAge').then(objectAges => this.objectAges = objectAges);
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

const ELEMENT_DATA: InsuredPerson[] = [
  {firstName: '1', lastName: 'Hydrogen', personalID: '1.0079', passportNumber: 'H', address: 'dasdsa', phoneNumber: '01000000'},
  {firstName: '2', lastName: 'Hydrogen', personalID: '1.0079', passportNumber: 'H', address: 'dasdsa', phoneNumber: '01000000'}
];

