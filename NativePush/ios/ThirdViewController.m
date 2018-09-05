//
//  ThirdViewController.m
//  NativePush
//
//  Created by junjie on 2018/9/3.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ThirdViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
@interface ThirdViewController ()

@end

@implementation ThirdViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  self.title = @"第三";
  UILabel *titlelabel = [[UILabel alloc] initWithFrame:CGRectMake(80, 100, 150, 20)];
  titlelabel.font = [UIFont systemFontOfSize:14];
  titlelabel.text = @"这是第三个界面";
  [self.view addSubview:titlelabel];
  
  [self createUI];
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  self.navigationController.navigationBar.hidden = NO;
}

- (void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  self.navigationController.navigationBar.hidden = YES;
}

- (void)createUI {
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  btn.frame = CGRectMake(100, 150, 100, 50);
  btn.backgroundColor = [UIColor redColor];
  [self.view addSubview:btn];
  [btn addTarget:self action:@selector(clickBtn:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)clickBtn:(UIButton *)btn {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"jumpDetail" object:nil];
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"NativePush" initialProperties:@{
                                                                                                                             
                                                                                                                             @"launchOptions":@{
                                                                                                                                 
                                                                                                                                 @"componentName":@"PageOne"
                                                                                                                                 }
                                                                                                                             } launchOptions:nil];
  UIViewController *vc = [[UIViewController alloc] init];
  vc.view = rootView;
  [self.navigationController pushViewController:vc animated:YES];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
