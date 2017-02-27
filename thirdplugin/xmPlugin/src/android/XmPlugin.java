package org.apache.cordova.xmqq;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import android.content.Intent;
import android.widget.Toast;

import com.ionicframework.myionic2project571494.TestActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import static android.app.Activity.RESULT_OK;

/**
 * This class echoes a string called from JavaScript.
 */
public class XmPlugin extends CordovaPlugin {

  CallbackContext callbackContext;

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
    throws JSONException {
    if (this.cordova.getActivity().isFinishing())
      return true;

    this.callbackContext = callbackContext;

    if (action.equals("method01")) {
      String message = args.getString(0);
      callbackContext.success("method01 调用成功" + message);

      return true;
    } else if(action.equals("method02")){

      String message = args.getString(0);
      String message1 = args.getString(1);
      //callbackContext.success("method02 调用成功" + message + message1);


      Intent intent  = new Intent(this.cordova.getActivity(),TestActivity.class);
      intent.putExtra("parm",message);
      this.cordova.startActivityForResult(XmPlugin.this,intent,100);

      return true;
    }else {

      Toast.makeText(this.cordova.getActivity(), "==方法名称不对==", Toast.LENGTH_SHORT).show();

      return super.execute(action, args, callbackContext);
    }


  }


  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent intent) {
    super.onActivityResult(requestCode, resultCode, intent);

    if(resultCode == RESULT_OK){

      if(requestCode == 100 && null != intent ) {
        String  msg =  intent.getStringExtra("backParm");
        Toast.makeText(this.cordova.getActivity(),"参数返回 == " + msg,Toast.LENGTH_SHORT).show();

        callbackContext.success("我是TestActivity 返回的参数===" + msg);
      }
    }
  }
}
