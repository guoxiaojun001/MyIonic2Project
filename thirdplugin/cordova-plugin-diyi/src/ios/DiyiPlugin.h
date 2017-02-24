//
//  DiyiPlugin.h
//  HuakaiClient
//
//  Created by baptechs on 16/11/25.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>


@interface DiyiPlugin : CDVPlugin

@property (nonatomic, copy) NSString* callbackID;

@property (nonatomic, copy) NSString* maessg;


-(void) diyiciFangFaMing:(CDVInvokedUrlCommand*)command;


@end
