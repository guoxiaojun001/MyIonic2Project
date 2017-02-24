package org.apache.cordova.diyi;

import android.util.Log;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by admin on 2016/11/25.
 */

public class DiyiPlugin extends CordovaPlugin {

  private CallbackContext callbackContext;

  @Override
  public boolean execute(String action, JSONArray args,
                         CallbackContext callbackContext) throws JSONException {

    if (this.cordova.getActivity().isFinishing())
      return true;

    if (action.equals("diyiciFangFaMing")) {
      // 获取传递返回的参数
      this.callbackContext = callbackContext;

      //获取参数
      String out_trade_no = args.getString(0);
      Toast.makeText(cordova.getActivity(), out_trade_no+"====",
       Toast.LENGTH_SHORT).show();
      callbackContext.success("人生如梦");
      return true;//表示是否返回参数

    }


    return super.execute(action, args, callbackContext);
  }

}
