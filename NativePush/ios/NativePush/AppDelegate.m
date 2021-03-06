/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"NativePush"
                                               initialProperties:@{
                                                                   
                                                                   @"launchOptions":@{
                                                                       
                                                                       @"componentName":@"PageOne"
                                                                       }
                                                                   }
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  _rootViewController = [UIViewController new];
  _rootViewController.view = rootView;
  self.window.rootViewController = _rootViewController;
  
//  _nav = [[UINavigationController alloc]initWithRootViewController:rootViewController];
//
//  self.window.rootViewController = _nav;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
