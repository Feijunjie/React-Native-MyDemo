//
//  PushNative.m
//  RNAddNative
//
//  Created by Shaoting Zhou on 2017/2/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "PushNative.h"
#import "TestController.h"
#import "AppDelegate.h"
@implementation PushNative
RCT_EXPORT_MODULE();
- (instancetype)init {
  if (self = [super init]) {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(senderNotification:) name:@"jumpDetail" object:nil];
  }
  return self;
}


// 传值+跳转
RCT_EXPORT_METHOD(RNOpenOneVC){
//  NSLog(@"%@", name);
  //跳转界面
  //主要这里必须使用主线程发送,不然有可能失效
  dispatch_async(dispatch_get_main_queue(), ^{
    TestController *one = [[TestController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:one];
    [app.rootViewController presentViewController:nav animated:YES completion:nil];
  });
}

//传多值
RCT_EXPORT_METHOD(addEventWithString:(NSString *)string Detail:(NSDictionary *)dic) {
  NSLog(@"string == %@, dic == %@",string, dic);
}

//回调
RCT_EXPORT_METHOD(TestWithCallBackOne:(NSString *)string callBack:(RCTResponseSenderBlock)callBack) {
  NSLog(@"string == %@",string);
  NSArray *events=@[@"1", @"2", @"3",@"4"];
  callBack(@[[NSNull null],events]);
}

//原生模块可以导出一些常量，这些常量在JavaScript端随时都可以访问。用这种方法来传递一些静态数据，可以避免通过bridge进行一次来回交互。
- (NSDictionary *)constantsToExport
{
  return @{@"customDicKey":@"this is customDic"};
}


#pragma mark -- 发送通知

- (NSArray<NSString *> *)supportedEvents {
  return @[@"notityIosToRN"];//这个标识符要和RN那边接收的通知名字一致
}


- (void)senderNotification:(NSNotification *)sender {
  [self sendEventWithName:@"notityIosToRN" body:sender.name];
}

@end
