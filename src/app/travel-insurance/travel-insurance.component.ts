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

  constructor(private _formBuilder: FormBuilder, private dataService: DataService) { }

  regions: ContractItem[];
  sports: ContractItem[];
  ageGroups: ContractItem[];
  insuranceAmounts: ContractItem[];
  displayedColumns = ['firstName', 'lastName', 'personalID', 'passportNumber', 'address', 'phoneNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  insPerson: InsuredPerson;

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      startPickerCtrl: ['', Validators.required],
      endPickerCtrl : ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.dataService.findAllContractItems('region').then(regions => this.regions = regions);
    this.dataService.findAllContractItems('sport').then(sports => this.sports = sports);
    this.dataService.findAllContractItems('ageGroup').then(ageGroups => this.ageGroups = ageGroups);
    this.dataService.findAllContractItems('insuranceAmount').then(insuranceAmounts => this.insuranceAmounts = insuranceAmounts);

  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
