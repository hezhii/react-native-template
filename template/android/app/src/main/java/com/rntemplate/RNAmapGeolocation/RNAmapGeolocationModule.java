package com.rntemplate.RNAmapGeolocation;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class RNAmapGeolocationModule extends ReactContextBaseJavaModule implements AMapLocationListener {
    private AMapLocationClient client;
    private AMapLocationClientOption option = new AMapLocationClientOption();

    RNAmapGeolocationModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        client = new AMapLocationClient(reactContext);
        client.setLocationListener(this);
    }

    @NonNull
    @Override
    public String getName() {
        return "RNAmapGeolocation";
    }

    @Override
    public void onLocationChanged(AMapLocation aMapLocation) {
        if (aMapLocation != null) {
            sendEvent("onLocationChanged", toJSON(aMapLocation));
        }
    }


    @ReactMethod
    public void start() {
        client.startLocation();
    }

    @ReactMethod
    public void stop() {
        client.stopLocation();
    }

    @ReactMethod
    public void isStarted(Promise promise) {
        promise.resolve(client.isStarted());
    }

    @ReactMethod
    public void getLastKnownLocation(Promise promise) {
        promise.resolve(toJSON(client.getLastKnownLocation()));
    }

    @ReactMethod
    public void setOnceLocation(boolean value) {
        option.setOnceLocation(value);
        client.setLocationOption(option);
    }

    @ReactMethod
    public void setInterval(int interval) {
        option.setInterval(interval);
        client.setLocationOption(option);
    }

    @ReactMethod
    public void setNeedAddress(boolean value) {
        option.setNeedAddress(value);
        client.setLocationOption(option);
    }

    @ReactMethod
    public void setMockEnable(boolean value) {
        option.setMockEnable(value);
        client.setLocationOption(option);
    }

    @ReactMethod
    public void setHttpTimeout(int value) {
        option.setHttpTimeOut(value);
        client.setLocationOption(option);
    }

    @ReactMethod
    public void setLocationCacheEnable(boolean value) {
        option.setLocationCacheEnable(value);
        client.setLocationOption(option);
    }

    private void sendEvent(String eventName,
                           @Nullable Object data) {
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, data);
    }

    private ReadableMap toJSON(AMapLocation location) {
        if (location == null) {
            return null;
        }
        WritableMap map = Arguments.createMap();
        map.putInt("errorCode", location.getErrorCode());
        map.putString("errorInfo", location.getErrorInfo());
        map.putString("locationDetail", location.getLocationDetail());
        if (location.getErrorCode() == AMapLocation.LOCATION_SUCCESS) {
            map.putDouble("timestamp", location.getTime());
            map.putDouble("accuracy", location.getAccuracy());
            map.putDouble("latitude", location.getLatitude());
            map.putDouble("longitude", location.getLongitude());
            map.putDouble("altitude", location.getAltitude());
            map.putDouble("speed", location.getSpeed());
            map.putDouble("heading", location.getBearing());
            map.putInt("locationType", location.getLocationType());
            map.putString("coordinateType", location.getCoordType());
            map.putInt("gpsAccuracy", location.getGpsAccuracyStatus());
            map.putInt("trustedLevel", location.getTrustedLevel());
            if (!location.getAddress().isEmpty()) {
                map.putString("address", location.getAddress());
                map.putString("description", location.getDescription());
                map.putString("poiName", location.getPoiName());
                map.putString("country", location.getCountry());
                map.putString("province", location.getProvince());
                map.putString("city", location.getCity());
                map.putString("cityCode", location.getCityCode());
                map.putString("district", location.getDistrict());
                map.putString("street", location.getStreet());
                map.putString("streetNumber", location.getStreetNum());
                map.putString("adCode", location.getAdCode());
            }
        }
        return map;
    }
}
