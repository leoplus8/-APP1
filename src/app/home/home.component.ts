import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  batteryLevel: number;
  chargingHistory: { time: string, level: number }[] = [];
  appUsage: { name: string, usage: number }[] = [];

  constructor(private batteryService: BatteryService) {}

  ngOnInit() {
    this.batteryLevel = this.batteryService.getBatteryLevel();
    this.chargingHistory = this.batteryService.getChargingHistory();
    this.appUsage = this.batteryService.getAppUsage();
  }
}