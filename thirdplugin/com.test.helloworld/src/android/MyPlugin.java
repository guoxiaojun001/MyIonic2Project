package com.test.helloworld;


import android.util.Log;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {


    @Override
    public boolean execute(String action, JSONArray args,
            CallbackContext callbackContext) throws JSONException {

        if (this.cordova.getActivity().isFinishing())
              return true;

        Toast.makeText(cordova.getActivity(), "方法名是："+action,
                  Toast.LENGTH_SHORT).show();

        if (action.equals("coolMethod")) {
            String message = args.getString(0);
             Toast.makeText(cordova.getActivity(),
             "coolMethod 传过来的值是："+message, Toast.LENGTH_SHORT).show();
             callbackContext.success("成功的调用了 coolMethod");

            return true;
        }

        if(action.equals("method2")){
        String message = args.getString(0);
                     Toast.makeText(cordova.getActivity(),
                     "method2 传过来的值是："+message, Toast.LENGTH_SHORT).show();
                     callbackContext.success("成功的调用了 method2");

                    return true;
        }

        return super.execute(action, args, callbackContext);
    }

}
