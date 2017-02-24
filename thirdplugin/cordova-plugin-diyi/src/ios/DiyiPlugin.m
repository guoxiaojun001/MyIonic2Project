//
//  DiyiPlugin.m
//  HuakaiClient
//
//  Created by baptechs on 16/11/25.
//
//

#import "DiyiPlugin.h"


@implementation DiyiPlugin

@synthesize callbackID;

@synthesize maessg;



-(void) diyiciFangFaMing:(CDVInvokedUrlCommand*)command

{

 self.callbackID = command.callbackId;
    maessg=[command.arguments objectAtIndex:0];
    
    NSLog(@"====%@",maessg);
    

    CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"的方式是多少是的是谁的"];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}

@end
