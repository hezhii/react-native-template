//
//  RNAmapGeolocation.h
//  NewbestApp
//
//  Created by 何洲 on 2020/8/24.
//  Copyright © 2020 Facebook. All rights reserved.
//

#ifndef RNAmapGeolocation_h
#define RNAmapGeolocation_h

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <AMapFoundationKit/AMapFoundationKit.h>
#import <AMapLocationKit/AMapLocationKit.h>

@interface RNAmapGeolocation : RCTEventEmitter <RCTBridgeModule, AMapLocationManagerDelegate>

@property (nonatomic, strong) AMapLocationManager *manager;

@end

#endif /* RNAmapGeolocation_h */
