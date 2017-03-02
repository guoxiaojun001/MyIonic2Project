package org.apache.cordova.xmqq;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

//import com.ionicframework.myionic2project571494.TestActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import static android.app.Activity.RESULT_OK;

/**
 * This class echoes a string called from JavaScript.
 */
public class XmPlugin extends CordovaPlugin {

  private static final int TAKE_PHOTO_REQUEST_CODE = 1;

  CallbackContext callbackContext;
  private Uri mOutPutFileUri;
  File file;

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


      //Intent intent  = new Intent(this.cordova.getActivity(),TestActivity.class);
      //无侵入方式调用
      Intent intent = new Intent();
      //设置 Intent 的动作
      intent.setAction("com.xmqq.test");

      intent.putExtra("parm",message);
      this.cordova.startActivityForResult(XmPlugin.this,intent,100);

      return true;
    }else if(action.equals("method03")){
      openTakePhoto();
      return  true;
    }  else {

      Toast.makeText(this.cordova.getActivity(), "==方法名称不对==", Toast.LENGTH_SHORT).show();

      return super.execute(action, args, callbackContext);
    }


  }


  private void openTakePhoto(){
    /**
     * 在启动拍照之前最好先判断一下sdcard是否可用
     */
    String state = Environment.getExternalStorageState(); //拿到sdcard是否可用的状态码
    if (state.equals(Environment.MEDIA_MOUNTED)){   //如果可用

      if (ContextCompat.checkSelfPermission(this.cordova.getActivity(),
        Manifest.permission.CAMERA)
        != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(this.cordova.getActivity(),
          new String[]{Manifest.permission.CAMERA},
          TAKE_PHOTO_REQUEST_CODE);
      } else {

        openCamera();
//        Intent intent = new Intent(
//          MediaStore.ACTION_IMAGE_CAPTURE, null);
//        intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri
//          .fromFile(new File(filePath)));
//        this.cordova.startActivityForResult(XmPlugin.this,intent, 200);

      }

    }else {
      Toast.makeText(this.cordova.getActivity(),"sdcard不可用",Toast.LENGTH_SHORT).show();
    }
  }

  private void openCamera() {
    Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

    //文件夹aaaa
    String path = Environment.getExternalStorageDirectory().toString()+"/aaaa";
    File path1 = new File(path);
    if(!path1.exists()){
      path1.mkdirs();
    }
    file = new File(path1,System.currentTimeMillis()+".jpg");
    mOutPutFileUri = Uri.fromFile(file);
    intent.putExtra(MediaStore.EXTRA_OUTPUT, mOutPutFileUri);

   // intent.putExtra("crop", "true");

    //// aspectX aspectY 是宽高的比例
   // intent.putExtra("aspectX", 1);
   // intent.putExtra("aspectY", 1);

    //// outputX,outputY 是剪裁图片的宽高
    //intent.putExtra("outputX", 300);
    //intent.putExtra("outputY", 300);
    //intent.putExtra("return-data", true);
    //intent.putExtra("noFaceDetection", true);

    this.cordova.startActivityForResult(XmPlugin.this,intent,200);
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


      if(requestCode == 200){

//        callbackContext.success(mOutPutFileUri + "" );

        Log.d("TTTT","11111111");
        try {
          Bitmap photo =  getBitmapFormUri(this.cordova.getActivity(),mOutPutFileUri);
          Toast.makeText(this.cordova.getActivity(),"相机 == ",Toast.LENGTH_SHORT).show();
          Log.d("TTTT","2222222222");
          callbackContext.success(/*file.getAbsolutePath()*/imgToBase64(photo) );
          Log.d("TTTT","33333");
        } catch (IOException e) {
          Log.d("TTTT","4444444" + e.getMessage());
          e.printStackTrace();
        }

      }
    }
  }


  /**
   * 通过uri获取图片并进行压缩
   *
   * @param uri
   */
  public static Bitmap getBitmapFormUri(Context ac, Uri uri) throws FileNotFoundException, IOException {
    InputStream input = ac.getContentResolver().openInputStream(uri);
    BitmapFactory.Options onlyBoundsOptions = new BitmapFactory.Options();
    onlyBoundsOptions.inJustDecodeBounds = true;
    onlyBoundsOptions.inDither = true;//optional
    onlyBoundsOptions.inPreferredConfig = Bitmap.Config.ARGB_8888;//optional
    BitmapFactory.decodeStream(input, null, onlyBoundsOptions);
    input.close();
    int originalWidth = onlyBoundsOptions.outWidth;
    int originalHeight = onlyBoundsOptions.outHeight;
    if ((originalWidth == -1) || (originalHeight == -1))
      return null;
    //图片分辨率以480x800为标准
    float hh = 200f;//这里设置高度为800f
    float ww = 120f;//这里设置宽度为480f
    //缩放比。由于是固定比例缩放，只用高或者宽其中一个数据进行计算即可
    int be = 1;//be=1表示不缩放
    if (originalWidth > originalHeight && originalWidth > ww) {//如果宽度大的话根据宽度固定大小缩放
      be = (int) (originalWidth / ww);
    } else if (originalWidth < originalHeight && originalHeight > hh) {//如果高度高的话根据宽度固定大小缩放
      be = (int) (originalHeight / hh);
    }
    if (be <= 0)
      be = 1;
    //比例压缩
    BitmapFactory.Options bitmapOptions = new BitmapFactory.Options();
    bitmapOptions.inSampleSize = be;//设置缩放比例
    bitmapOptions.inDither = true;//optional
    bitmapOptions.inPreferredConfig = Bitmap.Config.ARGB_8888;//optional
    input = ac.getContentResolver().openInputStream(uri);
    Bitmap bitmap = BitmapFactory.decodeStream(input, null, bitmapOptions);
    input.close();

    return compressImage(bitmap);//再进行质量压缩
  }



  /**
   * 质量压缩方法
   *
   * @param image
   * @return
   */
  public static Bitmap compressImage(Bitmap image) {

    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    image.compress(Bitmap.CompressFormat.JPEG, 50, baos);//质量压缩方法，这里100表示不压缩，把压缩后的数据存放到baos中
    int options = 100;
    while (baos.toByteArray().length / 1024 > 40) {  //循环判断如果压缩后图片是否大于400kb,大于继续压缩
      baos.reset();//重置baos即清空baos
      //第一个参数 ：图片格式 ，第二个参数： 图片质量，100为最高，0为最差  ，第三个参数：保存压缩后的数据的流
      image.compress(Bitmap.CompressFormat.JPEG, options, baos);//这里压缩options%，把压缩后的数据存放到baos中
      options -= 10;//每次都减少10
    }
    ByteArrayInputStream isBm = new ByteArrayInputStream(baos.toByteArray());//把压缩后的数据baos存放到ByteArrayInputStream中
    Bitmap bitmap = BitmapFactory.decodeStream(isBm, null, null);//把ByteArrayInputStream数据生成图片
    return bitmap;
  }




  public static String imgToBase64(Bitmap bitmap ) {

          if(bitmap == null){
              //bitmap not found!!
              Log.d("TTT","bitmap = " + bitmap);

              return null;
          }
          ByteArrayOutputStream out = null;
          try {
              out = new ByteArrayOutputStream();
              bitmap.compress(Bitmap.CompressFormat.JPEG, 80, out);

              out.flush();
              out.close();

              byte[] imgBytes = out.toByteArray();
              return Base64.encodeToString(imgBytes, Base64.DEFAULT);
          } catch (Exception e) {
            Log.d("TTT","Exception = " + e.getMessage());
              return null;
          } finally {
              try {
                  out.flush();
                  out.close();
              } catch (IOException e) {
                  e.printStackTrace();
              }
          }
      }


}
