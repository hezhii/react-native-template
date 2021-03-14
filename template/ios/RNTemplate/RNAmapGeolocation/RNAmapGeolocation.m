//
//  RNAmapGeolocation.m
//  NewbestApp
//
//  Created by 何洲 on 2020/8/24.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "RNAmapGeolocation.h"

@implementation RNAmapGeolocation

- (instancetype)init
{
  self = [super init];
  if (self) {
    _manager = [[AMapLocationManager alloc] init];
    _manager.locatingWithReGeocode = true;
    _manager.delegate = self;
  }
  return self;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(start) {
  [_manager startUpdatingLocation];
}

RCT_EXPORT_METHOD(stop) { [_manager stopUpdatingLocation]; }


RCT_EXPORT_METHOD(setLocatingWithReGeocode:(BOOL)value) {
  _manager.locatingWithReGeocode = value;
}

RCT_EXPORT_METHOD(setAllowsBackgroundLocationUpdates:(BOOL)value) {
  _manager.allowsBackgroundLocationUpdates = value;
}

RCT_EXPORT_METHOD(setPausesLocationUpdatesAutomatically:(BOOL)value) {
  _manager.pausesLocationUpdatesAutomatically = value;
}

RCT_EXPORT_METHOD(setDesiredAccuracy:(int)value) {
  _manager.desiredAccuracy = value;
}

RCT_EXPORT_METHOD(setDistanceFilter:(int)value) {
  _manager.distanceFilter = value;
}

RCT_EXPORT_METHOD(setGeoLanguage:(int)value) {
  _manager.reGeocodeLanguage = (AMapLocationReGeocodeLanguage)value;
}

RCT_EXPORT_METHOD(setReGeocodeTimeout:(int)value) {
  _manager.reGeocodeTimeout = value;
}

RCT_EXPORT_METHOD(setLocationTimeout:(int)value) {
  _manager.locationTimeout = value;
}

- (id)json:(CLLocation *)location reGeocode:(AMapLocationReGeocode *)reGeocode {
  if (reGeocode) {
    return @{
      @"errorCode" : @(0),
      @"accuracy" : @(location.horizontalAccuracy),
      @"latitude" : @(location.coordinate.latitude),
      @"longitude" : @(location.coordinate.longitude),
      @"altitude" : @(location.altitude),
      @"speed" : @(location.speed),
      @"heading" : @(location.course),
      @"timestamp" : @(location.timestamp.timeIntervalSince1970 * 1000),
      @"address" : reGeocode.formattedAddress ? reGeocode.formattedAddress
                                              : @"",
      @"poiName" : reGeocode.POIName ? reGeocode.POIName : @"",
      @"country" : reGeocode.country ? reGeocode.country : @"",
      @"province" : reGeocode.province ? reGeocode.province : @"",
      @"city" : reGeocode.city ? reGeocode.city : @"",
      @"cityCode" : reGeocode.citycode ? reGeocode.citycode : @"",
      @"district" : reGeocode.district ? reGeocode.district : @"",
      @"street" : reGeocode.street ? reGeocode.street : @"",
      @"streetNumber" : reGeocode.number ? reGeocode.number : @"",
      @"adCode" : reGeocode.adcode ? reGeocode.adcode : @"",
    };
  } else {
    return @{
      @"errorCode" : @(0),
      @"accuracy" : @(location.horizontalAccuracy),
      @"latitude" : @(location.coordinate.latitude),
      @"longitude" : @(location.coordinate.longitude),
      @"altitude" : @(location.altitude),
      @"speed" : @(location.speed),
      @"direction" : @(location.course),
      @"timestamp" : @(location.timestamp.timeIntervalSince1970 * 1000),
    };
  }
}

- (void)amapLocationManager:(AMapLocationManager *)manager
          didUpdateLocation:(CLLocation *)location
                  reGeocode:(AMapLocationReGeocode *)reGeocode {
  id json = [self json:location reGeocode:reGeocode];
  [self sendEventWithName:@"onLocationChanged" body:json];
}

- (void)amapLocationManager:(AMapLocationManager *)manager
           didFailWithError:(NSError *)error {
  [self sendEventWithName:@"onLocationChanged"
                     body:@{
                       @"errorCode" : @(error.code),
                       @"errorInfo" : error.localizedDescription,
                     }];
}

- (void)amapLocationManager:(AMapLocationManager *)manager
      doRequireLocationAuth:(CLLocationManager *)locationManager {
  [locationManager requestAlwaysAuthorization];
}

- (NSArray<NSString *> *)supportedEvents {
  return @[ @"onLocationChanged" ];
}

@end
