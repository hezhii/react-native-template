package com.rntemplate;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.gyf.immersionbar.ImmersionBar;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RNTemplate";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // @see: https://github.com/gyf-dev/ImmersionBar
    ImmersionBar.with(this).init();
  }
}
