import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
  constructor() {}

  getBatteryLevel(): number {
    // 这里应该使用NativeScript的API来获取实际的电池电量
    // 现在我们只返回一个模拟的值
    return Math.floor(Math.random() * 100);
  }

  getChargingHistory(): { time: string, level: number }[] {
    // 这里应该返回实际的充放电历史
    // 现在我们只返回模拟数据
    return [
      { time: '00:00', level: 100 },
      { time: '06:00', level: 80 },
      { time: '12:00', level: 60 },
      { time: '18:00', level: 40 },
      { time: '24:00', level: 20 }
    ];
  }

  getAppUsage(): { name: string, usage: number }[] {
    // 这里应该返回实际的应用耗电占比
    // 现在我们只返回模拟数据
    return [
      { name: '微信', usage: 30 },
      { name: '抖音', usage: 25 },
      { name: '浏览器', usage: 15 },
      { name: '邮件', usage: 10 },
      { name: '其他', usage: 20 }
    ];
  }
}